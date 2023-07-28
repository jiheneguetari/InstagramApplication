import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { views } from "../../../Config/Constants";
import { ProfileScreenNavigationProp } from "../../../Navigation/MainContainer";
import { horizon } from "../../../assets";

const LesViews = () => {
    const navigation = useNavigation<ProfileScreenNavigationProp>();
    return (
      <View style={styles.optionsContainer}>
        <Text style={styles.nbrviews}> 515 Views</Text>
        <ScrollView style={styles.content}>

        {views.map((view, index) => (
            <TouchableOpacity key={index} style={styles.viewItem}>
              <TouchableOpacity style={styles.imageview}>
                <Image source={view.image} style={styles.viewImage} />
              </TouchableOpacity>
              <Text style={styles.viewName}>{view.name}</Text>
              <Image source={horizon} style={styles.option} />
              <Ionicons
                style={styles.icon}
                name="ios-send-outline"
                size={24}
                color="black"
                onPress={() => navigation.navigate("StoryScreen")}
              />
            </TouchableOpacity>
        ))}
                  </ScrollView>

      </View>
    );
  };
const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    flex: 1,
    flexGrow: 1,
  },
  optionsContainer: {
    marginTop: 10,
  },
  nbrviews: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 5,
  },
  viewItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginHorizontal: 10,
    height: 50,
  },
  imageview: {
    marginRight: 20,
    width: 32,
    height: 32,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "red",
    overflow: "hidden",
  },
  image: {
    borderRadius: 10,
    width: 120,
    height: 140,
    marginRight: 8,
  },
  viewImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  viewName: {
    width: 220,
  },
  icon: {
    transform: [{ rotate: "-20deg" }],
  },
  option: {
    marginRight: 15,
    width: 20,
    height: 20,
  },
});
export default LesViews;
