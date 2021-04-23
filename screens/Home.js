import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import Card from './Card';
import Day from './Day';

const Home = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerone}>
        <View style={styles.boxone}>
          <Image
            style={styles.userImg}
            source={require('../assets/user1.png')}
          />
        </View>
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

      <View style={styles.containertwo}>
        <View style={styles.line}></View>
        <View style={styles.progress}>
          <Text style={styles.textone}>Your Progress</Text>
        </View>
        <View style={styles.cards}>
          <Card
            image={require('../assets/checkbox.png')}
            title="Misson"
            subtitle="85% Completed"
            completed="85%"
          />
          <Card
            image={require('../assets/checktodo.png')}
            title="Completed"
            subtitle="75% Completed"
            completed="75%"
          />
        </View>
      </View>
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
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
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
    width: 400,
    height: '100%',
  },
  userImg: {
    marginTop: 50,
    marginRight: 30,
  },
  line: {
    width: 66,
    height: 4,
    backgroundColor: '#f4f0f0',
    borderRadius: 2,
    marginVertical: 22,
    left: 150,
  },
  progress: {
    left: 50,
    marginBottom: 2,
  },
  textone: {
    fontSize: 20,
    color: '#2D2D2D',
    letterSpacing: -0.5,
  },
  cards: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 30,
  },
});

export default Home;
