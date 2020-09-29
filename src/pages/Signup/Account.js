import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Account = ({ step }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 18, paddingHorizontal: 18 }}>
      <View style={{ marginTop: 20 }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>아이디</Text>
        </View>
        <View
          style={{ width: '100%', marginBottom: 18, paddingVertical: 8, borderBottomWidth: 1, borderColor: '#D4D4D4' }}
        >
          <TextInput
            style={{ fontSize: 16, color: '#444444' }}
            placeholder="사용하실 아이디를 입력해주세요."
            placeholderTextColor="#D4D4D4"
          />
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>비밀번호</Text>
        </View>
        <View
          style={{ width: '100%', marginBottom: 18, paddingVertical: 8, borderBottomWidth: 1, borderColor: '#D4D4D4' }}
        >
          <TextInput
            style={{ fontSize: 16, color: '#444444' }}
            placeholder="비밀번호를 입력해주세요."
            placeholderTextColor="#D4D4D4"
            secureTextEntry={true}
          />
        </View>
        <View
          style={{ width: '100%', marginBottom: 18, paddingVertical: 8, borderBottomWidth: 1, borderColor: '#D4D4D4' }}
        >
          <TextInput
            style={{ fontSize: 16, color: '#444444' }}
            placeholder="비밀번호를 다시 입력해주세요."
            placeholderTextColor="#D4D4D4"
            secureTextEntry={true}
          />
        </View>
      </View>
    </View>
  );
};

export default Account;
