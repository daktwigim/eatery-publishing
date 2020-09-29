import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Checkbox from '@react-native-community/checkbox';

const Clause = ({ step }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 18, paddingHorizontal: 18 }}>
      <View style={{ marginTop: 20 }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>이용약관</Text>
        </View>
        <ScrollView
          style={{
            paddingHorizontal: 18,
            paddingVertical: 10,
            borderWidth: 1,
            borderColor: '#D4D4D4',
            borderRadius: 4,
            height: 150,
          }}
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
        </ScrollView>
        {/* Todo: 체크박스 데이터 바인딩 및 라벨 이벤트 처리 */}
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 8 }}>
          <Checkbox
            style={{ marginRight: 8 }}
            boxType="square"
            lineWidth={1}
            animationDuration={0.1}
            tintColor="#D4D4D4"
            onTintColor="#264873"
            onCheckColor="#264873"
          />
          <Text>[필수] 이용약관에 동의합니다.</Text>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>개인정보처리방침</Text>
        </View>
        <ScrollView
          style={{
            paddingHorizontal: 18,
            paddingVertical: 10,
            borderWidth: 1,
            borderColor: '#D4D4D4',
            borderRadius: 4,
            height: 150,
          }}
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
        </ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 8 }}>
          <Checkbox
            style={{ marginRight: 8 }}
            boxType="square"
            lineWidth={1}
            animationDuration={0.1}
            tintColor="#D4D4D4"
            onTintColor="#264873"
            onCheckColor="#264873"
          />
          <Text>[필수] 개인정보처리방침에 동의합니다.</Text>
        </View>
      </View>
    </View>
  );
};

export default Clause;
