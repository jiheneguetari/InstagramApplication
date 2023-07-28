import React  from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { options } from "../../../Config/Constants";

// Define the Props interface
interface OptionsProps {
  showOptions: boolean;
  handleArrowPress: () => void;
}

// Options component which receives props and renders options
const Options: React.FC<OptionsProps> = ({ showOptions }) => {
  return showOptions && ( <View style={styles.op}>
      {/* Render options only if showOptions is true */}
        <View style={styles.optionsCont}>
          {options.map((option, index) => (
            <TouchableOpacity style={styles.optionCell} key={index}>
              <Text> {option} </Text>
            </TouchableOpacity>
          ))}
        </View>
      
      </View>)
};

const styles = StyleSheet.create({
  op: {
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: [{ translateX: -15 }, { translateY: 10 }],
    width: 110,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    zIndex: 10,
    backgroundColor:'white'
  },
  optionsCont: {},
  content: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  optionCell:{
    paddingHorizontal:5,
    paddingVertical:4,
  }
});
export default Options;
