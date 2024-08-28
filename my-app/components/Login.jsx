import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { FlipInEasyX } from 'react-native-reanimated'
import { StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'


export default function Login() {

  const router = useRouter();

  return (
    <View >
      <Text style={{
        fontSize: 10,
        fontFamily:'Outfit-Bold',
        textAlign:'center' 
      }}>Find Colleges
      </Text>

        
      <TouchableOpacity style={styles.button}
        onPress={()=>router.push('/auth/sign-in')}
      >
        
      <Text  style={{
        color:Colors.WHITE,
        textAlign:'center',
        fontFamily:'outfit',
        fontSize:17,
        marginTop:10,
        backgroundColor:Colors.PRIMARY
      }}>Sign In</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
        onPress={()=>router.push('/auth/sign-up')}
      >
      <Text  style={{
        color:Colors.WHITE,
        textAlign:'center',
        fontFamily:'outfit',
        fontSize:18,
        marginTop:10,
        backgroundColor:Colors.PRIMARY
      }}>Sign Up</Text>

      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create ({
  container : {
  backgroudColor : Colors.WHITE,
  marginTop :-20,
  borderTopLeftRadius:30,
  borderTopRightRadius:30,
  height :'100%',
  padding:25
  },

  button: {
    padding :15,
    backgroudColor:Colors.PRIMARY,
    borderRadius:99,
    marginTo:'20%'
  }
})