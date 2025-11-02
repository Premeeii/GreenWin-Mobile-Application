import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState, useEffect, Suspense } from "react";
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

  return (
    <View style={{ flex: 1 }}>
      <View style={myStyle.headerHome}>
        <View style={myStyle.headerTitle}>
          <Text style={myStyle.greenwin}>GreenWin</Text>
        </View>

        <Image
          source={require("../assets/tophome.png")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>

      <Text
        style={{
          fontWeight: "bold",
          alignSelf: "center",
          fontSize: 28,
          marginTop: 120,
          marginBottom: 20,
          zIndex: 10,
        }}
      >
        วินกำลังมา
      </Text>
      <View
        style={{
          backgroundColor: "#DAEEE5",
          backgroundColor: "#ffffff70", // สีพื้นหลังขาวใสเล็กน้อย
          borderRadius: 20, // มุมโค้งมน
          padding: 30, // ระยะห่างภายในการ์ด
          marginHorizontal: 26, // ระยะห่างด้านข้างของการ์ด
          flexDirection: "row", // จัดวางเนื้อหาในแนวนอน
          alignItems: "center", // จัดกึ่งกลางในแนวตั้ง
          marginTop: 10, // ระยะห่างด้านบนของการ์ด
          zIndex: 15, // ให้การ์ดอยู่เหนือภาพพื้นหลัง
        }}
      >
        <Image
          source={
            riderImage ? { uri: riderImage } : require("../assets/account.png")
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
      <View style={myStyle.mainRequest}>
        <Text style={myStyle.sectionRequset}>เลือกจุดที่ต้องการให้มารับ</Text>
        <Text style={myStyle.contentRequest}>
          {summary.pickupName1}, {summary.pickupName2}
        </Text>
        <Text style={myStyle.sectionRequset}>
          เลือกจุดให้บริการวินมอเตอร์ไซค์สีเขียว
        </Text>
        <Text style={myStyle.contentRequest}>{summary.riderLocation}</Text>
        <Text style={myStyle.sectionRequset}>กำหนดจุดหมาย</Text>
        <Text style={myStyle.contentRequest}>{summary.destination}</Text>
      </View>
    </View>
  );
}
