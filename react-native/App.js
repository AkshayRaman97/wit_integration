import React from 'react';
import { StyleSheet,Text,View,Image, } from 'react-native';
import { StackNavigator } from 'react-navigation'
import LoginScreen from  './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'



export default class App extends React.Component {
  render()
  {
    return(
          <AppNavigator />



  );
  }
}
const AppNavigator = StackNavigator({

  LoginScreen:{ screen: LoginScreen,
navigationOptions:{
  headerTitle:'                           Robot',
},
  },
  HomeScreen: {screen: HomeScreen,
    navigationOptions:{
      headerTitle:'ChatBot',
      
    },
  }
})

const styles = StyleSheet.create({
  container:{
    flex:1,

    alignItems:'center',
    justifyContent: 'center',
  },
});
