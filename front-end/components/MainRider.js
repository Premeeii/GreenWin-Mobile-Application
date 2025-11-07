import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  Switch,
} from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import { myStyle } from "../styles/mystyle";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

let stompClient = null;

export function MainRider() {
  const [rider, setRider] = useState("");
  const [riderLocation, setRiderLocation] = useState("");
  const [request, setRequest] = useState([]);
  const [Active, setActive] = useState(true);
  const [imageUri, setImageUri] = useState("");
  const [logoutConfirm, setLogoutConfirm] = useState(false);

  const isFocus = useIsFocused();
  const navigation = useNavigation();

  const loadRider = async () => {
    const stored = await AsyncStorage.getItem("LoggedRider");
    if (stored != null) {
      const RiderData = JSON.parse(stored);
      setRider(RiderData);
      setImageUri(RiderData.riderImage);
      setRiderLocation(RiderData.riderLocation);
      return RiderData;
    }
  };

  const availableRider = async () => {
    try {
      const response = await fetch(
        `http://10.0.2.2:8080/api/available/${riderLocation}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Available", data);
      } else {
        console.error("Fail");
      }
    } catch (e) {
      console.log(error);
    }
  };

  const loadRequest = async () => {
    try {
      const response = await fetch("http://10.0.2.2:8080/api/request");
      const json = await response.json();
      setRequest(json);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("LoggedRider");
      await AsyncStorage.removeItem("riderToken");
      navigation.reset({
        index: 0,
        routes: [{ name: "FirstPage" }],
      });
    } catch (error) {
      console.log("Error", error);
    }

    try {
      const response = await fetch(
        `http://10.0.2.2:8080/api/unavailable/${riderLocation}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Available", data);
      } else {
        console.error("Fail");
      }
    } catch (error) {
      console.error("Fail" + error);
    }
  };

  const requestCard = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        if (Active) {
          navigation.navigate("RequestDetail", { request: item });
        }
      }}
      disabled={!Active}
      style={{ opacity: Active ? 1 : 0.4 }}
    >
      <View style={myStyle.selectrequest}>
        <Text style={{ fontWeight: "bold", fontSize: 14, }}>
          {item.fname} {item.lname}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 14, paddingTop: 2, }}> 
          จุดรับ: {item.pickupName1}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 14, paddingTop: 2, }}>ไป: {item.destination}</Text>
      </View>
    </TouchableOpacity>
  ); //แก้ ที่รับเป็นตัวอ่อน

  //เชื่อม WebSocket (เฉพาะเมื่อ rider มีค่าแล้ว)
  useEffect(() => {
    if (!rider || !rider.riderLocation) return;

    const socket = new SockJS("http://10.0.2.2:8080/ws"); //เชื่อมต่อกับendpoint
    stompClient = new Client({
      //ทำการเชื่อมต่อ
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("Connected to WebSocket");

        //Subscribe requestใหม่
        stompClient.subscribe("/topic/new-request", (message) => {
          const newRequest = JSON.parse(message.body);

          //ตรวจสอบว่าrequestตรงกับวิน
          if (newRequest.riderLocation === rider.riderLocation) {
            setRequest((prev) => [...prev, newRequest]);
          }
        });

        stompClient.subscribe("/topic/delete-request", (message) => {
          const deleteRequest = message.body;
          setRequest((prevRequests) =>
            prevRequests.filter((req) => req.username !== deleteRequest)
          ); //ให้เหลือแค่usernameที่ไม่ได้ลบ
        });
      },
      onStompError: (frame) => {
        console.error("❌ STOMP Error: " + frame.headers["message"]);
      },
    });
    stompClient.activate(); //เปิดwebsocket

    return () => {
      if (stompClient) stompClient.deactivate();
    };
  }, [rider]); // ทำเมื่อriderพร้อมเท่านั้น

  useEffect(() => {
    if (isFocus) {
      (async () => {
        //รอawait
        const riderData = await loadRider();
        await loadRequest();
        if (riderData?.riderLocation) {
          console.log("Load", riderData.riderLocation);
        }
      })();

      console.log(rider);
      console.log(riderLocation);
    }
  }, [isFocus]);

  useEffect(() => {
    if (riderLocation) {
      availableRider();
    }
  }, [riderLocation]);

  return (
    <View style={{flex:1, backgroundColor: "#F8F8F8",}}>
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
      
      <View style={myStyle.mainprofile}>
        <View style={myStyle.avater}>
        <Image
          source={
            imageUri ? { uri: imageUri } : require("../assets/account.png")
          }
          style={{ width: "100%", height: "100%", }}
        ></Image>
        </View>
        <View style={{ marginLeft: 15 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                color: "#7b8a7f", fontSize: 12,
              }}
            >
              @{rider.username}
            </Text>
          </View>
          <Text
            style={{
              marginTop: 6, fontWeight: "600", fontSize: 14
            }}
          >
            {rider.rider_firstname} {rider.rider_lastname}
          </Text>
          <Text
            style={{
              marginTop: 6, fontWeight: "600", fontSize: 12
            }}
          >
            {rider.vehicle} | {rider.license}
          </Text>
          <Text
            style={{
              marginTop: 6, fontWeight: "600", fontSize: 12
            }}
          >
            {rider.riderLocation}
          </Text>
          <Text
            style={{
              marginTop: 6, fontWeight: "600", fontSize: 12
            }}
          >
            {rider.tel}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginTop: 80,  zIndex: 10, marginLeft:20}}>
      </View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          marginBottom:10,
          marginLeft: 30,
          zIndex:10
        }}
      >
        กล่องคำร้อง
      </Text>

      <View style={myStyle.requestbox}>
        <FlatList
          data={request.filter(
            (item) => item.riderLocation === rider.riderLocation
          )}
          keyExtractor={(item, index) => index.toString()}
          renderItem={requestCard}
        />
      </View>

      <Modal transparent={true} animationType="fade" visible={logoutConfirm}>
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
                    color: "black",
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

      <View style={myStyle.menu}>
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
