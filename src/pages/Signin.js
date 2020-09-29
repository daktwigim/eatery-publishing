import React from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Signin = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: '#264873', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* 로고 */}
      <View style={{ flex: 3, justifyContent: 'flex-end' }}>
        <Image
          style={{ width: 250, height: 250, resizeMode: 'contain' }}
          source={require('../assets/brand-logo.png')}
        />
      </View>

      {/* 사용자 입력 */}
      <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center', width: '60%' }}>
        <View style={{ width: '100%', marginBottom: 10, padding: 8, borderBottomWidth: 1, borderColor: 'white' }}>
          <TextInput style={{ fontSize: 16, color: 'white' }} placeholder="아이디" placeholderTextColor="white" />
        </View>
        <View style={{ width: '100%', marginBottom: 10, padding: 8, borderBottomWidth: 1, borderColor: 'white' }}>
          <TextInput style={{ fontSize: 16, color: 'white' }} placeholder="비밀번호" placeholderTextColor="white" />
        </View>
        <View style={{ padding: 4, marginBottom: 20 }}>
          <TouchableOpacity
            style={{ padding: 4 }}
            onPress={() => {
              navigation.navigate('Main');
            }}
          >
            <Text style={{ color: 'white' }}>로그인</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 6 }}>
          <TouchableOpacity
            style={{ padding: 4 }}
            onPress={() => {
              navigation.navigate('FindId');
            }}
          >
            <Text style={{ fontSize: 12, color: 'white' }}>아이디 찾기</Text>
          </TouchableOpacity>
          <View style={{ height: '50%', borderLeftWidth: 1, borderColor: 'white', marginHorizontal: 4 }} />
          <TouchableOpacity
            style={{ padding: 4 }}
            onPress={() => {
              navigation.navigate('FindPassword');
            }}
          >
            <Text style={{ fontSize: 12, color: 'white' }}>비밀번호 찾기</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
            padding: 8,
            width: 200,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: '#FEC44F',
          }}
        >
          <Image source={require('../assets/kakao-icon.png')} />
          <Text style={{ color: '#FEC44F' }}>카카오톡 로그인</Text>
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 8,
            borderTopWidth: 1,
            borderColor: 'white',
            width: '60%',
          }}
        >
          <TouchableOpacity
            style={{ padding: 4 }}
            onPress={() => {
              navigation.navigate('Signup');
            }}
          >
            <Text style={{ color: 'white' }}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default Signin;
