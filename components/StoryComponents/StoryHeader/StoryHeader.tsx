import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { image1, left } from "../../../assets";
import { ProfileScreenNavigationProp } from "../../../Navigation/MainContainer";
import { useNavigation } from "@react-navigation/native";
import Options from "./Options";

const StoryHeader: React.FC<{}> = ({}) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const handleArrowPress = () => {
    setShowOptions(!showOptions);
  };
  const [showOptions, setShowOptions] = useState(false);
  const gotoStories = () => {
    navigation.navigate("StoryScreen");
  };
  
    // function for navigation to Home
  const gotoHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View>
      <View style={Headerstyle.content}>
        <View style={Headerstyle.container}>
          {/* left Icon navigate to HomeScreen */}
          <TouchableOpacity
            onPress={gotoHome}
            style={Headerstyle.iconContainer}
          >
            <Image style={Headerstyle.left} source={left} />
          </TouchableOpacity>

          <TouchableOpacity style={Headerstyle.profile}>
            <Image source={image1} style={Headerstyle.logoprofile} />
          </TouchableOpacity>
          <Text style={Headerstyle.title}>daria_thirteen</Text>
          <Ionicons
            onPress={handleArrowPress}
            name="chevron-down-sharp"
            size={25}
            color="black"
          />

          {/* Setting Icon  */}
          <TouchableOpacity style={Headerstyle.iconContainer}>
            <Ionicons
              style={Headerstyle.icon}
              name="md-settings-outline"
              size={24}
              color="black"
              onPress={gotoStories}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Options showOptions={showOptions} handleArrowPress={handleArrowPress} />
    </View>
  );
};

const Headerstyle = StyleSheet.create({
  op: {
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: [{ translateX: -15 }, { translateY: 10 }],
    width: 110,
    borderRadius: 10,
    borderColor: "Black",
    borderWidth: 1,
  },
  optionsCont: {},
  content: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  option: {
    marginRight: 15,
    width: 20,
    height: 20,
  },
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    height: 45,
    marginTop: 20,
  },
  iconContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  left: {
    width: 25,
    height: 20,
  },
  profile: {
    marginRight: -20,
    width: 32,
    height: 32,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "red",
    overflow: "hidden",
  },
  logoprofile: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  title: {
    marginRight: -22,
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  icon: {
    transform: [{ rotate: "-20deg" }],
  },
});
export default StoryHeader;
