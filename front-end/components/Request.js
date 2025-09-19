import { View, Text, TouchableOpacity, Modal } from "react-native";
import { useState, useEffect } from "react";
import { myStyle } from "../styles/mystyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

export function Request() {
  const [request, setRequest] = useState([]);
  const [username, setUsername] = useState("");
  const [cancelConfirm, setCancelConfirm] = useState(false);

  const navigation = useNavigation();

  let stompClient = null;

  const loadRequest = async () => {
    const stored = await AsyncStorage.getItem("requestedByUser");
    if (stored != null) {
      const requestData = JSON.parse(stored);
      setRequest(requestData);
      setUsername(requestData.username);
    }
  };

  const deleteRequest = async () => {
    const addHistory = await fetch("http://10.0.2.2:8080/api/addhistory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerUsername: request.username,
        customerFname: request.fname,
        customerLname: request.lname,
        pickupName1: request.pickupName1,
        pickupName2: request.pickupName2,
        riderLocation: request.riderLocation,
        customerTel: request.tel,
        status: "cancel",
        destination: request.destination,
      }),
    });

    const response = await fetch(
      `http://10.0.2.2:8080/api/delrequest/${username}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      const text = response.text();
      console.log("Cancel Success:", text);
      navigation.navigate("ListPerson");
    } else {
      console.error("Error");
    }
  };

  useEffect(() => {
    const socket = new SockJS("http://10.0.2.2:8080/ws");
    stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("Connect to WebSocket");

        stompClient.subscribe(
          "/topic/new-summary" + username,
          async (message) => {
            const summary = JSON.parse(message.body);
            await AsyncStorage.setItem(
              "SummaryCustomer",
              JSON.stringify(summary)
            );
            navigation.navigate("Summary");
          }
        );
      },
      onStompError: (frame) => {
        console.error("STOMP Error: " + frame.headers["message"]);
      },
    });

    stompClient.activate();

    return () => {
      if (stompClient) stompClient.deactivate();
    };
  });

  useEffect(() => {
    loadRequest();
    console.log(request);
  }, []);

  return (
    <View>
      <Text style={myStyle.topicRequest}>กำลังเรียกวิน</Text>
      <View style={myStyle.mainRequest}>
        <Text style={myStyle.sectionRequset}>เลือกจุดที่ต้องการให้มารับ</Text>
        <Text style={myStyle.contentRequest}>
          {request.pickupName1}, {request.pickupName2}
        </Text>
        <Text style={myStyle.sectionRequset}>
          เลือกจุดให้บริการวินมอเตอร์ไซค์สีเขียว
        </Text>
        <Text style={myStyle.contentRequest}>{request.riderLocation}</Text>
        <Text style={myStyle.sectionRequset}>กำหนดจุดหมาย</Text>
        <Text style={myStyle.contentRequest}>{request.destination}</Text>
      </View>
      <Modal transparent={true} visible={cancelConfirm}>
        <View style={myStyle.overlay}>
          <View style={myStyle.logoutPopup}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                alignSelf: "center",
                marginBottom: 10,
              }}
            >
              ยืนยันการยกเลิก
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                style={myStyle.acceptButton}
                onPress={() => deleteRequest(username)}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    color: "#fff",
                    marginVertical: 2,
                  }}
                >
                  ตกลง
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={myStyle.cancelButton}
                onPress={() => setCancelConfirm(false)}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    marginVertical: 2,
                  }}
                >
                  ยกเลิก
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={myStyle.cancelbutton}
        onPress={() => setCancelConfirm(true)}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          ยกเลิก
        </Text>
      </TouchableOpacity>
    </View>
  );
}
