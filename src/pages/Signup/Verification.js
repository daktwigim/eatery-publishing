import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Account = ({ step }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 18, paddingHorizontal: 18 }}>
      <View style={{ marginTop: 20 }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>핸드폰 번호</Text>
        </View>
        <View
          style={{ width: '100%', marginBottom: 18, paddingVertical: 8, borderBottomWidth: 1, borderColor: '#D4D4D4' }}
        >
          <TextInput
            style={{ fontSize: 16, color: '#444444' }}
            placeholder="핸드폰 번호를 입력해주세요."
            placeholderTextColor="#D4D4D4"
          />
        </View>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            marginBottom: 20,
            padding: 8,
            width: 200,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: '#444444',
          }}
        >
          <Text style={{ color: '#444444' }}>인증번호 받기</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>인증번호 입력</Text>
        </View>
        <View style={{ marginBottom: 18 }}>
          <View style={{ width: '100%', paddingVertical: 8, borderBottomWidth: 1, borderColor: '#D4D4D4' }}>
            <TextInput
              style={{ fontSize: 16, color: '#444444' }}
              placeholder="인증번호를 입력해주세요."
              placeholderTextColor="#D4D4D4"
              secureTextEntry={true}
            />
          </View>
          <View style={{ alignSelf: 'flex-end', marginTop: 4 }}>
            <Text>인증번호가 올바르지 않습니다.</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            marginBottom: 20,
            padding: 8,
            width: 200,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: '#444444',
          }}
        >
          <Text style={{ color: '#444444' }}>인증번호 다시받기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;
