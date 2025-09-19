import { View, Text, TextInput, TouchableOpacity } from "react-native";
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
        navigation.navigate('MainRider')
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
    <View style={myStyle.container}>
        <Text style={myStyle.topic}>ล็อคอินสำหรับวิน</Text>

      {invalid && <Text style={{color:'red'}}>{errorAlert}</Text>}
      <TextInput
        style={myStyle.input}
        placeholder="ชื่อผู้ใช้งาน"
        onChangeText={setUsername}
      ></TextInput>
      <TextInput
        style={myStyle.input}
        placeholder="รหัสผ่าน"
        onChangeText={setPassword}
        secureTextEntry
      ></TextInput>
      <TouchableOpacity style={myStyle.button} onPress={riderLogin}>
        <Text style={myStyle.buttonLogin}>ล็อคอิน</Text>
      </TouchableOpacity>
    </View>
  );
}
