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
class vikash extends Component{

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
const styles = StyleSheet.create({
  container:{
    marginTop:15,
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
});
export default vikash;
