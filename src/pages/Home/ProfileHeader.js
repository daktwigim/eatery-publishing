import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const ProfileHeader = ({ profile }) => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={{ uri: 'https://picsum.photos/100/100' }} />
      <View style={{ justifyContent: 'center' }}>
        <Text style={styles.countLabel}>
          아는식당 <Text style={styles.count}>100</Text>
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.taste}>{profile.onlymeal ? '식사위주' : '술과함께'} ・</Text>
          <Text style={styles.taste}>{profile.quility ? '양보다질' : '질보다양'} ・</Text>
          <Text style={styles.taste}>{profile.new ? '새로운거' : '늘먹던거'} ・</Text>
          <Text style={styles.taste}>{profile.fancy ? '레스토랑' : '동네맛집'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingVertical: 8,
    backgroundColor: 'white',
  },
  countLabel: {
    marginBottom: 4,
    fontSize: 12,
  },
  count: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  taste: {
    marginRight: 4,
    fontSize: 12,
  },
  image: {
    marginRight: 10,
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#FFC44F',
  },
});

export default ProfileHeader;
