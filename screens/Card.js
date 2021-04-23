import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Card = props => {
  return (
    <View style={styles.cardOne}>
      <TouchableOpacity style={styles.box1}>
        <View
          style={{
            borderRadius: 21,
            backgroundColor: 'rgba(169,169,169,0.2);',
            height: '100%',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={props.image}></Image>
        </View>
      </TouchableOpacity>
      <View style={styles.box2}>
        <Text style={{fontSize: 20, color: '#2D2D2D', letterSpacing: -0.5}}>
          {props.title}
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: '#1FAFCF',
            letterSpacing: -0.5,
            paddingVertical: 5,
          }}>
          {props.subtitle}
        </Text>
      </View>
      <View style={styles.box3}>
        <View
          style={{
            height: '100%',
            width: '90%',
            borderWidth: 1,
            borderColor: '#136DF3',
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#136DF3',
            }}>
            {props.completed}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardOne: {
    flex: 1,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: -15,
  },
  box1: {
    flex: 1,
  },
  box2: {
    flex: 1,
    paddingLeft: 20,
  },
  box3: {
    flex: 1,
    paddingLeft: 20,
  },
});

export default Card;
