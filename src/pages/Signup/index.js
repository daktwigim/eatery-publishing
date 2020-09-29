import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Clause from './Clause';
import Account from './Account';
import Verification from './Verification';
import Profile from './Profile';

const Header = ({ step, setStep }) => {
  const navigation = useNavigation();
  const inset = useSafeAreaInsets();

  const moveStepBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigation.goBack();
    }
  };

  const moveStepForward = () => {
    if (step === 4) {
      navigation.navigate('Signin');
    } else {
      setStep(step + 1);
    }
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: inset.top,
          height: 100,
          backgroundColor: 'white',
          // justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          style={{ paddingLeft: 18 }}
          onPress={moveStepBack}
          // onPress={() => {
          //   navigation.goBack();
          // }}
        >
          <Image source={require('../../assets/arrow-back.png')} />
        </TouchableOpacity>
        <Text style={{ marginLeft: 10 }}>회원가입</Text>
        <View style={{ flex: 1 }} />
        <TouchableOpacity style={{ paddingRight: 18 }} onPress={moveStepForward}>
          <Text style={{ color: '#264873' }}>{step === 4 ? '완료' : '다음'}</Text>
        </TouchableOpacity>
      </View>
      <View style={stylesHeader.progressWrap}>
        <View style={step === 1 ? stylesHeader.progressStepActive : stylesHeader.progressStep} />
        <View style={step === 2 ? stylesHeader.progressStepActive : stylesHeader.progressStep} />
        <View style={step === 3 ? stylesHeader.progressStepActive : stylesHeader.progressStep} />
        <View style={step === 4 ? stylesHeader.progressStepActive : stylesHeader.progressStep} />
      </View>
    </>
  );
};

const stylesHeader = StyleSheet.create({
  progressWrap: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  progressStep: {
    flex: 2,
    borderBottomWidth: 2,
    borderColor: 'gray',
    marginHorizontal: 2,
  },
  progressStepActive: {
    flex: 3,
    borderBottomWidth: 4,
    borderColor: '#264873',
  },
});

const Body = ({ step }) => {
  const BodyComponent = () => {
    switch (step) {
      case 1:
        return <Clause />;
      case 2:
        return <Account />;
      case 3:
        return <Verification />;
      case 4:
        return <Profile />;
    }
  };

  return BodyComponent();
};

const Signup = () => {
  const [step, setStep] = useState(1);
  const [account, setAccount] = useState({});

  return (
    <>
      <Header step={step} setStep={setStep} />
      <Body step={step} account={account} />
    </>
  );
};

const styles = StyleSheet.create({});

export default Signup;
