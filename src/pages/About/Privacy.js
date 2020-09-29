import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrivacyText from '../Terms/PrivacyText';

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

const Privacy = () => {
  return (
    <View style={style_term.container}>
      <View style={style_term.titleWrapper}>
        <Text style={style_term.title}>개인정보 처리방침</Text>
      </View>
      <PrivacyText />
    </View>
  );
};

export default Privacy;
