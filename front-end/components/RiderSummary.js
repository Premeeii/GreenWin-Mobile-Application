import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { myStyle } from "../styles/mystyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useIsFocused } from "@react-navigation/native";

export function RiderSummary() {
  const [summary, setSummary] = useState([]);
  const [customerUsername, setCustomerUsername] = useState("");
  const [customerImage, setCustomerImage] = useState("");
  const [riderLocation, setRiderLocation] = useState("");

  const navigation = useNavigation();
  const isFocus = useIsFocused();
  const bounceAnim = useRef(new Animated.Value(0)).current;

  const loadData = async () => {
    const stored = await AsyncStorage.getItem("SummaryRequest");
    if (stored != null) {
      const summaryData = JSON.parse(stored);
      setSummary(summaryData);
      setCustomerUsername(summaryData.customerUsername); //ต้องใช้เป็นsummaryDataเพราะเป็นAsynchonus
      setCustomerImage(summaryData.customerImage);
      setRiderLocation(summary.riderLocation);
    }
  };

  const deleteSummary = async () => {
    const addResponse = await fetch("http://10.0.2.2:8080/api/addhistory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerUsername: summary.customerUsername,
        customerFname: summary.customerFname,
        customerLname: summary.customerLname,
        customerTel: summary.customerTel,
        destination: summary.destination,
        license: summary.license,
        pickupName1: summary.pickupName1,
        pickupName2: summary.pickupName2,
        riderFname: summary.riderFname,
        riderLname: summary.riderLname,
        riderTel: summary.riderTel,
        riderUsername: summary.riderUsername,
        vehicle: summary.vehicle,
        status: "success",
        riderLocation: summary.riderLocation,
        customerUsername,
        description: summary.description,

      }),
    });

    const response = await fetch(
      `http://10.0.2.2:8080/api/deletesummary/${customerUsername}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      const text = response.text();
      console.log("Success Service:", text);
      navigation.navigate("MainRider");
    } else {
      console.error("Error");
    }
  };

  useEffect(() => {
    if (isFocus) {
      loadData();
      console.log(customerUsername);
      console.log(customerImage);
      console.log(summary.riderLocation);
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
          กำลังไปรับ
        </Text>
      </View>

      <View
        style={{
          marginBottom: 12,
          padding: 10,
          zIndex: 10,
          borderRadius: 60,
          height: 900,
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
            marginTop: 25, // ระยะห่างด้านบนของการ์ด
            zIndex: 15, // ให้การ์ดอยู่เหนือภาพพื้นหลัง
            width: "349",
          }}
        >
          <Image
            source={
              customerImage
                ? { uri: customerImage }
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
              {summary.customerFname} {summary.customerLname}
            </Text>
            <Text
              style={{
                marginTop: 6,
                fontWeight: "600",
                fontSize: 14,
              }}
            >
              {summary.customerTel}
            </Text>
          </View>
        </View>

        <View         style={{
            marginTop: -10,
            backgroundColor: "#fff",
            borderRadius: 70,
            padding: 25,
            paddingLeft: 20,
            alignSelf: "center",
          }}>
          <Text style={myStyle.sectionRequset}>เลือกจุดที่ต้องการให้มารับ</Text>
          <Text style={myStyle.contentRequest}>
            {summary.pickupName1}, {summary.description}
          </Text>
          <Text style={myStyle.sectionRequset}>
            เลือกจุดให้บริการวินมอเตอร์ไซค์สีเขียว
          </Text>
          <Text style={myStyle.contentRequest}>{summary.riderLocation}</Text>
          <Text style={myStyle.sectionRequset}>กำหนดจุดหมาย</Text>
          <Text style={myStyle.contentRequest}>{summary.destination}</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#307A59",
            paddingVertical: 12,
            paddingHorizontal: 25,
            borderRadius: 25,
            alignItems: "center",
            marginVertical: 10,
            cursor: "pointer",
            width: 312,
            alignSelf: "center",
            position: "absolute",
            zIndex: 10,
            marginTop:430,
          }}
          onPress={() => deleteSummary(customerUsername)}
        >
          <Text style={myStyle.buttonText}>สำเร็จ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
