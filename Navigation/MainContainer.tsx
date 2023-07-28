import * as React from "react";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Screens/HomeScreen";
import StoryScreen from "../Screens/StoryScreen";
import FullScreenImage from "../Screens/FullScreenImage";

export type RootStackParamList = {
  Home: undefined;
  StoryScreen: undefined;
  FullScreenImage: { imageSource: string };
};

export type ProfileScreenRouteParams = {
  imageSource: string;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
type Props = NativeStackScreenProps<RootStackParamList, "Home">;
export type ProfileScreenNavigationProp = Props["navigation"];
export type ProfileScreenRouteProp = Props["route"];

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="StoryScreen" component={StoryScreen} />
        <Stack.Screen name="FullScreenImage" component={FullScreenImage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
