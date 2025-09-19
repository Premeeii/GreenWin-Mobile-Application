import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { myStyle } from "../styles/mystyle";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState([""]);
  const [password, setPassword] = useState([""]);
  const [invalid, setInvalid] = useState(false);
  const [errorAlert, setErrorAlert] = useState("");

  const handleLogin = async () => {
    let valid = true;
    //เอาไว้เรียกใช้กับbutton
    try {
      const response = await fetch("http://10.0.2.2:8080/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const text = await response.json();
      const user = text.person;
      const token = text.token;

      if (response.ok) {
        await AsyncStorage.setItem("loggedInUser", JSON.stringify(user)); //เก็บข้อมูลเพื่อเอาไปใช้ที่หลัง
        await AsyncStorage.setItem("token", token); //เก็บjwt token
        navigation.navigate("ListPerson"); //ไปหน้าต่อไป
      } 

    } catch (error) {
      console.error(error);
      setInvalid(true);
      setErrorAlert("โปรดตรวจสอบชื่อผู้ใช้งานและรหัสผ่าน");
    }
  };

  return (
    <View style={myStyle.container}>
      <Text style={myStyle.topic}>ล็อคอิน</Text>

      {invalid && <Text style={{ color: "red" }}>{errorAlert}</Text>}
      <TextInput
        style={myStyle.input}
        placeholder="ชื่อผู้ใช้งาน"
        onChangeText={setUsername}
      />
      <TextInput
        style={myStyle.input}
        placeholder="รหัสผ่าน"
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={myStyle.button} onPress={handleLogin}>
        <Text style={myStyle.buttonLogin}>ล็อคอิน</Text>
      </TouchableOpacity>
    </View>
  );
}
