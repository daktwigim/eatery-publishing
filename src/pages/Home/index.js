import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ProfileHeader from './ProfileHeader';
import ReveiwCard from '../../components/ReviewCard';

import DATA from '../../dev/DATA';

const styleSubTabs = StyleSheet.create({
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

const SubTabs = ({ currentTab, setCurrentTab }) => {
  return (
    <View style={styleSubTabs.wrapper}>
      <View>
        <TouchableOpacity
          style={styleSubTabs.button}
          onPress={() => {
            setCurrentTab('reviews');
          }}
        >
          <Text style={currentTab === 'reviews' ? styleSubTabs.textActive : styleSubTabs.text}>아는식당</Text>
        </TouchableOpacity>
        <View style={currentTab === 'reviews' ? styleSubTabs.underBar : ''} />
      </View>
      <View>
        <TouchableOpacity
          style={styleSubTabs.button}
          onPress={() => {
            setCurrentTab('favorites');
          }}
        >
          <Text style={currentTab === 'favorites' ? styleSubTabs.textActive : styleSubTabs.text}>즐겨찾기</Text>
        </TouchableOpacity>
        <View style={currentTab === 'favorites' ? styleSubTabs.underBar : ''} />
      </View>
    </View>
  );
};

const styleReviewList = StyleSheet.create({
  contentListWrap: {
    justifyContent: 'space-around',
  },
  contentListColumn: {
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
});

const ReviewsList = ({ reviews }) => {
  const renderItem = ({ item, index }) => <ReveiwCard item={item} index={index} mine={true} />;

  return (
    <FlatList
      columnWrapperStyle={styleReviewList.contentListColumn}
      data={reviews}
      renderItem={renderItem}
      numColumns={2}
    />
  );
};

const FavoritesList = ({ reviews }) => {
  const renderItem = ({ item, index }) => <ReveiwCard item={item} index={index} />;

  return (
    <FlatList
      columnWrapperStyle={styleReviewList.contentListColumn}
      data={reviews}
      renderItem={renderItem}
      numColumns={2}
    />
  );
};

const Home = () => {
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
      <ProfileHeader profile={profile} />
      <SubTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === 'reviews' ? <ReviewsList reviews={reviews} /> : <FavoritesList reviews={reviews} />}
    </SafeAreaView>
  );
};

export default Home;
