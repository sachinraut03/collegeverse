import { View, Text, Image } from 'react-native'
import React from 'react'

export default function login() {
  return (
    <View>
      <Text>login this is log in page</Text> 

      <Image source={require('./../assets/images/159459.webp')}

          style={{
            width: '100%' , 
            height:500
          }}
         
      />
          
    </View>
  )
}