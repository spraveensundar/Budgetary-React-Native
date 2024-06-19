import { View, Text, Image, StatusBar, StyleSheet, Button, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const WelcomeScreen = () => {

  const navigation = useNavigation();
  return (
    <View className="flex flex-1 justify-center items-center">

        <StatusBar translucent={true} backgroundColor='transparent'/>
        
           <Image source={require("../../asstes/welcome.jpg")}  className="h-full w-full absolute flex justify-center items-center" resizeMode="cover" style={styles.absoluteFillObject}/>
          
          <View className="flex"> 
            <Text className="text-center text-4xl font-extrabold text-orange-600">ALWAYS FRESH & ALWAYS CRISPY & ALWAYS HOT</Text>
          </View>

          <View className="flex absolute bottom-9 justify-end w-full p-4">

            <TouchableOpacity className="bg-orange-600 w-full p-2 rounded-xl" onPress={()=>navigation.navigate("Home")}>
              <Text className=" text-white text-center text-3xl font-bold p-2">Let's Go</Text>
            </TouchableOpacity>
          </View>
        
    </View>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
})