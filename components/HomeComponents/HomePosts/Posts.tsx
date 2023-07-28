import React from "react";
import { useNavigation } from "@react-navigation/native";
import { pic } from "../../../assets";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { ProfileScreenNavigationProp } from "../../../Navigation/MainContainer";
import { Postimages } from "../../../Config/Constants";

const Posts = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const handleImageClick = (imageSource: string) => {
    // Navigate to FullScreenImage and  pass imageSource in parameter.
    navigation.navigate("FullScreenImage", { imageSource: imageSource });
  };
  
  return (
    <View>

      {/* Affichage des informations du post */}
      <View style={Poststyles.Postcontainer}>

        {/* Image du post */}
        <TouchableOpacity style={Poststyles.Postpic}>
          <Image source={pic} style={Poststyles.pic} />
        </TouchableOpacity>
        {/* Nom de l'utilisateur */}

        <Text>JiheneGuetari</Text>
      </View>

      {/* Affichage des images de post horizontalement */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={Poststyles.imageContainer}>
          {Postimages.map((image, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleImageClick(image)}
            >
              <Image
                key={index}
                source={image}
                style={Poststyles.posts}
                resizeMode="cover"
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const Poststyles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 20,
    paddingHorizontal: 8,
  },
  image: {
    borderRadius: 10,
    width: 120,
    height: 140,
    marginRight: 8,
  },
  Postcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    paddingLeft: 30,
    paddingRight: 190,
    marginTop: 20,
    backgroundColor: "white",
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

  posts: {
    borderRadius: 5,
    width: 120,
    height: 190,
    marginRight: 8,
  },
  Posttitle: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  pic: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  Postpic: {
    width: 39,
    height: 39,
    borderRadius: 50,
    overflow: "hidden",
  },
  Posts: {
    marginBottom: 10,
  },
});
export default Posts;
