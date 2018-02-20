import React, { Component } from "react";
import{
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  Dimensions
}
from "react-native";
class LoginScreen extends Component{
  render()

  {
    let screenWidth = Dimensions.get('window').width;

    return(
      <View>







      <Image
source={require('../image/first.jpg')}
style={{width:screenWidth,height:screenWidth *3100/3264,marginTop:20}}>
</Image>



<Button onPress={()=>this.props.navigation.navigate('HomeScreen')}

title="Go to ChatBot"/>
<Button onPress={()=>this.props.navigation.navigate('vikash')}
title="go to vikash/">

</View>
  );

  }
}
export default LoginScreen;
