import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ReviewCard = ({ item, mine }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => {
        navigation.navigate('ReviewDetail', { id: item.id });
      }}
    >
      <View style={styles.header}>
        {mine ? (
          <Text style={styles.author}>{item.date}</Text>
        ) : (
          <Text style={styles.author} Text>
            {item.author}
          </Text>
        )}
        {/* Card Value Bar Sample*/}
        <View style={styles.valueContainer}>
          <View style={styles.valueWrapper}>
            <View style={styles.valueBar}>
              <View style={styles.barInner} />
            </View>
          </View>
          <View style={styles.valueWrapper}>
            <View style={styles.valueBar}>
              <View style={styles.barInner} />
            </View>
          </View>
          <View style={styles.valueWrapper}>
            <View style={styles.valueBar}>
              <View style={styles.barInner} />
            </View>
          </View>
        </View>
        {/* Card Value Bar end */}
      </View>
      <Image style={styles.cardImage} source={{ uri: item.imageUrl }} resizeMode="cover" />
      <View style={styles.footer}>
        <View style={styles.placeWrapper}>
          <Image style={styles.pin} source={require('../assets/pin.png')} />
          <Text style={styles.place}>{item.place}</Text>
        </View>
        <Image style={styles.share} source={require('../assets/share.png')} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 8,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 4,
    height: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  author: {
    fontSize: 14,
    marginLeft: 4,
  },
  /* Card Value Bar Sample Styles */
  valueContainer: {
    flexDirection: 'row',
  },
  valueWrapper: {},
  valueBar: {
    position: 'relative',
    width: 4,
    height: 15,
    borderRadius: 2,
    backgroundColor: '#f5ecef',
    marginRight: 6,
  },

  barInner: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    backgroundColor: '#fed831',
    borderRadius: 2,
    height: '50%',
  },
  /*Card Value Bar Sample Styles end */

  imageWrapper: {},

  cardImage: {
    resizeMode: 'cover',
    flex: 1,
    height: '100%',
    marginBottom: 4,
    // flexDirection: 'row',
    // alignItems: 'center',
    aspectRatio: 4 / 3,
    borderRadius: 4,
    overflow: 'hidden',
  },

  footer: {
    flexDirection: 'row',
    height: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  placeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  place: {
    fontSize: 12,
  },
  share: {
    marginRight: 8,
  },
});

export default ReviewCard;
