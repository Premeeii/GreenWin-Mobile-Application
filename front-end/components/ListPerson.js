import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
  Alert,
  Modal,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { myStyle } from "../styles/mystyle";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import Foundation from "@expo/vector-icons/Foundation";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

export function ListPerson() {
  const [data, setData] = useState([]); //เก็บการดึงข้อมูลuser
  const [location, setLocation] = useState([]); //เก็บการดึงข้อมูลlocation
  const [riderlocation, setRiderLocation] = useState([]); //เก็บการดึงข้อมูลจุดวิน
  const [dropdownItems, setDropdownItems] = useState([]); //ใช้เก็บข้อมูลlocationใส่dropdown
  const [dropdownItems2, setDropdownItems2] = useState([]);
  const [dropdownRiders, setDropdownRiders] = useState([]); //ใช้เก็บข้อมูลจุดวินใส่dropdown
  const [selectLocation1, setSelectLocation1] = useState(null); //เลือกจุดรับ
  const [selectLocation2, setSelectLocation2] = useState(null);
  const [selectImage, setSelectImage] = useState(null); //รูปเลือกภาพจุดรับ
  const [selectRider, setSelectRider] = useState(null); //เลือกจุดวิน
  const [user, setUser] = useState(""); //เก็บข้อมูลUserใส่AsyncStorage
  const [imageUri, setImageUri] = useState(""); //เก็บรูปภาพโปรไฟล์
  const [destination, setDestination] = useState("");
  const [error, setError] = useState({});
  const [callConfirm, setCallConfirm] = useState(false);
  const [logoutConfirm, setLogoutConfirm] = useState(false);
  const [description, setDescription] = useState("");

  const isFocus = useIsFocused(); //ช่วยให้รีเฟรซข้อมูล
  const navigation = useNavigation();

  const loadUser = async () => {
    const stored = await AsyncStorage.getItem("loggedInUser"); //นำข้อมูลมาใช้จากที่loginเช้ามา
    if (stored != null) {
      const userData = await JSON.parse(stored); //นำJSONมาเก็บที่userData
      setUser(userData); //เอาตัวแปรที่set json มาเก็บที่user
      setImageUri(userData.imageUri);
      console.log(imageUri);
    }
  };

  const fetchLocation = async () => {
    try {
      const response = await fetch("http://10.0.2.2:8080/api/location");
      const json = await response.json();
      setLocation(json);

      const dropdownData = Array.from(
        //filterข้อมูลในdropdownไม่ให้ซ้ำ
        new Map(
          json.map((item) => [
            item.pickupName1,
            {
              label: item.pickupName1,
              value: item.pickupName1,
              imageLocation: item.imageLocation,
              description: item.description,
            },
          ])
        ).values()
      ).sort((a, b) => a.label.localeCompare(b.label, "th")); //เรียกลำดับ

      setDropdownItems(dropdownData);
    } catch (error) {
      console.error("Error to fetching Location");
    }
  };

  const fetchRiderLocation = async () => {
    try {
      const response = await fetch("http://10.0.2.2:8080/api/riderlocation");
      const json = await response.json();
      console.log("RiderLocation Response:", json);
      setRiderLocation(json);

      const dropdownRider = json.map((item) => ({
        label: `${item.riderLocation}`,
        value: item.riderLocation,
        disabled: item.availableRider === 0,
        ready: item.availableRider !== 0,
      }));
      setDropdownRiders(dropdownRider);
    } catch (error) {
      console.error("Error to fetching Rider Location");
    }
  };

  const fetchUsers = async () => {
    //ดึงข้อมูล
    try {
      const response = await fetch("http://10.0.2.2:8080/api/user"); // ใช้กับ Emulator
      const json = await response.json(); //รอส่งข้อมูลมาเป็นjson
      setData(json);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const addRequest = async () => {
    if (!validate()) {
      setCallConfirm(false);
      return;
    }
    try {
      const response = await fetch("http://10.0.2.2:8080/api/addrequest", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          pickupName1: selectLocation1,
          riderLocation: selectRider,
          imageRequest: selectImage,
          destination,
          username: user.username,
          fname: user.fname,
          lname: user.lname,
          tel: user.tel,
          customerImage: imageUri,
          description,
        }),
      });

      const text = await response.json();
      console.log("response status:", response.status);
      if (response.ok) {
        Alert.alert("ส่งคำร้อง");
        await AsyncStorage.setItem("requestedByUser", JSON.stringify(text));
        navigation.navigate("Request");
      } else {
        return Alert.alert("ไม่สำเร็จ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validate = () => {
    let valid = true;
    let tempError = {};

    if (!selectLocation1) {
      tempError.selectLocation1 = "โปรดเลือกจุดที่ต้องการให้มารับ";
      valid = false;
    }
    if (!selectRider) {
      tempError.selectRider = "โปรดเลือกจุดให้บริการวินมอเตอร์ไซค์";
      valid = false;
    }
    if (!destination) {
      tempError.destination = "โปรดระบุจุดหมาย";
    }
    setError(tempError);
    return valid;
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("loggedInUser");
      await AsyncStorage.removeItem("token");
      navigation.reset({
        index: 0,
        routes: [{ name: "FirstPage" }],
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchUsers(); // โหลดข้อมูลตอนเปิดหน้านี้
    fetchLocation();
    
    if (isFocus) {
      //refreshข้อมูล
      fetchRiderLocation(); //รีเฟรซที่มาหน้านี้
      loadUser();
    }
  }, [isFocus]);

  

  useEffect(() => {
    const socket = new SockJS("http://10.0.2.2:8080/ws");
    const stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("Connected to WebSocket");

        stompClient.subscribe("/topic/riderLocation", (message) => {
          const updatedRider = JSON.parse(message.body);
          console.log("RiderLocationUpdate", updatedRider);
          fetchRiderLocation(); // ✅ ดึงข้อมูลใหม่จาก backend ทุกครั้งที่มี message
          setDropdownRiders((prev) =>
            prev.map((item) =>
              item.value === updatedRider.riderLocation
                ? {
                    ...item,
                    ready: updatedRider.availableRider !== 0,
                    disabled: updatedRider.availableRider === 0,
                  }
                : item
            )
          );
        });
      },
      onStompError: (frame) => {
        console.error("STOMP Error: " + frame.headers["message"]);
      },
    });
    stompClient.activate();

    return () => {
      if (stompClient) stompClient.deactivate();
    };
  }, []);

  return (

    <View style={{flex: 1, backgroundColor: "#F8F8F8",}}>

      {/* --------------- ส่วนหัว + โปรไฟล์ --------------- */}
        {/* รูปภาพพื้นหลัง */}
        <View style={myStyle.headerHome}>
          <View style={myStyle.headerTitle}>
            <Text style={myStyle.greenwin}>GreenWin</Text>
          </View>

          <Image
            source={require("../assets/tophome.png")}
            style={{ width: "100%", height: "100%"}}
            resizeMode="cover"
          />
        </View>

        {/* ส่วนโปรไฟล์ */}
        <View style={{
          backgroundColor: "#ffffff70", // สีพื้นหลังขาวใสเล็กน้อย
          borderRadius: 20, // มุมโค้งมน
          padding: 30, // ระยะห่างภายในการ์ด
          marginHorizontal: 26, // ระยะห่างด้านข้างของการ์ด
          flexDirection: "row", // จัดวางเนื้อหาในแนวนอน
          alignItems: "center", // จัดกึ่งกลางในแนวตั้ง
          marginTop: 180, // ระยะห่างด้านบนของการ์ด
          zIndex: 15, // ให้การ์ดอยู่เหนือภาพพื้นหลัง
        }}>
            <View style={myStyle.avater}>
                <Image
                  source={ imageUri ? { uri: imageUri } : require("../assets/account.png") }
                  style={{ width: "100%", height: "100%",}}
                />
            </View>
            <View style={{flex: 1,}}>
                <Text style={{color: "#7b8a7f", fontSize: 12,}}>@{user.username}</Text>
                <Text style={{marginTop: 6, fontWeight: "600", fontSize: 14}}>{user.fname} {user.lname}</Text>
                <Text style={{fontWeight: "600", color: "#333"}}>{user.tel}</Text>
            </View>
            <TouchableOpacity 
              onPress={() => navigation.navigate("EditProfile")} 
              style={{marginBottom: 42,}} >
                <View>
                  <Feather name="edit" size={18} color="#666967" />
                </View>
            </TouchableOpacity>
        </View>

      {/* --------------- ส่วนเรียกใช้บริการ --------------- */}
      <View style={myStyle.mainservice}>
        <Text style={{ fontWeight: "700", fontSize: 15 }}>เลือกสถานที่ที่ต้องการให้มารับ</Text>
        {error.selectLocation1 && (
          <Text style={{ color: "red" }}>{error.selectLocation1}</Text>
        )}
        <Dropdown
          style={myStyle.newdropdown}
          data={dropdownItems}
          labelField="label"
          valueField="value"
          placeholder=""
          autoScroll={false} 
          maxHeight={200}
          value={selectLocation1}
          onChange={(item) => {
            setSelectLocation1(item.value);
            setSelectImage(item.imageLocation);
            setDescription(item.description);
            
          }}
          renderItem={(
            item //ใส่รูปภาพลงในDropdown
          ) => (
            <View
              style={{ flexDirection: "row", alignItems: "center", padding: 8 }}
            >
              <Image
                source={{ uri: item.imageLocation }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 5,
                  marginRight: 10,
                }}
              />
              <View>
                <Text style={{color: "#000000ff", fontSize:16}}>{item.label}</Text>
                <Text style={{color: "#000000ff", fontSize:14}}>{item.description}</Text>
              </View>
            </View>
          )}
        />

        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          เลือกจุดให้บริการวินมอเตอร์ไซค์สีเขียว
        </Text>
        {error.selectRider && (
          <Text style={{ color: "red" }}>{error.selectRider}</Text>
        )}
        <Dropdown
          style={myStyle.newdropdown}
          data={dropdownRiders}
          labelField="label"
          valueField="value"
          placeholder=""
          autoScroll={false} 
          maxHeight={200}
          value={selectRider}
          onChange={(item) => {
            if (!item.disabled) {
              setSelectRider(item.value);
            }
          }}
          renderItem={(item) => (
            <TouchableOpacity
              disabled={item.ready}
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 15,
                opacity: item.disabled ? 0.4 : 1,
              }}
            >
              <Text>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
        <Text style={{ fontWeight: "bold", fontSize: 15,}}>กำหนดจุดหมาย</Text>
        {error.destination && (
          <Text style={{ color: "red" }}>{error.destination}</Text>
        )}
        <TextInput
          style={myStyle.newdropdown}
          placeholder=""
          value={destination}
          onChangeText={setDestination}
        />
        <TouchableOpacity
        style={myStyle.servicebutton}
        onPress={() => setCallConfirm(true)}
      >
        <Text style={myStyle.buttonText}>เรียก</Text>
      </TouchableOpacity>
      </View>

      <Modal transparent={true} visible={callConfirm}>
        <View style={myStyle.overlay}>
          <View style={myStyle.confirmPopup}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                alignSelf: "center",
                marginBottom: 10,
              }}
            >
              ยืนยันการเรียก
            </Text>
            <View style={{ flexDirection: "column", marginHorizontal: 25 }}>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 15, marginBottom: 10 }}
                >
                  สถานที่มารับ:
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    flexShrink: 1,
                    marginLeft: 4,
                  }}
                >
                  {selectLocation1} 
                </Text>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  marginBottom: 10,
                  flexShrink: 1,
                  marginTop: 4,
                }}
              >
                จุดบริการ: {selectRider}
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  marginBottom: 10,
                  flexShrink: 1,
                  marginTop: 4,
                }}
              >
                จุดหมาย: {destination}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                style={myStyle.acceptButton}
                onPress={addRequest}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    color: "#fff",
                    marginVertical: 2,
                  }}
                >
                  ตกลง
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={myStyle.cancelButton}
                onPress={() => setCallConfirm(false)}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    marginVertical: 2,
                  }}
                >
                  ยกเลิก
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      
      <Modal transparent={true} visible={logoutConfirm} animationType="fade">
        <View style={myStyle.overlay}>
          <View style={myStyle.logoutPopup}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                alignSelf: "center",
                marginBottom: 10,
              }}
            >
              ยืนยันการออกจากระบบ
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                style={myStyle.acceptButton}
                onPress={handleLogout}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    color: "#fff",
                    marginVertical: 2,
                  }}
                >
                  ตกลง
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={myStyle.cancelButton}
                onPress={() => setLogoutConfirm(false)}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    alignItems: "center",
                  }}
                >
                  ยกเลิก
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={myStyle.menu}>

        <TouchableOpacity onPress={() => navigation.navigate("History")}>
          <Image
            source={require("../assets/time.png")}
            style={myStyle.time}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setLogoutConfirm(true)}>
          <Image
            source={require("../assets/logout.png")}
            style={myStyle.logout}
          />
        </TouchableOpacity>

      </View>
      
    </View>
  );
}
