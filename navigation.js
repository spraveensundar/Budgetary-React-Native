import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Src/Screens/HomeScreen';
import WelcomeScreen from './Src/Screens/WelcomeScreen';


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Home">
        <Stack.Screen options={{headerShown:false}} name ="Welcome" component={WelcomeScreen}/>
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;