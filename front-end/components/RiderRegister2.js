import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { myStyle } from "../styles/mystyle";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

export function RiderRegister2() {
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
  const [tel, setTel] = useState("");
  const [riderLicenseImage, setRiderLicenseImage] = useState("");
  const [saveData, setSaveData] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");

  const navigation = useNavigation();
  const isFocus = useIsFocused();

  const LoadData = async () => {
    const stored = await AsyncStorage.getItem("setRiderRegister");
    if (stored != null) {
      const data = await JSON.parse(stored);
      setSaveData(data);
      console.log(data);
      setPersonId(data.personId);
      setRiderFirstname(data.riderFirstname);
      setRiderLastname(data.riderLastname);
      setLicense(data.license);
      setModelVehicle(data.modelVehicle);
      setBrandVehicle(data.brandVehicle);
    }
  };

  const pickAndUploadImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      const selectedAsset = result.assets[0];
      const photo = {
        uri: selectedAsset.uri,
        type: selectedAsset.mimeType || "image/jpeg",
        name: selectedAsset.fileName || "image.jpg",
      };
      setRiderLicenseImage(result.assets[0].uri);
      await handleUpload(photo);
    }
  };

  const handleUpload = async (photo) => {
    const data = new FormData();
    data.append("file", photo);
    data.append("upload_preset", "greenwin");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/preme/image/upload",
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
            "Content-type": "multipart/form-data",
          },
        }
      );
      const json = await res.json();
      console.log("License Upload:", json.secure_url);
      setRiderLicenseImage(json.secure_url);
      setUploadStatus("อัปโหลดสำเร็จ");
    } catch (error) {
      console.error("Upload error");
      setUploadStatus("อัปโหลดไม่สำเร็จ");
    }
  };

  const handleRiderRegister = async () => {
    try {
      const response = await fetch("http://10.0.2.2:8080/api/riderregister", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          personId,
          riderFirstname,
          riderLastname,
          brandVehicle,
          modelVehicle,
          license,
          riderLicense,
          riderLocation,
          username,
          password,
          email,
          riderLicenseImage,
        }),
      });
      const reg = await response.json();

      if (response.ok) {
        navigation.navigate("FirstPage");
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
      Alert.alert("สมัครไม่สำเร็จ");
    }
  };


  useEffect(() => {
    if (isFocus) {
      LoadData();
    }
  }, [isFocus]);

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={myStyle.mainreg}>
        <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 15 }}>
          เลขใบอนุญาตขับขี่
        </Text>
        <TextInput
          style={myStyle.inputreg}
          value={riderLicense}
          onChangeText={setRiderLicense}
        />
        <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 15 }}>
          จุดที่ประจำ
        </Text>
        <TextInput
          style={myStyle.inputreg}
          value={riderLocation}
          onChangeText={setRiderLocation}
        />

        <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 5 }}>
          ชื่อผู้ใช้งาน
        </Text>
        <TextInput
          style={myStyle.inputreg}
          value={username}
          onChangeText={setUsername}
        />

        <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 5 }}>
          รหัสผ่าน
        </Text>
        <TextInput
          style={myStyle.inputreg}
          value={password}
          onChangeText={setPassword}
        />

        <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 5 }}>
          อีเมลล์
        </Text>
        <TextInput
          style={myStyle.inputreg}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 5 }}>
          เบอร์โทร
        </Text>
        <TextInput style={myStyle.inputreg} value={tel} onChangeText={setTel} />
        <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 5 }}>
          หลักฐานยืนยัน
        </Text>
        <TouchableOpacity
          onPress={pickAndUploadImage}
          style={{
            marginTop: 10,
            paddingVertical: 4,
            width: 80,
            height: 30,
            backgroundColor: "#fff",
            alignItems: "center",
            borderRadius: 15,
            borderWidth: 1,
          }}
        >
          <Text style={{ color: "black" }}>อัปโหลด</Text>
        </TouchableOpacity>
        {uploadStatus !== "" && (
          <Text style={{ marginTop: 5, color: "green" }}>{uploadStatus}</Text>
        )}
        <TouchableOpacity style={myStyle.button} onPress={handleRiderRegister}>
          <Text style={myStyle.buttonLogin}>ยืนยัน</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
