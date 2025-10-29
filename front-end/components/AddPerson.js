import { useState, useEffect } from "react";
import {
  View,
  Button,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import { myStyle } from "../styles/mystyle";
import { useNavigation } from "@react-navigation/native";

export function AddPerson() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");

  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

  const handleRegister = async () => {
    if (!validate()) {
      return;
    }

    if (!fname || !lname || !username || !password || !tel) {
      Alert.alert("โปรดกรอกข้อมูลให้ครบถ้วน");
      return;
    }
    try {
      const response = await fetch("http://10.0.2.2:8080/api/add", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ fname, lname, username, password, tel }), //การส่งjsonเพื่อไปpost
      });

      const reg = await response.json();

      if (response.ok) {
        //ถ้าstatusเป็นOKจะล้างค่า
        Alert.alert("ลงทะเบียนสำเร็จ");
        setFname("");
        setLname("");
        setPassword("");
        setUsername("");
        setTel("");
        navigation.navigate("Login");
      } else {
        return;
      }
    } catch (error) {
      console.error(error);
      Alert.alert("สมัครไม่สำเร็จ");
    }
  };

  const validate = () => {
    //ตรวจสอบช่องที่ยังไม่ได้ใส่
    let valid = true;
    let tempError = {};

    if (!fname) {
      tempError.fname = "กรุณากรอกชื่อจริง";
      valid = false;
    }
    if (!lname) {
      tempError.lname = "กรุณากรอกนามสกุล";
      valid = false;
    }
    if (!username) {
      tempError.username = "กรุณากรอกชื่อผู้ใช้งาน";
      valid = false;
    }
    if (!password) {
      tempError.password = "กรุณากรอกรหัสผ่าน";
      valid = false;
    } else if (password.length < 8) {
      tempError.password = "กรุณากรอกรหัสผ่านอย่างน้อย 8 ตัว";
      valid = false;
    }
    if (!tel) {
      tempError.tel = "กรุณากรอกเบอร์โทร";
      valid = false;
    }

    setErrors(tempError);
    return valid;
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/backg.png")}
        style={myStyle.signbottomImage}
        resizeMode="cover"
      />
      <TouchableOpacity onPress={() => navigation.navigate("FirstPage")}>
        <Image
          source={require("../assets/iconleft.png")}
          style={{ width: 30, height: 30, marginTop: 80, marginLeft: 40 }}
        />
      </TouchableOpacity>
      <Text style={myStyle.signtitle}>Sign up</Text>
      <View style={myStyle.signcontent}>
        <TextInput
          style={myStyle.signinput}
          placeholder="First name"
          placeholderTextColor="#C1C1C1"
          value={fname} //ตั้งค่าdefaultให้เป็นfnameที่ยังไม่ได้แก้
          onChangeText={setFname} //เปลี่ยนค่า
        />
        <Text style={{ color: "red",}}>{errors.fname}</Text>

        <TextInput
          style={myStyle.signinput}
          placeholder="Last name"
          placeholderTextColor="#C1C1C1"
          value={lname}
          onChangeText={setLname}
        />
        {<Text style={{ color: "red" }}>{errors.lname}</Text>}

        <TextInput
          style={myStyle.signinput}
          placeholder="Username"
          placeholderTextColor="#C1C1C1"
          value={username}
          onChangeText={setUsername}
        />
        {<Text style={{ color: "red" }}>{errors.username}</Text>}

        <TextInput
          style={myStyle.signinput}
          placeholder="Password"
          placeholderTextColor="#C1C1C1"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        {<Text style={{ color: "red" }}>{errors.password}</Text>}

        <TextInput 
          style={myStyle.signinput}
          placeholder="Phone"
          placeholderTextColor="#C1C1C1" 
          value={tel} 
          onChangeText={setTel} />
        {<Text style={{ color: "red" }}>{errors.tel}</Text>}

        <TouchableOpacity style={myStyle.signcreatebutoon} onPress={handleRegister}>
          <Text style={myStyle.buttonLogin}>ยืนยัน</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
