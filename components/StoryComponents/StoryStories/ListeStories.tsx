import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Storyimage, ViewsNumber } from "../../../Config/Constants";

const ListeStories: React.FC<{}> = ({}) => { 
  return (
    <View style={Storiestyle.imageContainer}>
      {Storyimage.map((image, index) => (
        <View key={index} style={Storiestyle.imageWrapper}>
          <Image
            style={Storiestyle.stories}
            key={index}
            source={image}
            resizeMode="cover"
/>
          <View style={Storiestyle.views}>
            <Ionicons name="md-eye" size={30} color="white" />
            <Text style={Storiestyle.viewtitre}>{ViewsNumber[index]}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};


// Liste Stories Style
const Storiestyle = StyleSheet.create({
  imageContainer: {
    position: "relative",
    flexDirection: "row",
    paddingHorizontal: 8,
  },
  imageWrapper: {
    position: "relative",
    marginRight: 8,
  },
  stories: {
    borderRadius: 5,
    width: 200,
    height: 290,
    marginRight: 8,
  },
  views: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: "80%",
    left: "50%",
    transform: [{ translateX: -40 }, { translateY: 10 }],
  },
  viewtitre: {
    color: "white",
    marginLeft: 7,
  },
});

export default ListeStories;
