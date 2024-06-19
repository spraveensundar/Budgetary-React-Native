import React from 'react'
import Carousel from 'react-native-snap-carousel';
import { View,
    TouchableOpacity,
    Dimensions,
    Image} from 'react-native';
import { data } from '../Conset';


    var {width, height} = Dimensions.get('window')

const CarouselView = () => {
  return (
    <View className="mt-3">
         <Carousel
         data={data}
         renderItem={({item})=><MovieCard item={item} />}
         firstItem={1}
         sliderWidth={width}
         itemWidth={width*0.63}
         slideStyle={{display:'flex', alignItems: 'center',}}
         />
    </View>
  )
}

export default CarouselView;



const MovieCard = ({item})=>{
    return(
      <TouchableOpacity>
        <Image
                 source={item.imgUrl}
               style={{
                width:width*0.6,
                height:height*0.4
               }}
               className="rounded-3xl"/>
      </TouchableOpacity>
    )
  }