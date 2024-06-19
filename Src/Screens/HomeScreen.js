import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react';
import { UserIcon,} from "react-native-heroicons/solid";
import CarouselView from '../Component/Carousel';
import CategoriesScreen from './CategoriesScreen';


const HomeScreen = () => {
  return (
    <View className="flex-1 mt-6 p-4 mb-10">
     
     <View className="flex-row justify-between items-center">
      <Text className="text-center text-3xl text-black font-bold">Foodi</Text>

      <TouchableOpacity>
        <UserIcon  color="red" fill="black" size={29}/>
      </TouchableOpacity>

     </View>


     <CarouselView/>

     <CategoriesScreen/>
  

    </View>
  )
}

export default HomeScreen;


