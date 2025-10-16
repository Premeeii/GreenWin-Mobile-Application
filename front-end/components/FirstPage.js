import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Animated, 
  Dimensions,
} from "react-native";
import { myStyle } from "../styles/mystyle";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { ListPerson } from "./ListPerson";
import { MainRider } from "./MainRider";

const { height } = Dimensions.get("window");

export function FirstPage() {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [rider, setRider] = useState(null);

  const slideAnim = useRef(new Animated.Value(height * 0.9)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0, // ขยับขึ้นมา
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    const loadUser = async () => {
      const token = await AsyncStorage.getItem("token");
      if(!token) return;

      try{
        const decoder = jwtDecode(token);
        console.log(decoder);
        const now = Date.now() / 1000;
        console.log(now);
        if(decoder.exp < now){
          await AsyncStorage.removeItem("token");
          await AsyncStorage.removeItem("loggedInUser");
          return;
        }
        const storedUser = await AsyncStorage.getItem("loggedInUser");
        setUser(JSON.parse(storedUser));
      }catch(e){
        console.log("Invalid token");
      }
    };

    const loadRider = async () => {
      const riderToken = await AsyncStorage.getItem("riderToken");
      if(!riderToken) return;

      try{
        const riderDecoder = jwtDecode(riderToken);
        console.log(riderDecoder);
        const now = Date.now() / 1000;
        console.log(now);
        if(riderDecoder.exp < now){
          await AsyncStorage.removeItem("riderToken");
          await AsyncStorage.removeItem("LoggedRider");
          return;
        }
        const storedRider = await AsyncStorage.getItem("LoggedRider");
        setRider(JSON.parse(storedRider));
      }catch(e){
        console.log("Invalid riderToken")
      }
    };
    loadUser();
    loadRider();
  }, [])

  if(rider){
    return <MainRider rider={rider}/>
  }
  
  if(!user){
      return (
    <ImageBackground
      source={require("../assets/image.png")}
      style={myStyle.firstbg}
      resizeMode="cover" //ปรับภาพเต็มหน้าจอ
    >
      <View>
        <Image
          source={require("../assets/app-name.png")}
          style={myStyle.firsticon}
        ></Image>
        <TouchableOpacity
          style={myStyle.firstbutton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={myStyle.firsttext}>ล็อคอิน</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={myStyle.firstbutton}
          onPress={() => navigation.navigate("AddPerson")}
        >
          <Text style={myStyle.firsttext}>สมัครบัญชีใช้งาน</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("RiderLogin")}>
          <Text
            style={{
              fontWeight: "bold",
              alignSelf: "center",
              position: "absolute",
              marginTop: 200,
              color:'white'
            }}
          >
            สำหรับจักรยานยนต์รับจ้าง
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
  }


  
  return <ListPerson user={user}/>
}
