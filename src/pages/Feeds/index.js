import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DATA from '../../dev/DATA';
import ReveiwCard from '../../components/ReviewCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const PageHeader = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        paddingHorizontal: 18,
        paddingVertical: 8,
        paddingTop: 18,
        backgroundColor: 'white',
      }}
    >
      <Text
        style={{
          marginBottom: 4,
          fontSize: 12,
        }}
      >
        이번 주 친구들의 아는식당 <Text style={{ fontWeight: 'bold', fontSize: 12 }}>100</Text>
      </Text>
    </View>
  );
};

const SubTabs = ({ currentTab, setCurrentTab }) => {
  return (
    <View style={style_SubTabs.wrapper}>
      <View>
        <TouchableOpacity
          style={style_SubTabs.button}
          onPress={() => {
            setCurrentTab('reviews');
          }}
        >
          <Text style={currentTab === 'reviews' ? style_SubTabs.textActive : style_SubTabs.text}>친구들</Text>
        </TouchableOpacity>
        <View style={currentTab === 'reviews' ? style_SubTabs.underBar : ''} />
      </View>
      <View>
        <TouchableOpacity
          style={style_SubTabs.button}
          onPress={() => {
            setCurrentTab('favorites');
          }}
        >
          <Text style={currentTab === 'favorites' ? style_SubTabs.textActive : style_SubTabs.text}>취향별</Text>
        </TouchableOpacity>
        <View style={currentTab === 'favorites' ? style_SubTabs.underBar : ''} />
      </View>
    </View>
  );
};

const style_SubTabs = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#D4D4D4',
  },

  button: {
    width: 60,
    marginTop: 10,
    marginBottom: 4,
    marginHorizontal: 10,
  },
  underBar: {
    height: 4,
    backgroundColor: '#264873',
    borderRadius: 2,
    width: '25%',
    left: '37%',
  },
  textActive: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },

  text: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
  },
});

const ReviewsList = ({ reviews }) => {
  const renderItem = ({ item, index }) => <ReveiwCard item={item} index={index} mine={true} />;

  return (
    <FlatList columnWrapperStyle={style_List.contentListColumn} data={reviews} renderItem={renderItem} numColumns={2} />
  );
};

const FavoritesList = ({ reviews }) => {
  const renderItem = ({ item, index }) => <ReveiwCard item={item} index={index} />;

  return (
    <FlatList columnWrapperStyle={style_List.contentListColumn} data={reviews} renderItem={renderItem} numColumns={2} />
  );
};

const style_List = StyleSheet.create({
  contentListWrap: {
    justifyContent: 'space-around',
  },
  contentListColumn: {
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
});

const Feeds = () => {
  const [profile, setProfile] = useState(DATA.profile);
  const [reviews, setReviews] = useState(DATA.reviews);
  const [currentTab, setCurrentTab] = useState('reviews');

  const filterReviews = (mine) => {
    if (mine) {
      return DATA.reviews.filter((item) => item.userId);
    } else {
      return DATA.reviews.filter((item) => !item.userId);
    }
  };

  useEffect(() => {
    let isMine = currentTab === 'reviews';
    setReviews(filterReviews(isMine));
  }, [currentTab]);

  return (
    <SafeAreaView>
      <PageHeader profile={profile} />
      <SubTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === 'reviews' ? <ReviewsList reviews={reviews} /> : <FavoritesList reviews={reviews} />}
    </SafeAreaView>
  );
};

export default Feeds;
