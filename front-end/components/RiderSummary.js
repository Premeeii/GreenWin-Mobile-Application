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
    <View style={{ padding: 20 }}>
      <Text style={myStyle.topicRequest}>กำลังไปรับ</Text>
      <View style={myStyle.mainprofile}>
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
              fontWeight: "bold",
              fontSize: 16,
              marginTop: 10,
              color: "#fff",
            }}
          >
            {summary.customerFname} {summary.customerLname}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              marginTop: 10,
              color: "#fff",
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
