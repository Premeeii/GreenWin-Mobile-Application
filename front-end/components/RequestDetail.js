import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { myStyle } from "../styles/mystyle";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";

export function RequestDetail({ route }) {
  const { request } = route.params; //ดึงข้อมูลจากrequest
  const imageLocation = request.imageRequest;
  const isFocus = useIsFocused();
  const navigation = useNavigation();

  const [riderData, setRiderData] = useState([]);
  const [username, setUsername] = useState(request.username);
  const [userfname, setUserFname] = useState(request.fname);
  const [userlname, setUserLname] = useState(request.lname);
  const [pickup1, setPickup1] = useState(request.pickupName1);
  const [pickup2, setPickup2] = useState(request.pickupName2);
  const [riderLocation, setRiderLocation] = useState(request.riderLocation);
  const [destination, setDestination] = useState(request.destination);
  const [usertel, setUserTel] = useState(request.tel);
  const [riderUsername, setRiderUsername] = useState("");
  const [riderFname, setRiderFname] = useState("");
  const [riderLname, setRiderLname] = useState("");
  const [license, setLicense] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [riderTel, setRiderTel] = useState("");
  const [riderImage, setRiderImage] = useState("");
  const [customerImage, setCustomerImage] = useState(request.customerImage);

  const loadRider = async () => {
    const stored = await AsyncStorage.getItem("LoggedRider");
    if (stored != null) {
      const data = JSON.parse(stored);
      setRiderData(data);
      setRiderUsername(data.username);
      setRiderFname(data.rider_firstname);
      setRiderLname(data.rider_lastname);
      setLicense(data.license);
      setRiderTel(data.tel);
      setVehicle(data.vehicle);
      setRiderImage(data.riderImage);
    }
  };

  const addSummary = async () => {
    try {
      const response = await fetch("http://10.0.2.2:8080/api/addsummary", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          riderUsername: riderUsername,
          riderFname: riderFname,
          riderLname: riderLname,
          license: license,
          riderTel,
          riderLocation,
          pickupName1: pickup1,
          pickupName2: pickup2,
          destination,
          customerUsername: username,
          customerFname: userfname,
          customerLname: userlname,
          customerTel: usertel,
          vehicle,
          riderImage: riderImage,
          customerImage: customerImage,
        }),
      });

      const deleted = await fetch(
        `http://10.0.2.2:8080/api/delrequest/${username}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok && deleted.ok) {
        Alert.alert("ตอบรับแล้วว");
        const text = await response.json();
        await AsyncStorage.setItem("SummaryRequest", JSON.stringify(text));
        setTimeout(() => {
          navigation.navigate("RiderSummary");
        }, 300);
      } else {
        return Alert.alert("ไม่สำเร็จ");
      }
    } catch (error) {
      console.log(error);
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
        console.log(data);
      } else {
        console.log("Fail", error);
      }
    } catch (error) {
      console.error("Fail:", error);
    }
  };

  useEffect(() => {
    if (isFocus) {
      loadRider();
      console.log(imageLocation);
      console.log(riderData);
      console.log(riderImage);
      console.log(customerImage);
      console.log(riderUsername);
      console.log(userfname);
      console.log(userlname);
    }
  }, [isFocus]);

  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <View style={myStyle.headerHome}>
        <TouchableOpacity
          style={{
            zIndex: 10,
            position: "absolute",
            marginTop: 70,
            marginLeft: 15,
          }}
          onPress={() => navigation.navigate('MainRider')}
        >
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <View style={myStyle.headerTitle}>
          <Text style={myStyle.greenwin}>GreenWin</Text>
        </View>

        <Image
          source={require("../assets/tophome.png")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          backgroundColor: "#ffffff70", // สีพื้นหลังขาวใสเล็กน้อย
          borderRadius: 20, // มุมโค้งมน
          padding: 30, // ระยะห่างภายในการ์ด
          marginHorizontal: 26, // ระยะห่างด้านข้างของการ์ด
          flexDirection: "row", // จัดวางเนื้อหาในแนวนอน
          alignItems: "center", // จัดกึ่งกลางในแนวตั้ง
          marginTop: 180, // ระยะห่างด้านบนของการ์ด
          zIndex: 15, // ให้การ์ดอยู่เหนือภาพพื้นหลัง
        }}
      >
        <View style={myStyle.avater}>
          <Image
            source={
              customerImage
                ? { uri: customerImage }
                : require("../assets/account.png")
            }
            style={{ width: "100%", height: "100%" }}
          />
        </View>

        <View style={{ marginLeft: 15 }}>
          <Text style={{ color: "#7b8a7f", fontSize: 12 }}>
            @{request.username}
          </Text>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ marginTop: 6, fontWeight: "600", fontSize: 14 }}>
              {request.fname} {request.lname}
            </Text>
            <Text style={{ marginTop: 6, fontWeight: "600", fontSize: 14 }}>
              {request.tel}
            </Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 1, marginTop: 110 }}>
        <Image
          source={{ uri: imageLocation }}
          style={{
            width: 150,
            height: 150,
            alignSelf: "center",
            marginBottom: 20,
            borderRadius: 15,
          }}
        />
        <Text
          style={{
            fontWeight: "bold",
            color: "#307A59",
            fontSize: 16,
            marginLeft: 80,
          }}
        >
          เลือกจุดที่ต้องการให้มารับ
        </Text>
        <Text style={{ marginLeft: 80 }}>
          {request.pickupName1}, {request.pickupName2}
        </Text>

        <Text
          style={{
            fontWeight: "bold",
            color: "#307A59",
            fontSize: 16,
            marginTop: 10,
            marginLeft: 80,
          }}
        >
          เลือกจุดให้บริการวินมอเตอร์ไซค์สีเขียว
        </Text>
        <Text style={{ marginLeft: 80 }}>{request.riderLocation}</Text>

        <Text
          style={{
            fontWeight: "bold",
            color: "#307A59",
            fontSize: 16,
            marginTop: 10,
            marginLeft: 80,
          }}
        >
          กำหนดจุดหมาย
        </Text>
        <Text style={{ marginLeft: 80 }}>{request.destination} </Text>

        <TouchableOpacity
          style={{
            marginTop: 30,
            backgroundColor: "#307A59",
            paddingVertical: 12,
            paddingHorizontal: 25,
            borderRadius: 10,
            alignItems: "center",
            marginVertical: 10,
            cursor: "pointer",
            width: 312,
            alignSelf: "center",
          }}
          onPress={addSummary}
        >
          <Text style={myStyle.buttonText}>รับ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
