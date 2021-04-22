import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Day from './Day';

const Home = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerone}>
        <View style={styles.boxone}></View>
        <View style={styles.boxtwo}>
          <Text style={styles.name}> Hi, Anna </Text>
          <Text style={styles.subtitle}>Here's your health </Text>
        </View>
        <View style={styles.boxthree}>
          <ImageBackground
            source={require('../assets/graphone.png')}
            style={styles.bgImage}></ImageBackground>
        </View>
        <View style={styles.boxfour}>
          <Day dayname="Sun" />
          <Day dayname="Mon" />
          <Day dayname="Tue" />
          <Day dayname="Wed" />
          <Day dayname="Thu" />
          <Day dayname="Fri" />
          <Day dayname="Sat" />
        </View>
      </View>

      <View style={styles.containertwo}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#136Df3',
  },
  containerone: {
    flex: 1,
  },
  containertwo: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
  },
  boxone: {
    flex: 0.48,
  },
  boxtwo: {
    flex: 0.8,
    marginHorizontal: 35,
  },
  boxthree: {
    flex: 2.5,
  },
  boxfour: {
    flex: 0.5,
    color: '#fff',
    flexDirection: 'row',
  },
  name: {
    fontSize: 38,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
  },
  bgImage: {
    // borderWidth: 1,
    width: 400,
    height: '100%',
  },
});

export default Home;
