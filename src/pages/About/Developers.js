import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const style_developers = StyleSheet.create({
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
    marginLeft: 8,
    marginBottom: 16,
  },

  inner: {
    margin: 8,
    padding: 8,
    borderStyle: 'solid',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    color: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  label: {
    fontWeight: 'bold',
  },
});

const Developers = () => {
  return (
    <View style={style_developers.container}>
      <View style={style_developers.wrapper}>
        <Text style={style_developers.header}>회사소개</Text>
        <View style={style_developers.body}>
          <View style={style_developers.inner}>
            <Text style={style_developers.label}>상호</Text>
            <Text>COMASOFT Inc.</Text>
          </View>
          <View style={style_developers.inner}>
            <Text style={style_developers.label}>대표</Text>
            <Text>서희상</Text>
          </View>
          <View style={style_developers.inner}>
            <Text style={style_developers.label}>주소</Text>
            <Text>서울특별시 서초구 강남대로 479, 비1 135</Text>
          </View>
          <View style={style_developers.inner}>
            <Text style={style_developers.label}>사업자등록번호</Text>
            <Text>290-86-01703</Text>
          </View>
        </View>
      </View>

      <View style={style_developers.wrapper}>
        <Text style={style_developers.header}>종업원</Text>
        <View style={style_developers.body}>
          <View style={style_developers.inner}>
            <Text style={style_developers.label}>쉐프</Text>
            <Text>서총괄</Text>
          </View>
          <View style={style_developers.inner}>
            <Text style={style_developers.label}>서빙</Text>
            <Text>김기획</Text>
          </View>
          <View style={style_developers.inner}>
            <Text style={style_developers.label}>요리</Text>
            <Text>박개발</Text>
          </View>
          <View style={style_developers.inner}>
            <Text style={style_developers.label}>플레이팅</Text>
            <Text>박디잔</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Developers;
