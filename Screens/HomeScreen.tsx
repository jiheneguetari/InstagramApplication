import React from 'react';
import {StyleSheet , ScrollView} from 'react-native';

/* Header  */
import HomeHeader from '../components/HomeComponents/HomeHeader';
/* Stories */
import HomeStories from '../components/HomeComponents/HomeStories';
/* Posts component */
import HomePosts from '../components/HomeComponents/HomePosts/HomePosts';
const Home: React.FC = () => {
  return (
  <ScrollView style={styles.content}>
    <HomeHeader  />
    <HomeStories />
    <HomePosts />
  </ScrollView>
  );
};
const styles = StyleSheet.create({
 
  content: {
    backgroundColor:'white',
    flexGrow: 1,
    paddingBottom:10,
    flex: 1,
  },
});

export default Home;
