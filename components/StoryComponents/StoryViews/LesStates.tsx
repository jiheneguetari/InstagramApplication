import React  from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { states } from "../../../Config/Constants";

const Lestates = () => {
    return (
      <View>
        {states.map((state, index) => (
          <Text key={index} style={styles.optionText}>
            {state}
          </Text>
        ))}
      </View>
    );
  };
const styles = StyleSheet.create({
  optionText: {
    marginLeft: 20,
    height: 40,
    fontSize: 16,
  },
 
});
export default Lestates;
