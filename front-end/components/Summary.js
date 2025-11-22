import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
} from "react-native";
import { useState, useEffect, Suspense, useRef } from "react";
import { myStyle } from "../styles/mystyle";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

export function Summary() {
  const [summary, setSummary] = useState([]);
  const [riderImage, setRiderImage] = useState("");
  const isFocus = useIsFocused();
  const navigation = useNavigation();
  const bounceAnim = useRef(new Animated.Value(0)).current;

  let stompClient = null;

  const loadData = async () => {
    const stored = await AsyncStorage.getItem("SummaryCustomer");
    if (stored != null) {
      const summaryData = JSON.parse(stored);
      setSummary(summaryData);
      setRiderImage(summaryData.riderImage);
    }
  };

  useEffect(() => {
    const socket = new SockJS("http://10.0.2.2:8080/ws");
    stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("Connect to Websocket Summary");

        stompClient.subscribe("/topic/delete-summary", (message) => {
          navigation.navigate("ListPerson");
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
  });

  useEffect(() => {
    if (isFocus) {
      loadData();
      console.log(summary);
      console.log(riderImage);
      console.log(summary.destination);
    }
  }, [isFocus]);

  Animated.loop(
    Animated.sequence([
      Animated.timing(bounceAnim, {
        toValue: -10,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(bounceAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ])
  ).start();

  return (
    <View style={{ flex: 1, backgroundColor: "#A4E394" }}>
      <View style={myStyle.headerHome}>
        <View style={myStyle.headerTitle}>
          <Text style={myStyle.greenwin}>GreenWin</Text>
        </View>
      </View>

      <View>
        <Animated.Image
          source={require("../assets/win.png")}
          style={{
            width: 110,
            height: 207,
            alignSelf: "center",
            marginTop: 120,
            zIndex: 15,
            transform: [{ translateY: bounceAnim }],
          }}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/floor.png")}
          style={{
            position: "absolute",
            bottom: 50, // ความสูงของพื้น
            width: 200,
            height: 60,
            alignSelf: "center",
            opacity: 0.8, // เงาจางหน่อย
            zIndex: 10,
          }}
        />
        <Text
          style={{
            fontWeight: "bold",
            alignSelf: "center",
            fontSize: 28,
            top: -18,
            color: "#000000ff",
          }}
        >
          วินกำลังมา
        </Text>
      </View>

      <View
        style={{
          marginBottom: 12,
          padding: 10,
          zIndex: 10,
          borderRadius: 60,
          height:900,
          backgroundColor: "#FFFFFF",
          alignItems: "center",
          
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: "#E8EAEA",
            borderRadius: 20, // มุมโค้งมน
            padding: 15, // ระยะห่างภายในการ์ด
            paddingRight: 20,
            flexDirection: "row", // จัดวางเนื้อหาในแนวนอน
            alignItems: "center", // จัดกึ่งกลางในแนวตั้ง
            marginTop: 40, // ระยะห่างด้านบนของการ์ด
            zIndex: 15, // ให้การ์ดอยู่เหนือภาพพื้นหลัง
            width: "349",
          }}
        >
          <Image
            source={
              riderImage
                ? { uri: riderImage }
                : require("../assets/account.png")
            }
            style={{ width: 80, height: 80, borderRadius: 80 }}
          ></Image>
          <View style={{ marginLeft: 15 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            ></View>
            <Text
              style={{
                marginTop: 6,
                fontWeight: "600",
                fontSize: 14,
              }}
            >
              {summary.riderFname} {summary.riderLname}
            </Text>
            <Text
              style={{
                marginTop: 6,
                fontWeight: "600",
                fontSize: 14,
              }}
            >
              {summary.riderTel}
            </Text>
            <Text
              style={{
                marginTop: 6,
                fontWeight: "600",
                fontSize: 14,
              }}
            >
              {summary.vehicle}
            </Text>
            <Text
              style={{
                marginTop: 6,
                fontWeight: "600",
                fontSize: 14,
              }}
            >
              {summary.license}
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: -10,
            backgroundColor: "#fff",
            borderRadius: 70,
            padding: 25,
            paddingLeft: 20,
            alignSelf: "center",
          }}
        >
          <Text style={myStyle.sectionRequset}>เลือกจุดที่ต้องการให้มารับ</Text>
          <Text style={myStyle.contentRequest}>
            {summary.pickupName1}
          </Text>
          <Text style={myStyle.sectionRequset}>
            เลือกจุดให้บริการวินมอเตอร์ไซค์สีเขียว
          </Text>
          <Text style={myStyle.contentRequest}>{summary.riderLocation}</Text>
          <Text style={myStyle.sectionRequset}>กำหนดจุดหมาย</Text>
          <Text style={myStyle.contentRequest}>{summary.destination}</Text>
        </View>
      </View>
    </View>
  );
}
