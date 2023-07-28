import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Image,TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProp } from'../Navigation/MainContainer'; 
import { ProfileScreenRouteProp } from'../Navigation/MainContainer'; 

const FullScreenImage: React.FC<{}> = ({}) => {
    const route = useRoute<ProfileScreenRouteProp>();
    const navigation = useNavigation<ProfileScreenNavigationProp>()
    const imageSource =  route.params &&  route.params.imageSource;
    const gotoHome =() =>{
      navigation.navigate('Home');
     };
  return (
    <View style={styles.container}>
          <TouchableOpacity onPress={gotoHome} style={styles.left}>
      <Ionicons  name="chevron-back" size={24} color="black" onPress={gotoHome}/>
    </TouchableOpacity>
    <Image source={ imageSource} style={styles.image} resizeMode="contain" />

  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    marginTop:0,
  },
  
  image: {
    width:400,
    marginTop:80,
  },
  left:{
    position:'absolute',
    width:60,
    height:30,
    top:'7%',
    left:'5%'
  }
});
export default FullScreenImage;
