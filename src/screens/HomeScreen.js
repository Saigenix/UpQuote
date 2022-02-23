import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import QouteCard from '../components/QouteCard'
import Colors from '../../assests/Colours'

const HomeScreen = () => {
  return (
    <View style={Styles.view}>
        <QouteCard />
    </View>
  )
}
const Styles = StyleSheet.create({
    view: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: Colors.bg,
    },

})
export default HomeScreen