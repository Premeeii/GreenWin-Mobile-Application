import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
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
        กำลังไปรับ
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
              marginTop: 6, fontWeight: "600", fontSize: 14
            }}
          >
            {summary.customerFname} {summary.customerLname}
          </Text>
          <Text
            style={{
             marginTop: 6, fontWeight: "600", fontSize: 14
            }}
          >
            {summary.customerTel}
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
      <TouchableOpacity
        style={myStyle.button}
        onPress={() => deleteSummary(customerUsername)}
      >
        <Text style={myStyle.buttonText}>สำเร็จ</Text>
      </TouchableOpacity>
    </View>
  );
}
