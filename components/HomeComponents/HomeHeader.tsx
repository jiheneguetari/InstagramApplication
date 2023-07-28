import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { image1 } from "../../assets";
import { ProfileScreenNavigationProp } from "../../Navigation/MainContainer"; 

const HomeHeader: React.FC<{}> = ({}) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
 
  // function to navigate to StoryScreen 
  const gotoStories = () => {
    navigation.navigate("StoryScreen");
  };
 
  return (
    <View style={headerstyles.container}>
      <TouchableOpacity style={headerstyles.logoContainer}>
        <Image source={image1} style={headerstyles.logo} />
      </TouchableOpacity>
      <Text style={headerstyles.title}>Instastories</Text>
      <TouchableOpacity style={headerstyles.iconContainer}>
        <Ionicons
          style={headerstyles.icon}
          name="ios-send-outline"
          size={24}
          color="black"
          onPress={gotoStories}
        />
      </TouchableOpacity>
    </View>
  );
};

const headerstyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 60,
    marginTop: 20,
    backgroundColor: "white",
  },
  logoContainer: {
    width: 41,
    height: 41,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "red",
    overflow: "hidden",
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  title: {
    color: "#6C0466",
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: {
    transform: [{ rotate: "-20deg" }],
  },
  iconContainer: {
    padding: 6,
  },
});
export default HomeHeader;
