import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Lestates from "./LesStates";
import LesViews from "./LesViews";

const ViewsStat: React.FC<{}> = ({}) => {
  const [showViews, setShowViews] = useState(true);
  const [showStates, setShowStates] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("eye");

  /* views */
  const handleEyePress = () => {
    if (selectedIcon !== "eye") {
      setShowViews(!showViews);
      setShowStates(false);
      setSelectedIcon("eye");
    }
  };
  /* stat */
  const handleStatsPress = () => {
    if (selectedIcon !== "stats") {
      setShowStates(!showStates);
      setShowViews(false);
      setSelectedIcon("stats");
    }
  };

  return (
    <View>
      <View style={styles.Profilecontainer}>
        <TouchableOpacity
          style={[
            styles.iconContainer,
            selectedIcon === "stats" && styles.selectedIcon,
          ]}
          onPress={handleStatsPress}
        >
          <Ionicons name="stats-chart-outline" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.iconContainer,
            selectedIcon === "eye" && styles.selectedIcon,
          ]}
          onPress={handleEyePress}
        >
          <Ionicons name="eye-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scroll1}>
        {showViews && !showStates && <LesViews />}
        {!showViews && showStates && <Lestates />}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Profilecontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 80,
    paddingLeft: 30,
    paddingRight: 210,
    marginTop: 20,
    backgroundColor: "white",
  },
  iconContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  scroll1: {
    height: 270,
  },
  selectedIcon: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
});
export default ViewsStat;
