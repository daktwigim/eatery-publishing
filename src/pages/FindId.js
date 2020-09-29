import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const FindId = ({ step }) => {
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
            placeholder="가입하신 핸드폰 번호를 입력해주세요."
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
          <Text style={{ color: '#444444' }}>아이디 찾기</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>귀하의 아이디는</Text>
        </View>
        <View style={{ marginBottom: 18 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{ flex: 1, marginRight: 10, paddingVertical: 8, borderBottomWidth: 1, borderColor: '#264873' }}
            >
              <Text>아이디</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>입니다.</Text>
            </View>
          </View>
          <View style={{ alignSelf: 'center', marginTop: 8 }}>
            <Text style={{ color: '#AAAAAA', fontSize: 12 }}>
              전체 아이디가 기억나지 않으면 manager@comasoft.io 로 문의 바랍니다.
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          marginTop: 60,
          padding: 8,
          width: 200,
          borderRadius: 2,
          borderWidth: 1,
          borderColor: '#444444',
        }}
      >
        <Text style={{ color: '#444444' }}>비밀번호 찾기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FindId;
