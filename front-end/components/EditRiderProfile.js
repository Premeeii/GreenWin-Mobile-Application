import { View, Text, TextInput } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function EditRiderProfile() {
    const [rider, setRider] = useState([]);
    const [username, setUsername] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [tel, setTel] = useState("");
    const [riderLocation, setRiderLocation] = useState("");
    const [vehicle, setVehicle] = useState("");
    const [license, setLicense] = useState("");

    const isFocus = useIsFocused();
    const navigation = useNavigation();

    const loadRide = async () => {
        const stored = await AsyncStorage.getItem("LoggedRider");
        if(stored != null){
           const setData = JSON.parse(stored);
           setRider(setData);
           setUsername(setData.username);
           setFname(setData.rider_firstname);
           setLname(setData.rider_lastname);
           setTel(setData.tel);
           setRiderLocation(setData.riderLocation);
           setVehicle(setData.vehicle);
           setLicense(setData.license);
        }

    }

    useEffect(() =>{
        loadRide();
        console.log(rider);

    }, [])


    return(
        <View>

        </View>
    )
}