import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { myStyle } from "../styles/mystyle";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { Dropdown } from "react-native-element-dropdown";

export function RiderRegister2() {
  const [personId, setPersonId] = useState("");
  const [riderFirstname, setRiderFirstname] = useState("");
  const [riderLastname, setRiderLastname] = useState("");
  const [brandVehicle, setBrandVehicle] = useState("");
  const [modelVehicle, setModelVehicle] = useState("");
  const [license, setLicense] = useState("");
  const [riderLicense, setRiderLicense] = useState("");
  const [selectLocation, setSelectLocation] = useState(null);
  const [riderLocation, setRiderLocation] = useState([]);
  const [dropdownLocation, setDropdownLocation] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
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

  const fetchRiderLocation = async () => {
    try {
      const response = await fetch("http://10.0.2.2:8080/api/riderlocation");
      const json = await response.json();
      setRiderLocation(json);
      console.log(json);

      const dropdownRider = json.map((item) => ({
        label: `${item.riderLocation}`,
        value: item.riderLocation,
      }));
      setDropdownLocation(dropdownRider);
    } catch (error) {
      console.log(error);
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
          riderLocation: selectLocation,
          username,
          password,
          email,
          tel,
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
      fetchRiderLocation();
    }
  }, [isFocus]);

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={myStyle.mainreg}>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 50 }}>
          เลขใบอนุญาตขับขี่
        </Text>
        <TextInput
          style={myStyle.inputreg}
          value={riderLicense}
          onChangeText={setRiderLicense}
        />
        <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 15 }}>
          จุดที่ประจำ
        </Text>
        <Dropdown
          style={myStyle.inputreg}
          data={dropdownLocation}
          labelField="label"
          valueField="value"
          placeholder=""
          maxHeight={200}
          value={selectLocation}
          onChange={(item) => {
              setSelectLocation(item.value);
          }}
          renderItem={(item) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 15,
              }}
            >
              <Text>{item.label}</Text>
            </View>
          )}
        />

        <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 15 }}>
          ชื่อผู้ใช้งาน
        </Text>
        <TextInput
          style={myStyle.inputreg}
          value={username}
          onChangeText={setUsername}
        />

        <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 15 }}>
          รหัสผ่าน
        </Text>
        <TextInput
          style={myStyle.inputreg}
          value={password}
          onChangeText={setPassword}
        />

        <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 15 }}>
          อีเมลล์
        </Text>
        <TextInput
          style={myStyle.inputreg}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 15 }}>
          เบอร์โทร
        </Text>
        <TextInput style={myStyle.inputreg} value={tel} onChangeText={setTel} />

        <TouchableOpacity
          style={{
            backgroundColor: "#307A59",
            paddingVertical: 12,
            paddingHorizontal: 25,
            borderRadius: 25,
            alignItems: "center",
            marginVertical: 10,
            cursor: "pointer",
            width: 312,
            alignSelf: "center",
            marginTop: 80,
          }}
          onPress={handleRiderRegister}
        >
          <Text style={myStyle.buttonLogin}>ยืนยัน</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
