import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import { useNavigation } from '@react-navigation/native';


const SOCKET_URL = 'http://10.0.2.2:8080/ws';

const RealtimeScreen = () => {
  const clientRef = useRef(null);
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const navigation =  useNavigation();

  useEffect(() => {
    const client = new Client({
  webSocketFactory: () => new SockJS(SOCKET_URL),
  debug: (str) => console.log("DEBUG:", str),
  reconnectDelay: 5000,
  onConnect: () => {
    console.log("✅ Connected to WebSocket");
    setConnected(true);
    client.subscribe('/topic/messages', (msg) => {
      console.log("📨 Received:", msg.body);
      navigation.navigate('FirstPage');
      setMessages((prev) => [...prev, msg.body]);
    });
  },
  onWebSocketError: (err) => {
    console.error("❌ WebSocket error:", err.message);
  },
  onStompError: (frame) => {
    console.error("❌ STOMP error:", frame.headers['message']);
    console.error("Body:", frame.body);
  },
});


    client.activate();
    clientRef.current = client;

    return () => {
      client.deactivate();
    };
  }, []);

  const sendMessage = () => {
    if (clientRef.current && message) {
      clientRef.current.publish({
        destination: '/app/send-message',
        body: message,
      });
      setMessage('');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Status: {connected ? 'Connected' : 'Disconnected'}</Text>
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="Enter message"
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
      />
      <Button title="Send" onPress={sendMessage} />
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={{ marginVertical: 5 }}>{item}</Text>}
      />
    </View>
  );
};

export default RealtimeScreen;
