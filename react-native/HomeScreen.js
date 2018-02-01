import React, { Component } from "react";
import{
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,

}
from "react-native";
class HomeScreen extends Component{

  render()
  {

    return(


    <View style={{padding:10}}>


       <TextInput style={{
         height:210,
         margin:20,
         padding:10,

       }}
        placeholder="Type message..."/>
        <Button onPress={()=>this.props.navigation.navigate('HomeScreen')}
        title="Submit"/>

    </View>

);
  }
}

export default HomeScreen;
