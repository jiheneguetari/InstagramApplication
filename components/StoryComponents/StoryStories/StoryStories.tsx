import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import ListeStories from './ListeStories'
import { Storyimage } from "../../../Config/Constants";

const StoryStories: React.FC<{}> = ({}) => {

  const [activePage, setActivePage] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
  const page = Math.round(event.nativeEvent.contentOffset.x / 200);
  setActivePage(page);

  };

  return (
    <View style={styles.container}>
      {/* Ajout des points de pagination  */}
      <View style={paginationStyle.container}>
        {Storyimage.map((_, index) => (
          <View
            key={index}
            style={[
              paginationStyle.paginationDot,
              activePage === index && paginationStyle.activeDot,
            ]}
          />
        ))}
      </View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        
      >
        <ListeStories />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8FF",
    paddingBottom: 20,
  },
});

// Pagination Style
const paginationStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 5,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#A9A9A9",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "black",
  },
});

export default StoryStories;
