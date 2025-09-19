import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { myStyle } from "../styles/mystyle";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

     const deleted = await fetch(`http://10.0.2.2:8080/api/delrequest/${username}`, {
      method: "DELETE",
    });

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

    try{
      const response = await fetch(`http://10.0.2.2:8080/api/unavailable/${riderLocation}`, 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
      if(response.ok){
        const data = await response.json();
        console.log(data);
      }
      else{
        console.log("Fail", error);
      }
    }
    catch(error){
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
    <View style={{ padding: 20, marginTop: 20 }}>
      <View style={myStyle.mainprofile}>
        <Image
          source={customerImage ? {uri: customerImage} : require("../assets/account.png")}
          style={{ width: 50, height: 50, borderRadius: 80 }}
        />
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            {request.username}
          </Text>
          <View style={{ flexDirection: "column" }}>
            <Text style={myStyle.textmainprofile}>
              {request.fname} {request.lname}
            </Text>
            <Text style={myStyle.textmainprofile}>{request.tel}</Text>
          </View>
        </View>
      </View>

      <View style={myStyle.requestdetail}>
        <Image
          source={{ uri: imageLocation }}
          style={{
            width: 225,
            height: 225,
            alignSelf: "center",
            marginBottom: 20,
            borderRadius: 15,
          }}
        />
        <Text style={{ fontWeight: "bold", color: "#307A59", fontSize: 16 }}>
          เลือกจุดที่ต้องการให้มารับ
        </Text>
        <Text>
          {request.pickupName1}, {request.pickupName2}
        </Text>

        <Text
          style={{
            fontWeight: "bold",
            color: "#307A59",
            fontSize: 16,
            marginTop: 10,
          }}
        >
          เลือกจุดให้บริการวินมอเตอร์ไซค์สีเขียว
        </Text>
        <Text>{request.riderLocation}</Text>

        <Text
          style={{
            fontWeight: "bold",
            color: "#307A59",
            fontSize: 16,
            marginTop: 10,
          }}
        >
          กำหนดจุดหมาย
        </Text>
        <Text>{request.destination} </Text>
      </View>
      <TouchableOpacity style={myStyle.button} onPress={addSummary}>
        <Text style={myStyle.buttonText}>รับ</Text>
      </TouchableOpacity>
    </View>
  );
}
