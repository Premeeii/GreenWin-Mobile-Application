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
      setRiderLocation(json);

      const dropdownRider = json.map((item) => ({
        label: `${item.riderLocation}`,
        value: item.riderLocation,
        disable1: item.availableRider === 0,
        disabled: item.availableRider !== 0,
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
          pickupName2: selectLocation2,
          riderLocation: selectRider,
          imageRequest: selectImage,
          destination,
          username: user.username,
          fname: user.fname,
          lname: user.lname,
          tel: user.tel,
          customerImage: imageUri,
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
    if (!selectLocation2) {
      tempError.selectLocation2 = "โปรดเลือกจุดที่ต้องการให้มารับ";
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
    fetchRiderLocation();
    if (isFocus) {
      //refreshข้อมูล
      loadUser();
    }
  }, [isFocus]);

  useEffect(
    () => {
      //สำหรับเมื่อเลือกpickupName 1 แล้ว จะดึงข้อมูล pickupName2 จาก pickupName1ที่เลือก
      if (selectLocation1) {
        const filter = location
          .filter((item) => item.pickupName1 === selectLocation1) //คัดกลองข้อมูลจากที่เลือกpickupName1
          .map((item) => ({
            label: item.pickupName2,
            value: item.pickupName2,
          }));
        console.log("Filtered pickupName2:", filter);
        setDropdownItems2(filter);
      }
    },
    [selectLocation1, location]);

  useEffect(() => {
    const socket = new SockJS("http://10.0.2.2:8080/ws");
    const stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("Connected to WebSocket");

        stompClient.subscribe("/topic/addriderLocation", (message) => {
          const updatedRider = JSON.parse(message.body);
          console.log("RiderLocationUpdate", updatedRider);
          setDropdownRiders((prev) =>
            prev.map((item) =>
              item.value === updatedRider.riderLocation
                ? {
                    ...item,
                    disable1: updatedRider.availableRider === 0,
                    availableRider: updatedRider.availableRider,
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
    <View style={{ padding: 20, marginTop: 90 }}>
      <View style={myStyle.mainprofile}>
        <Image
          source={
            imageUri ? { uri: imageUri } : require("../assets/account.png")
          }
          style={{ width: 80, height: 80, borderRadius: 80 }}
        ></Image>
        <View style={{ marginLeft: 15 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                color: "#fff",
              }}
            >
              {user.username}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("EditProfile")}
              style={{
                position: "absolute",
                left: 230,
              }}
            >
              <View>
                <Feather name="edit" size={20} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={myStyle.textmainprofile}>
            {user.fname} {user.lname}
          </Text>
          <Text style={myStyle.textmainprofile}>
            <Foundation name="telephone" size={15} color="white" />
            {"  "}
            {user.tel}
          </Text>
        </View>
      </View>
      <View style={myStyle.mainservice}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          เลือกสถานที่ที่ต้องการให้มารับ
        </Text>
        {error.selectLocation1 && (
          <Text style={{ color: "red" }}>{error.selectLocation1}</Text>
        )}
        <Dropdown
          style={myStyle.dropdown}
          data={dropdownItems}
          labelField="label"
          valueField="value"
          placeholder=""
          maxHeight={200}
          value={selectLocation1}
          onChange={(item) => {
            setSelectLocation1(item.value);
            setSelectImage(item.imageLocation);
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
              <Text>{item.label}</Text>
            </View>
          )}
        />
        {selectLocation1 && (
          <Dropdown
            style={myStyle.dropdown}
            data={dropdownItems2}
            labelField="label"
            valueField="value"
            placeholder=""
            maxHeight={200}
            value={selectLocation2}
            onChange={(item) => {
              setSelectLocation2(item.value);
            }}
          />
        )}
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          เลือกจุดให้บริการวินมอเตอร์ไซค์สีเขียว
        </Text>
        {error.selectRider && (
          <Text style={{ color: "red" }}>{error.selectRider}</Text>
        )}
        <Dropdown
          style={myStyle.dropdown}
          data={dropdownRiders}
          labelField="label"
          valueField="value"
          placeholder=""
          maxHeight={200}
          value={selectRider}
          onChange={(item) => {
            setSelectRider(item.value);
          }}
          renderItem={(item) => (
            <TouchableOpacity
              disabled={item.disabled}
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 15,
                opacity: item.disable1 ? 0.4 : 1,
              }}
            >
              <Text>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>กำหนดจุดหมาย</Text>
        {error.destination && (
          <Text style={{ color: "red" }}>{error.destination}</Text>
        )}
        <TextInput
          style={myStyle.dropdown}
          placeholder=""
          value={destination}
          onChangeText={setDestination}
        />
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
                  {selectLocation1} {selectLocation2}
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

      <TouchableOpacity
        style={myStyle.servicebutton}
        onPress={() => setCallConfirm(true)}
      >
        <Text style={myStyle.buttonText}>เรียก</Text>
      </TouchableOpacity>

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

      <View
        style={{ position: "absolute", alignSelf: "center", marginTop: 750 }}
      >
        <TouchableOpacity onPress={() => setLogoutConfirm(true)}>
          <Text style={{ fontWeight: "bold" }}>ล็อคเอาค์</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
