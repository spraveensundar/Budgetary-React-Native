import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { NonVegfood, Vegfood } from '../Conset';
import { MinusIcon, PlusIcon } from "react-native-heroicons/solid";

const CategoriesScreen = () => {


  return (

    <>
    <ScrollView  
    showsVerticalScrollIndicator={false}>
   <Text className="text-2xl text-black font-bold mt-5 mb-5">Veg Food</Text>

    <ScrollView
    horizontal={true}
    className="space-x-5 mt-2"
    contentContainerStyle={100}
    showsHorizontalScrollIndicator={false}>

        <View className="flex-row justify-between flex-wrap ">
         
          {
            Vegfood.map((veg,index)=>{
              return(
              <View key={index}  className="items-center mr-8">
                  <TouchableOpacity>
                       <Image source={veg.img} className="w-40 h-44 rounded-xl" resizeMode={"cover"}/>
                  </TouchableOpacity>
                       <Text className="text-center text-xl text-black">{veg.name}</Text>
                       <Text className="text-center text-xl text-black">{veg.price}</Text>
                  <View className="flex-row items-center">
                      <TouchableOpacity>
                             <Text className="text-xl text-white font-bold m-3 bg-black p-2 rounded-full"><MinusIcon color="#fff" fill="#fff" size={29}/></Text>
                       </TouchableOpacity>
                            <Text className="text-xl text-black font-bold">0</Text>
                        <TouchableOpacity>
                            <Text className="text-xl text-white font-bold m-3 bg-black p-2 rounded-full"><PlusIcon color="red" fill="#fff" size={29}/></Text>
                       </TouchableOpacity>

                  </View>

                </View>
              )
            })
          }
        </View>

       

    </ScrollView>

    <Text className="text-2xl text-black font-bold mt-5 mb-5">Non Veg Food</Text>

    <ScrollView
    horizontal={true}
    className="space-x-5 mt-2"
    contentContainerStyle={100}
    showsHorizontalScrollIndicator={false}>

        <View className="flex-row justify-between flex-wrap ">
         
          {
            NonVegfood.map((veg,index)=>{
              return(
              <View key={index} className="items-center mr-8">
                  <TouchableOpacity>
                       <Image source={veg.img} className="w-40 h-44 rounded-xl"/>
                  </TouchableOpacity>
                       <Text className="text-center text-xl text-black">{veg.name}</Text>
                       <Text className="text-center text-xl text-black">{veg.price}</Text>
                  <View className="flex-row items-center text-center">
                      <TouchableOpacity>
                             <Text className="text-xl text-white font-bold m-3 bg-black p-2 rounded-full"><MinusIcon color="#fff" fill="#fff" size={29}/></Text>
                       </TouchableOpacity>
                            <Text className="text-xl text-black font-bold">0</Text>
                        <TouchableOpacity>
                            <Text className="text-xl text-white font-bold m-3 bg-black p-2 rounded-full"><PlusIcon color="red" fill="#fff" size={29}/></Text>
                       </TouchableOpacity>

                  </View>

                </View>
              )
            })
          }
        </View>

       

    </ScrollView>
    
    </ScrollView>

    </>
  )
}

export default CategoriesScreen