import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const style_Help = StyleSheet.create({
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
});

const Help = () => {
  return (
    <ScrollView style={style_Help.container}>
      <View style={style_Help.wrapper}>
        <Text style={style_Help.header}>자주 오는 질문들</Text>
        <View style={style_Help.body}>
          <TouchableOpacity style={style_Help.inner}>
            <Text>1.도움말이 전혀 도움이 되지 않아요</Text>
          </TouchableOpacity>

          <View style={style_Help.inner}>
            <Text>2. 계정에 있던 게시물이 사라졌어요</Text>
          </View>
          <View style={style_Help.inner}>
            <Text>3. 피드에서 봤던 음식점이 없어졌어요</Text>
          </View>
          <View style={style_Help.inner}>
            <Text>4. 이 앱의 용도를 모르겠어요</Text>
          </View>
        </View>
      </View>

      <View style={style_Help.wrapper}>
        <Text style={style_Help.header}>질문 상세 분류</Text>
        <View style={style_Help.body}></View>
      </View>
    </ScrollView>
  );
};

export default Help;
