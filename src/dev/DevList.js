import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  { id: 1, name: 'Main', title: '홈' },
  { id: 2, name: 'Signin', title: '로그인' },
  { id: 3, name: 'Signup', title: '회원가입' },
  { id: 4, name: 'FindId', title: '아이디 찾기' },
  { id: 5, name: 'FindPassword', title: '비밀번호 찾기' },
  // { id: 6, name: 'Home', title: '홈' },
  // { id: 7, name: '', title: '' },
  // { id: 8, name: '', title: '' },
  // { id: 9, name: '', title: '' },
  // { id: 10, name: '', title: '' },
  // { id: 11, name: '', title: '' },
  // { id: 12, name: '', title: '' },
];

const Item = ({ name, title }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigate(name);
      }}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const DevList = () => {
  const renderItem = ({ item }) => <Item title={item.title} name={item.name} />;

  return <FlatList style={styles.container} data={DATA} renderItem={renderItem} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  item: {
    backgroundColor: '#D4D4D4',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default DevList;
