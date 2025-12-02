import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import { myStyle } from "../styles/mystyle";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

export function EditProfile() {
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const [imageUri, setImageUri] = useState("");
  const [image, setImage] = useState("");
  const [user, setUser] = useState("");
  const [uploading, setUploading] = useState(false);

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
      setImage(result.assets[0].uri);
      await handleUpload(photo);
    }
  };

  const handleUpload = async (photo) => {
    setUploading(true); // ⬅ เริ่มแสดง Loading

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
      setImageUri(json.secure_url);
    } catch (error) {
      console.error("Upload error");
    }
    setUploading(false);
  };

  const loadData = async () => {
    const stored = await AsyncStorage.getItem("loggedInUser"); //เอาข้อมูลAsyncStorageมาใช้
    if (stored != null) {
      const setData = await JSON.parse(stored);
      setUser(setData);
      setId(setData.id);
      setUsername(setData.username);
      setPassword(setData.password);
      setFname(setData.fname); //เพื่อให้Input จะได้ผูกกับFnameโดยตรง ไม่ใช้ของASyncStorage
      setLname(setData.lname);
      setTel(setData.tel);
      setImageUri(setData.imageUri);
    }
  };

  const updateData = async () => {
    try {
      const response = await fetch(`http://10.0.2.2:8080/api/edit/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          //แปลงข้อมูล JavaScript object ให้กลายเป็น JSON string เพื่อแนบไปกับ request
          fname, //เพื่อนำไปแก้ข้อมูล พูดง่ายๆคือข้อมูลที่แก้ได้แล้วเอาไปแปลงเป็นJson
          lname,
          tel,
          imageUri,
        }),
      });
      if (response.ok) {
        const UpdateUser = {
          //ข้อมูลที่จะเก็บลงAsyncStorage
          id: id,
          fname: fname,
          lname: lname,
          username: username,
          password: password,
          tel: tel,
          imageUri: imageUri,
        };
        await AsyncStorage.setItem("loggedInUser", JSON.stringify(UpdateUser)); //อัปเดทข้อมูลให้ลงAsyncStorage
        console.log(imageUri);
        console.log("เซฟข้อมูล");
        navigation.goBack();
      }
    } catch (error) {
      console.error("Error edit", error);
    }
    const photo = {
      //ตั้งค่าdetailของรูปภาพ
      uri: selectedAsset.uri,
      type: selectedAsset.mimeType || "image/jpeg",
      name: selectedAsset.fileName || "image.jpeg",
    };
    handleUpload(photo);
    console.log("id ที่จะใช้แก้:", id);
    console.log("กำลังส่งข้อมูล:", { fname, lname, tel, imageuri });
  };

  useEffect(() => {
    loadData();
    console.log(user);
  }, []);

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={myStyle.headerHome}>
        <View style={myStyle.headerTitle}>
          <Text style={myStyle.greenwin}>บัญชีผู้ใช้</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ListPerson")}>
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
                imageUri ? { uri: imageUri } : require("../assets/account.png")
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
            {user.username}
          </Text>
        </View>
        <Text style={myStyle.editsection}>ชื่อจริง</Text>
        <TextInput
          style={myStyle.editinput}
          value={fname}
          onChangeText={setFname}
        ></TextInput>
        <Text style={myStyle.editsection}>นามสกุล</Text>
        <TextInput
          style={myStyle.editinput}
          value={lname}
          onChangeText={setLname}
        ></TextInput>
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
      {uploading && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
            กำลังอัปโหลดรูปภาพ...
          </Text>
        </View>
      )}
    </View>
  );
}
