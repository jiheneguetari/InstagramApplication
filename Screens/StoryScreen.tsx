import {StyleSheet, ScrollView, View} from "react-native";

/* Header */
import StoryHeader from "../components/StoryComponents/StoryHeader/StoryHeader";
/* Stories*/
import StoryStories from "../components/StoryComponents/StoryStories/StoryStories";
/* ViewsStat */
import ViewsStat from "../components/StoryComponents/StoryViews/StoryViewsStat";


const StoryScreen: React.FC = () => {

  return (
      <View style={styles.content} >
        <StoryHeader />
        <View style={{
          zIndex:-1,
          flex:1
        }}>
        <StoryStories />
        <ViewsStat />
        </View>
      </View>
  );
};
const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    flex: 1,
    flexGrow: 1,
  },
});

export default StoryScreen;
