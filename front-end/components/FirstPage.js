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

  //new
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
      if (!token) return;

      try {
        const decoder = jwtDecode(token);
        console.log(decoder);
        const now = Date.now() / 1000;
        console.log(now);
        if (decoder.exp < now) {
          await AsyncStorage.removeItem("token");
          await AsyncStorage.removeItem("loggedInUser");
          return;
        }
        const storedUser = await AsyncStorage.getItem("loggedInUser");
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.log("Invalid token");
      }
    };

    const loadRider = async () => {
      const riderToken = await AsyncStorage.getItem("riderToken");
      if (!riderToken) return;

      try {
        const riderDecoder = jwtDecode(riderToken);
        console.log(riderDecoder);
        const now = Date.now() / 1000;
        console.log(now);
        if (riderDecoder.exp < now) {
          await AsyncStorage.removeItem("riderToken");
          await AsyncStorage.removeItem("LoggedRider");
          return;
        }
        const storedRider = await AsyncStorage.getItem("LoggedRider");
        setRider(JSON.parse(storedRider));
      } catch (e) {
        console.log("Invalid riderToken");
      }
    };
    loadUser();
    loadRider();
  }, []);

  if (rider) {
    return <MainRider rider={rider} />;
  }

  if (!user) {
    return (
       <View style={myStyle.newcontainer}>
        <View style={myStyle.headerTextWrap}>
          <Text style={myStyle.title}>GREENWIN</Text>
          <Text style={myStyle.subtitle}>Let's Begin Your Journey</Text>
        </View>

        <Animated.View
          style={[
            myStyle.bottomContainer,
            { transform: [{ translateY: slideAnim }] },
          ]}
        >
          <Image
          source={require("../assets/bottomLogin.jpg")}
          style={myStyle.bottomImage}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={myStyle.newfirstbutton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={myStyle.newfirsttext}>ล็อคอิน</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={myStyle.newsecondbutton}
          onPress={() => navigation.navigate("AddPerson")}
        >
          <Text style={myStyle.newsecondtext}>สมัครบัญชีใช้งาน</Text>
        </TouchableOpacity>

        <View style={myStyle.riderWrap}>
        <TouchableOpacity onPress={() => navigation.navigate("RiderLogin")}>
          <Text style={myStyle.rider}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={myStyle.text}> as a Motorcycle Taxi Driver</Text>
        </View>
        

        </Animated.View>
        

        
      </View>
    );
  }

  return <ListPerson user={user} />;
}
