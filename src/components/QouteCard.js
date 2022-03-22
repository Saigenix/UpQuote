import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import Colors from '../../assests/Colours';
import getqoute from '../../assests/Qoutesapi';
import Share from 'react-native-share';
import { captureRef } from "react-native-view-shot";


const QouteCard = () => {
  const [qoute, setqoute] = useState('Stay Hungry, stay Foolish');
  const [loding, setloding] = useState(true);
  const qouteurl = 'https://api.quotable.io/random?maxLength=120';
  const Viewref = useRef();

  const getqoute = async () => {
    try {
      const respornce = await fetch(qouteurl);
      const qoute = await respornce.json();
      setqoute(qoute.content);
      setloding(false);
      console.log(qoute.content);
    } catch (error) {
      console.log(error);
      setloding(true);
    }
  };

  
  const shareimg = async () => {
    try {
      const img = await captureRef(Viewref, {
        format: 'jpg',
        quality: 0.9,
      });
      await console.log(img);
      await Share.open({url: img});
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getqoute();
  }, []);

  return (
    <View style={Styles.card} ref={Viewref}>
      {loding ? (
        <View>
          <Text style={Styles.txt}>Stay Hungry, Stay Foolish</Text>
          <ActivityIndicator size="small" color="#0000ff" />
        </View>
      ) : (
        <Text style={Styles.txt}>{qoute}</Text>
      )}
      <TouchableOpacity
        onPress={() => {
          setloding(true);
          getqoute();
        }}>
        <Image source={require('../../assests/up.png')} style={Styles.imgup} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          shareimg();
        }}>
        <Image
          source={require('../../assests/share.png')}
          style={Styles.imgshare}
        />
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 15,
    margin: 15,
    backgroundColor: Colors.bg,
    maxHeight: 140,
    justifyContent: 'space-between',
    width: '90%',
    borderWidth: 2,
    alignItems: 'flex-start',
    borderColor: Colors.txtf,
  },
  txt: {
    fontSize: 20,
    color: Colors.txt,
    padding: 2,
    alignSelf: 'center',
  },
  imgshare: {
    flex: 1,
    top: -20,
    left: 270,
    bottom: 70,
    height: 30,
    width: 30,
    position: 'absolute',
    alignSelf: 'flex-end',
    flexWrap: 'wrap',
  },
  imgup: {
    flex: 1,
    position: 'absolute',
    left: 15,
    height: 30,
    width: 30,
    alignSelf: 'flex-end',
    flexWrap: 'wrap',
  },
});
export default QouteCard;
