import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Signup = ({ navigation }) => {
  return (
    <View>
     <TouchableOpacity onPress={() => navigation.navigate('Home')}>
     <Text>Signup</Text>

     </TouchableOpacity>
      
    </View>
  )
}

export default Signup