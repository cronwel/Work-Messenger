/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const {textStyle, viewStyle } = styles;

  return (
    <View style = {viewStyle}>
      <Text style = {textStyle}> { props.headerText } </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 40,
    color: '#234567',
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 6},
    shadowOpacity: 0.4,
  },
  viewStyle: {
    backgroundColor: '#b5b5b5',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
};
export { Header };
