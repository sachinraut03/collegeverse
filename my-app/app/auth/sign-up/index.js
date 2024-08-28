import { View, Text, TextInput, TextInputComponent, TouchableOpacity } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import {  Header } from 'react-native/Libraries/NewAppScreen';
import { Colors } from './../../../constants/Colors'
import { StyleSheet } from 'react-native';


export default function SignUP() {
  const nevigation=useNavigation();

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
      }}>Create New Acount</Text>


    <View style={{
      marginTop:30,
    }}
    >
      <Text style={{
        fontFamily:'Outfit-Medium',
      }}>Name</Text>
      <TextInput
       style={styles.input}
       placeholder='Enter Your Name' />
        
    </View> 



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


 <View style={{
      marginTop:30,
    }}
    >
      <Text style={{
        fontFamily:'Outfit-Medium',
      }}>Conform Password</Text>
      <TextInput
      secureTextEntry={true}
       style={styles.input}
       placeholder='Enter Your Password' />
        
    </View> 


<TouchableOpacity>
<Text style={{
        fontFamily:'Outfit-Medium',
        fontSize:25,
        textAlign:'center',
        marginTop:30,
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        color:Colors.WHITE
      }}>Sign Up</Text>

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