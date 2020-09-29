import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TermsText from './Terms/TermsText';

const style_term = StyleSheet.create({
  container: {
    margin: 16,
    padding: 16,
  },

  titleWrapper: {
    paddingBottom: 16,
    borderStyle: 'solid',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Term = () => {
  return (
    <View style={style_term.container}>
      <View style={style_term.titleWrapper}>
        <Text style={style_term.title}>아는식당 이용약관</Text>
      </View>
      <TermsText />
    </View>
  );
};

export default Term;
