import { View, Text, TextInput, TextInputComponent, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import {  Header } from 'react-native/Libraries/NewAppScreen';
import { Colors } from './../../../constants/Colors'
import { StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function SignIn(){

  const nevigation=useNavigation();
  const router=useRoute()

  useEffect (()=>{
    nevigation.setOptions({
      headerShown: false
    })
  },[])
  return (

    <View style={{
      padding:25,
      marginTop:25
    }}>
      <Text style={{
        fontFamily:'Outfit-Bold',
        fontSize:30,
       
        color:Colors.PRIMARY,
        marginTop:20,
      }}>Welcome Back</Text>


    <View style={{
      marginTop:30,
    }}
    >
      <Text style={{
        fontFamily:'Outfit-Medium',
      }}>Email</Text>
      <TextInput
       style={styles.input}
       placeholder='Enter Your Email' />
        
    </View> 


    <View style={{
      marginTop:30,
    }}
    >
      <Text style={{
        fontFamily:'Outfit-Medium',
      }}>Password</Text>
      <TextInput
      secureTextEntry={true}
       style={styles.input}
       placeholder='Enter Your Password' />
        
    </View> 


<TouchableOpacity

>
<Text style={{
        fontFamily:'Outfit-Medium',
        fontSize:25,
        textAlign:'center',
        marginTop:30,
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        color:Colors.WHITE
      }}>Sign In</Text>

</TouchableOpacity>


<TouchableOpacity>
<Text style={{
        fontFamily:'Outfit-Medium',
        fontSize:25,
        textAlign:'center',
        marginTop:30,
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        color:Colors.WHITE
      }}>Sign In With Google</Text>

    
</TouchableOpacity>

</View>

  
  )


}

const styles = StyleSheet.create({
  input:{
      padding:10,
      borderWidth:1,
      borderRadius:15,
      borderColor: Colors.light,
      fontFamily:'Outfit-Medium'
  }
})