import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const style_about = StyleSheet.create({
  container: {
    margin: 16,
  },

  wrapper: {},

  header: {
    margin: 8,
    padding: 8,
    borderStyle: 'solid',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    color: 'gray',
    fontSize: 12,
  },

  body: {
    marginLeft: 16,
    marginBottom: 16,
  },

  inner: {
    margin: 8,
    padding: 8,
    borderStyle: 'solid',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    color: 'gray',
  },
});

const About = (props) => {
  const navigation = useNavigation();
  return (
    <View style={style_about.container}>
      <View style={style_about.wrapper}>
        <Text style={style_about.header}>고객센터</Text>
        <View style={style_about.body}>
          <TouchableOpacity style={style_about.inner} onPress={() => navigation.navigate('Question')}>
            <Text>문의하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style_about.inner} onPress={() => navigation.navigate('Help')}>
            <Text>도움말</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={style_about.wrapper}>
        <Text style={style_about.header}>About Us</Text>
        <View style={style_about.body}>
          <TouchableOpacity style={style_about.inner} onPress={() => navigation.navigate('Notice')}>
            <Text>공지사항</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style_about.inner} onPress={() => navigation.navigate('Developers')}>
            <Text>아는식당 종업원</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={style_about.wrapper}>
        <Text style={style_about.header}>이용약관 및 개인정보처리방침</Text>
        <View style={style_about.body}>
          <TouchableOpacity style={style_about.inner} onPress={() => navigation.navigate('Term')}>
            <Text>서비스 이용약관</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style_about.inner} onPress={() => navigation.navigate('Privacy')}>
            <Text>개인정보처리방침</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default About;
