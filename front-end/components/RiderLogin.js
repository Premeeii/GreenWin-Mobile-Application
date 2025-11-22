import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { myStyle } from "../styles/mystyle";
import { useNavigation } from "@react-navigation/native";

export function RiderLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [errorAlert, setErrorAlert] = useState("");

  const navigation = useNavigation();

  const riderLogin = async () => {
    try {
      const response = await fetch("http://10.0.2.2:8080/api/riderlogin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const text = await response.json();
      const rider = text.rider;
      const riderToken = text.riderToken;

      if (response.ok) {
        await AsyncStorage.setItem("LoggedRider", JSON.stringify(rider));
        await AsyncStorage.setItem("riderToken", JSON.stringify(riderToken));
        console.log("บันทึกข้อมูล Rider สำเร็จ");
        navigation.navigate("MainRider");

        try {
          const response = await fetch(
            `http://10.0.2.2:8080/api/statuslogin/${rider.username}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.ok) {
            console.log("อัปสเตตัสเรียบร้อย");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
      setInvalid(true);
      setErrorAlert("โปรดตรวจสอบชื่อผู้ใช้งานและรหัสผ่าน");
    }
  };
  return (
    <View style={myStyle.logincontainer}>
      <Image
        source={require("../assets/backg.png")}
        style={myStyle.loginbottomImage}
        resizeMode="cover"
      />
      <TouchableOpacity onPress={() => navigation.navigate("FirstPage")}>
        <Image
          source={require("../assets/iconleft.png")}
          style={{ width: 30, height: 30, marginTop: 80, marginLeft: 40 }}
        />
      </TouchableOpacity>

      <Text style={myStyle.loginrider}>ล็อคอิน</Text>
      <Text style={myStyle.textrider}>สำหรับวินมอเตอร์ไซค์</Text>

      <View
        style={{
          flex: 1,
          justifyContent: "center", //จัดกึ่งกลางแนวตั้ง
          alignItems: "center", // จัดกึ่งกลางแนวนอน
          paddingHorizontal: 20, // ระยะห่างด้านข้าง
          marginTop: 90,
        }}
      >
        {invalid && <Text style={{ color: "red" }}>{errorAlert}</Text>}
        <TextInput
          style={myStyle.logininput}
          placeholder="ชื่อผู้ใช้งาน"
          onChangeText={setUsername}
        />
        <TextInput
          style={myStyle.logininput}
          placeholder="รหัสผ่าน"
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={myStyle.button} onPress={riderLogin}>
          <Text style={myStyle.buttonLogin}>ล็อคอิน</Text>
        </TouchableOpacity>

        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            zIndex: 30,
            bottom: 220,
            marginBottom: -30,
          }}
        >
          <Text style={myStyle.logintext}>คุณยังไม่มีบัญชีใช่ไหม? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RiderRegister")}
          >
            <Text style={myStyle.loginsignup}>สมัคร</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
