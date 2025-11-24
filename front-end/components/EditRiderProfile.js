import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  AppState,
} from "react-native";
import { myStyle } from "../styles/mystyle";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

export function EditRiderProfile() {
  const [rider, setRider] = useState([]);
  const [username, setUsername] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [tel, setTel] = useState("");
  const [riderLocation, setRiderLocation] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [license, setLicense] = useState("");
  const [riderImage, setRiderImage] = useState("");
  const [id, setId] = useState("");

  const isFocus = useIsFocused();
  const navigation = useNavigation();

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
        name: selectedAsset.fileName || "image.jpeg",
      };
      setRiderImage(result.assets[0].uri);
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
      console.log("Profile Upload:", json.secure_url);
      setRiderImage(json.secure_url);
    } catch (error) {
      console.error("Upload error");
    }
  };

  const loadRider = async () => {
    const stored = await AsyncStorage.getItem("LoggedRider");
    if (stored != null) {
      const setData = await JSON.parse(stored);
      setRider(setData);
      setUsername(setData.username);
      setFname(setData.rider_firstname);
      setLname(setData.rider_lastname);
      setTel(setData.tel);
      setRiderLocation(setData.riderLocation);
      setVehicle(setData.vehicle);
      setLicense(setData.license);
      setRiderImage(setData.riderImage);
      setId(setData.rider_id);
    }
    
  };

  const updateData = async () => {
    try {
      const response = await fetch(`http://10.0.2.2:8080/api/editrider/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          tel,
          riderImage,
        }),
      });
      if (response.ok) {
        const UpdateRider = {
          rider_id: id,
          username,
          rider_firstname: fname,
          rider_lastname: lname,
          tel,
          riderLocation,
          vehicle,
          license,
          riderImage,
        };
        await AsyncStorage.setItem("LoggedRider", JSON.stringify(UpdateRider));
        console.log(riderImage);
        console.log("เซฟข้อมูล");
        navigation.navigate("MainRider", {skipAvailable: true})
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    loadRider();
    console.log(rider);
    console.log(id);
    console.log(riderImage);
  }, []);

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={myStyle.headerHome}>
        <View style={myStyle.headerTitle}>
          <Text style={myStyle.greenwin}>บัญชีผู้ใช้</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("MainRider", {skipAvailable:true})}>
          <Image
            source={require("../assets/iconleft.png")}
            style={{ width: 25, height: 25, marginTop: -45, marginLeft: 40 }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ marginHorizontal: 47, marginTop: 165 }}>
        <TouchableOpacity onPress={pickAndUploadImage} style={{ zIndex: 10 }}>
          {
            <Image
              source={
                riderImage
                  ? { uri: riderImage }
                  : require("../assets/account.png")
              } //ถ้ายังไม่มีรูปโปรก็จะใช้อันของที่ให้มาในแอป
              style={myStyle.imageedit}
            ></Image>
          }
        </TouchableOpacity>
        <Text style={myStyle.editsection}>ชื่อผู้ใช้งาน</Text>
        <View
          style={{
            width: 320,
            height: 49,
            borderBottomWidth: 3,
            borderBottomColor: "#F2F2F2",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#9f9d9dff",
              fontWeight: "500",
            }}
          >
            {username}
          </Text>
        </View>
        <Text style={myStyle.editsection}>ชื่อจริง</Text>
                <View
          style={{
            width: 320,
            height: 49,
            borderBottomWidth: 3,
            borderBottomColor: "#F2F2F2",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#9f9d9dff",
              fontWeight: "500",
            }}
          >
            {fname}
          </Text>
        </View>
        <Text style={myStyle.editsection}>นามสกุล</Text>
                <View
          style={{
            width: 320,
            height: 49,
            borderBottomWidth: 3,
            borderBottomColor: "#F2F2F2",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#9f9d9dff",
              fontWeight: "500",
            }}
          >
            {lname}
          </Text>
        </View>
        <Text style={myStyle.editsection}>เบอร์โทร</Text>
        <TextInput
          style={myStyle.editinput}
          value={tel}
          onChangeText={setTel}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={myStyle.servicebutton}
        onPress={() => updateData()}
      >
        <Text style={myStyle.buttonText}>ยืนยัน</Text>
      </TouchableOpacity>
    </View>
  );
}
