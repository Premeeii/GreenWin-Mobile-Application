import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
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

      <Text style={myStyle.logintitle}>ล็อคอิน</Text>

      <View style={myStyle.logincontent}>
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
        <TouchableOpacity style={myStyle.button} onPress={handleLogin}>
          <Text style={myStyle.buttonLogin}>ล็อคอิน</Text>
        </TouchableOpacity>

        <View style={myStyle.loginWrap}>
          <Text style={myStyle.logintext}>Don't have an account?  </Text>
          <TouchableOpacity onPress={() => navigation.navigate("AddPerson")}>
            <Text style={myStyle.loginsignup}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
