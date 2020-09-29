import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';

const style_question = StyleSheet.create({
  container: {
    margin: 16,
  },

  header: {
    margin: 8,
    padding: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },

  inputBox: {
    borderStyle: 'solid',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    borderRadius: 4,
    marginBottom: 24,
    paddingHorizontal: 16,
  },

  inputBoxBig: {
    borderStyle: 'solid',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    borderRadius: 4,
    marginBottom: 24,
    height: 240,
    paddingHorizontal: 16,
    textAlignVertical: 'top',
  },
});

const Question = () => {
  return (
    <ScrollView style={style_question.container}>
      <View style={style_question.wrapper}>
        <Text style={style_question.header}>문제발생시기</Text>
        <TextInput style={style_question.inputBox} placeholder="ex) 오늘, 이번 주, X월 X일 등..." />
        <Text style={style_question.header}>문의내용</Text>
        <TextInput style={style_question.inputBoxBig} placeholder="내용과 함께 화면을 캡쳐해서 보내주세요!" />
        <TextInput style={style_question.inputBox} placeholder="답변 받을 메일 주소" />
        <TextInput style={style_question.inputBox}>이미지 첨부하기</TextInput>
      </View>
      <Button title="분노 표출하기" />
    </ScrollView>
  );
};

export default Question;
