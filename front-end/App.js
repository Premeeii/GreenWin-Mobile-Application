import React from 'react';

import { ListPerson } from './components/ListPerson';
import LoginScreen from './components/LoginScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddPerson } from './components/AddPerson';
import { EditProfile } from './components/EditProfile';
import { FirstPage } from './components/FirstPage';
import { Request } from './components/Request';
import { RiderLogin } from './components/RiderLogin';
import { MainRider } from './components/MainRider';
import { RequestDetail } from './components/RequestDetail';
import { EditRiderProfile } from './components/EditRiderProfile';
import RealtimeScreen from './components/RealtimeTest';
import { Summary } from './components/Summary';
import { RiderSummary } from './components/RiderSummary';
import { RiderRegister } from './components/RiderRegister';
import { RiderRegister2 } from './components/RiderRegister2';
import { History } from './components/History';
import { AdminMain } from './components/AdminMain';

const Stack = createNativeStackNavigator();


export default function App(){
  return(
     <NavigationContainer>
        <Stack.Navigator initialRouteName='FirstPage'>
           <Stack.Screen name='FirstPage' component={FirstPage} options={{headerShown:false}}></Stack.Screen>
           <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}></Stack.Screen>
           <Stack.Screen name='AddPerson' component={AddPerson} options={{headerTitle:'',headerShown:false}}></Stack.Screen>
           <Stack.Screen name='ListPerson' component={ListPerson} options={{headerShown:false}}></Stack.Screen>
           <Stack.Screen name='EditProfile' component={EditProfile} options={{headerTitle:'',headerShown:false}}></Stack.Screen>
           <Stack.Screen name='Request' component={Request} options={{headerShown:false}}></Stack.Screen>
           <Stack.Screen name='RiderLogin' component={RiderLogin} options={{headerShown:false,headerTitle:''}}></Stack.Screen>
           <Stack.Screen name='MainRider' component={MainRider} options={{headerShown:false, headerTitle:''}}></Stack.Screen>
           <Stack.Screen name='RequestDetail' component={RequestDetail} options={{headerShown:false, headerTitle:''}}></Stack.Screen>
           <Stack.Screen name='EditRiderProfile' component={EditRiderProfile} options={{headerShown:false}}></Stack.Screen>
           <Stack.Screen name='Test' component={RealtimeScreen} options={{headerTitle:''}}></Stack.Screen>
           <Stack.Screen name='Summary' component={Summary} options={{headerShown:false}}></Stack.Screen>
           <Stack.Screen name='RiderSummary' component={RiderSummary} options={{headerShown:false}}></Stack.Screen>
           <Stack.Screen name='RiderRegister' component={RiderRegister} options={{headerTitle: "GreenWin", headerShown: true, headerTitleAlign: "center", headerTitleStyle: { fontWeight: "bold", fontSize: 20,}}}></Stack.Screen>
           <Stack.Screen name='RiderRegister2' component={RiderRegister2} options={{headerTitle: "GreenWin", headerShown: true, headerTitleAlign: "center", headerTitleStyle: { fontWeight: "bold", fontSize: 20,}}}></Stack.Screen>
           <Stack.Screen name='History' component={History} options={{headerShown:false}}></Stack.Screen>
           <Stack.Screen name='AdminMain' component={AdminMain} options={{headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
     </NavigationContainer>
    
  )
}





