import React from 'react';
import { StyleSheet,Text,View,Image,Component } from 'react-native';
import { StackNavigator } from 'react-navigation'
import LoginScreen from  './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'
import vikash from './Screens/vikash'



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
  },
  vikash: {screen: vikash,
    navigationOptions:{
      headerTitle:'vikash',

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
