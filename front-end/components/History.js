import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  FlatList,
} from "react-native";
import { myStyle } from "../styles/mystyle";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";

export function History() {
  const [data, setData] = useState("");
  const [user, setUser] = useState("");
  const [history, setHistory] = useState([]);

  const navigation = useNavigation();
  const isFocus = useIsFocused();

  const loadUser = async () => {
    const stored = await AsyncStorage.getItem("loggedInUser");
    if (stored != null) {
      const userData = await JSON.parse(stored);
      setData(userData);
      setUser(userData.username);
      console.log(user);
    }
  };

  const fetchHistory = async () => {
    try {
      const response = await fetch(
        `http://10.0.2.2:8080/api/findhistory/${user}`
      );
      const data = await response.json();
      setHistory(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isFocus) {
      loadUser();
    }
  }, [isFocus]);

  useEffect(() => {
    if (user) {
      fetchHistory();
    }
  }, [user]);

  return (
    <View style={{ flex: 1, backgroundColor: "#E3F5E9" }}>
      {/* ------------------------------------------------------------------------------ */}
      <View style={myStyle.headerHome}>
        <View style={myStyle.headerTitle}>
          <Text style={myStyle.greenwin}>ประวัติ</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ListPerson")}>
          <Image
            source={require("../assets/iconleft.png")}
            style={{ width: 25, height: 25, marginTop: -45, marginLeft: 40 }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          bottom: -200,
          width: "100%",
          height: "504",
          position: "absolute",
        }}
      >
        <Image
          source={require("../assets/bottomLogin.jpg")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>
      {/* ------------------------------------------------------------------------------ */}
      <View style={{ zIndex: 10, marginTop: 150 }}>
        <FlatList
          data={history}
          keyExtractor={(item) => item.summaryid.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "#ffffff70",
                marginBottom: 12,
                padding: 10,

                borderRadius: 8,
                marginHorizontal: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>เวลา: </Text>
                <Text>{new Date(item.timeStamp).toLocaleString("th-TH")}</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>จุดรับ: </Text>
                <Text>{item.pickupName1}</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>จุดหมาย: </Text>
                <Text>{item.destination}</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>วิน: </Text>
                <Text>{item.riderLocation}</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>สถานะ: </Text>
                <Text>{item.status}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}
