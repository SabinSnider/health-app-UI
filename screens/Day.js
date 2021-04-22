import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Day = props => {
  return (
    <View style={styles.dayContainer}>
      <View style={{borderRadius: 10, padding: 5, color: '#136DF3'}}>
        <Text style={{color: '#fff'}}> {props.dayname} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dayContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Day;
