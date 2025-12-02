import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { myStyle } from "../styles/mystyle";
import { useNavigation } from "@react-navigation/native";

export function RiderRegister() {
  const [personId, setPersonId] = useState("");
  const [riderFirstname, setRiderFirstname] = useState("");
  const [riderLastname, setRiderLastname] = useState("");
  const [brandVehicle, setBrandVehicle] = useState("");
  const [modelVehicle, setModelVehicle] = useState("");
  const [license, setLicense] = useState("");
  const [riderLicense, setRiderLicense] = useState("");
  const [riderLocation, setRiderLocation] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [riderLicenseImage, setRiderLicenseImage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSaveData = async () => {
    if(!validate()){
      return;
    }

    if (
      !personId ||
      !riderFirstname ||
      !riderLastname ||
      !brandVehicle ||
      !modelVehicle ||
      !license || 
      personId.length < 13
    ) {
      return;
    }
    await AsyncStorage.setItem(
      "setRiderRegister",
      JSON.stringify({
        personId,
        riderFirstname,
        riderLastname,
        brandVehicle,
        modelVehicle,
        license,
      })
    );
    navigation.navigate("RiderRegister2");
  };

  const navigation = useNavigation();

  const validate = () => {
    let valid = true;
    let tempError = {};

    if (!personId) {
      tempError.personId = "กรุณากรอกเลขบัตรประชาชน";
      let valid = false;
    } else if (personId.length < 13 || personId.length > 13) {
      tempError.personId = "กรุณากรอกเลขบัตรประชนให้ครบ13หลัก";
      let valid = false;
    }
    if (!riderFirstname) {
      tempError.riderFirstname = "กรุณากรอกชื่อจริง";
      let valid = false;
    }
    if (!riderLastname) {
      tempError.riderLastname = "กรุณากรอกนามสกุล";
      let valid = false;
    }
    if (!brandVehicle) {
      tempError.brandVehicle = "กรุณากรอกผู้ผลิตรถมอเตอร์ไซค์";
      let valid = false;
    }
    if (!modelVehicle) {
      tempError.modelVehicle = "กรุณากรอกรุ่นของรถมอเตอร์ไซค์";
      let valid = false;
    }
    if (!license) {
      tempError.license = "กรุณากรอกทะเบียนรถ";
      let valid = false;
    }

    setErrors(tempError);
    return valid;
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      
      <Text
        style={{
          color: "#307A59",
          fontWeight: '900',
          fontSize: 30,
          fontFamily: "inter",
          marginTop: 28,
          marginLeft: 50,
        }}
      >
        สมัครใช้งาน {"\n"}
        สำหรับวินมอเตอร์ไซค์
      </Text>

      <View style={myStyle.mainreg}>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 25 }}>
          ชื่อจริง
        </Text>
        <TextInput
          style={myStyle.inputreg}
          value={riderFirstname}
          onChangeText={setRiderFirstname}
        />
        <Text style={{ color: "red" }}>{errors.riderFirstname}</Text>

        <Text style={{ fontWeight: "bold", fontSize: 18 }}>นามสกุล</Text>
        <TextInput
          style={myStyle.inputreg}
          value={riderLastname}
          onChangeText={setRiderLastname}
        />
        <Text style={{ color: "red" }}>{errors.riderLastname}</Text>

        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          ผู้ผลิตรถมอเตอร์ไซค์
        </Text>
        <TextInput
          style={myStyle.inputreg}
          value={brandVehicle}
          onChangeText={setBrandVehicle}
        />
        <Text style={{ color: "red" }}>{errors.brandVehicle}</Text>

        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          รุ่นและสีของรถมอเตอร์ไซค์
        </Text>
        <TextInput
          style={myStyle.inputreg}
          value={modelVehicle}
          onChangeText={setModelVehicle}
        />
        <Text style={{ color: "red" }}>{errors.modelVehicle}</Text>

        <Text style={{ fontWeight: "bold", fontSize: 18 }}>ทะเบียนรถ</Text>
        <TextInput
          style={myStyle.inputreg}
          value={license}
          onChangeText={setLicense}
        />
        <Text style={{ color: "red" }}>{errors.license}</Text>

        <Text style={{ fontWeight: "bold", fontSize: 18 }}>เลขบัตรประชาชน</Text>
        <TextInput
          style={myStyle.inputreg}
          value={personId}
          onChangeText={setPersonId}
        />
        <Text style={{ color: "red" }}>{errors.personId}</Text>

        <TouchableOpacity 
          style={{
            backgroundColor: "#307A59",
            paddingVertical: 9,
            borderRadius: 10,
            alignItems: "center",
            marginVertical: 10,
            cursor: "pointer",
            width: 130,
            marginTop: 18,
            marginLeft: 180,
          }} 
          onPress={handleSaveData}>
          <Text style={myStyle.buttonLogin}>ถัดไป</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
