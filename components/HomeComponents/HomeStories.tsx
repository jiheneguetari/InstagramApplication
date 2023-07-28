import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { ProfileName, Stories, SmallProfilePicture } from "../../Config/Constants";
import { ProfileScreenNavigationProp } from "../../Navigation/MainContainer";

const HomeStories: React.FC<{}> = ({}) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  // Function to navigate to the StoryScreen when "See More" is pressed
  const gotoStories = () => {
    navigation.navigate("StoryScreen");
  };
  return (
    <View>
      {/* Container for the "Popular" title and "See More" button */}
      <View style={Storiestyle.container}>
        <TouchableOpacity>
          <Text style={Storiestyle.polulartitle}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={gotoStories}
          style={Storiestyle.iconContainer}
        >
          <Text style={Storiestyle.moretitle}> See More</Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal ScrollView to display the stories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={Storiestyle.imageContainer}>
          {Stories.map((image, index) => (
            <View key={index} style={Storiestyle.imageWrapper}>
              <Image
                source={image}
                style={Storiestyle.image}
                resizeMode="cover"
              />

              {/* Overlay to add a semi-transparent background on each story */}
              <View style={Storiestyle.overlay} />

              {/* Small profile picture on each story */}
              <Image
                source={SmallProfilePicture[index]}
                style={Storiestyle.smallCircleImage}
                resizeMode="cover"
              />
              {/* Text below the profile picture */}

              <Text style={Storiestyle.soustitre}>{ProfileName[index]}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const Storiestyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 60,
    marginTop: 20,
    backgroundColor: "white",
  },
  image: {
    borderRadius: 10,
    width: 120,
    height: 140,
    marginRight: 8,
  },
  moretitle: {
    color: "black",
  },
  iconContainer: {
    padding: 6,
  },
  imageContainer: {
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 20,
    paddingHorizontal: 8,
  },
  polulartitle: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageWrapper: {
    position: "relative",
    marginRight: 8,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 120,
    height: 140,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
  },
  smallCircleImage: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: [{ translateX: -15 }, { translateY: 10 }],
    width: 30,
    height: 30,
    borderRadius: 30,
    borderColor: "white",
    borderWidth: 1,
  },
  soustitre: {
    color: "white",
    position: "absolute",
    top: "75%",
    left: "30%",
    marginTop: 0,
    fontSize: 12,
    textAlign: "center",
  },
});
export default HomeStories;
