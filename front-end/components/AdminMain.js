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

export function AdminMain() {
  const [data, setData] = useState([]); //เก็บการดึงข้อมูลuser
  const [user, setUser] = useState(""); //เก็บข้อมูลUserใส่AsyncStorage
  const [imageUri, setImageUri] = useState(""); //เก็บรูปภาพโปรไฟล์
  const [selectRegister, setSelectRegister] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [callConfirm, setCallConfirm] = useState(false);
  const [logoutConfirm, setLogoutConfirm] = useState(false);
  const [riderRegister, setRiderRegister] = useState([]);

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

  const fetchRiderRegister = async () => {
    try {
      const response = await fetch("http://10.0.2.2:8080/api/getriderregister");
      const data = await response.json();
      setRiderRegister(data);
    } catch (error) {
      console.log(error);
    }
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

  const addRider = async () => {
    try {
      const response = await fetch("http://10.0.2.2:8080/api/addrider", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: selectRegister.username,
          rider_firstname: selectRegister.riderFirstname,
          rider_lastname: selectRegister.riderLastname,
          password: selectRegister.password,
          tel: selectRegister.tel,
          vehicle: selectRegister.brandVehicle,
          riderLocation: selectRegister.riderLocation,
          license: selectRegister.license,
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("Server error:", text);
        Alert.alert("ไม่สามารถเพิ่มข้อมูลได้", text);
        return;
      }
    } catch (error) {
      console.log(error);
    }

    const response = await fetch(
      `http://10.0.2.2:8080/api/deltriderregister/${selectRegister.username}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      console.log("Add Rider Success");
    }
    Alert.alert("สำเร็จ", "เพิ่มข้อมูลวินมอเตอร์ไซค์เรียบร้อยแล้ว");
    await fetchRiderRegister();
    setShowDetail(false);
  };

  useEffect(() => {
    fetchUsers(); // โหลดข้อมูลตอนเปิดหน้านี้

    if (isFocus) {
      //refreshข้อมูล
      loadUser();
      fetchRiderRegister();
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
    <View style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      {/* --------------- ส่วนหัว + โปรไฟล์ --------------- */}
      {/* รูปภาพพื้นหลัง */}
      <View style={myStyle.headerHome}>
        <View style={myStyle.headerTitle}>
          <Text style={myStyle.greenwin}>แอดมิน</Text>
        </View>

        <Image
          source={require("../assets/topAdmin.png")}
          style={{ width: "100%", height: "217" }}
          resizeMode="cover"
        />
      </View>

      {/* ส่วนโปรไฟล์ */}
      <View
        style={{
          backgroundColor: "#ffffff70", // สีพื้นหลังขาวใสเล็กน้อย
          borderRadius: 20, // มุมโค้งมน
          padding: 30, // ระยะห่างภายในการ์ด
          marginHorizontal: 26, // ระยะห่างด้านข้างของการ์ด
          flexDirection: "row", // จัดวางเนื้อหาในแนวนอน
          alignItems: "center", // จัดกึ่งกลางในแนวตั้ง
          marginTop: 138, // ระยะห่างด้านบนของการ์ด
          zIndex: 15, // ให้การ์ดอยู่เหนือภาพพื้นหลัง
        }}
      >
        <View style={myStyle.avater}>
          <Image
            source={
              imageUri ? { uri: imageUri } : require("../assets/account.png")
            }
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ color: "#7b8a7f", fontSize: 12 }}>
            @{user.username}
          </Text>
          <Text style={{ marginTop: 6, fontWeight: "600", fontSize: 14 }}>
            {user.fname} {user.lname}
          </Text>
          <Text style={{ fontWeight: "600", color: "#333" }}>{user.tel}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("EditProfile")}
          style={{ marginBottom: 42 }}
        >
          <View>
            <Feather name="edit" size={18} color="#666967" />
          </View>
        </TouchableOpacity>
      </View>

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

      <View style={myStyle.boxAdmin}>
        <Text style={{ fontWeight: "700", fontSize: 20 }}>กล่องคำร้อง</Text>
      </View>
      <View style={{ zIndex: 10, marginTop: 110 }}>
        <FlatList
          data={riderRegister}
          keyExtractor={(item) => item.personId.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "#E1DADA",
                marginBottom: 12,
                padding: 10,
                zIndex: 10,
                borderRadius: 8,
                marginHorizontal: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setSelectRegister(item);
                  setShowDetail(true);
                  console.log(selectRegister);
                }}
              >
                <Text>
                  ชื่อจริง:{item.riderFirstname} นามสกุล:{item.riderLastname}
                </Text>
                <Text>ชื่อผู้ใช้งาน:{item.username}</Text>
                <Text>จุดที่ประจำ:{item.riderLocation}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={myStyle.menu}>
        <TouchableOpacity onPress={() => fetchRiderRegister()}>
          <Image
            source={require("../assets/refresh.png")}
            style={{
              width: 25,
              height: 25,
              resizeMode: "contain",
              zIndex: 35,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLogoutConfirm(true)}>
          <Image
            source={require("../assets/logout.png")}
            style={myStyle.logout}
          />
        </TouchableOpacity>
      </View>
      <Modal transparent={true} visible={showDetail} animationType="slide">
        <View style={myStyle.overlay}>
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 15,
              width: "85%",
              alignSelf: "center",
            }}
          >
            {selectRegister && (
              <>
                <Text
                  style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}
                >
                  ข้อมูลวินมอเตอร์ไซค์
                </Text>
                <Text>
                  ชื่อ: {selectRegister.riderFirstname}{" "}
                  {selectRegister.riderLastname}
                </Text>
                <Text>ชื่อผู้ใช้: {selectRegister.username}</Text>
                <Text>อีเมล: {selectRegister.email}</Text>
                <Text>รหัส: {selectRegister.password}</Text>
                <Text>เบอร์โทร: {selectRegister.tel}</Text>
                <Text>
                  รถ: {selectRegister.brandVehicle}{" "}
                  {selectRegister.modelVehicle}
                </Text>
                <Text>ทะเบียน: {selectRegister.license}</Text>
                <Text>จุดประจำ: {selectRegister.riderLocation}</Text>
                <Text>เลขใบอนุญาตขับขี่: {selectRegister.riderLicense}</Text>
              </>
            )}
            <TouchableOpacity
              onPress={addRider}
              style={{
                backgroundColor: "#5DA271",
                paddingVertical: 8,
                marginTop: 20,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                ยืนยัน
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowDetail(false)}
              style={{
                backgroundColor: "#f3160fff",
                paddingVertical: 8,
                marginTop: 10,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                ปิด
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
