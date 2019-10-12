//This is an example code to handle Android back button press// 
import React, { Component } from 'react';
//import react in our code.

//For React Navigation 2.+ import following
//import {createStackNavigator} from 'react-navigation';

//For React Navigation 3.+ import following
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
//import Navigator in our project

import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import command from './components/command';
//import all the screens we are going to switch 

const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
    FirstPage: { screen: FirstPage }, 
    //First entry by default be our first screen if we do not define initialRouteName
    SecondPage: { screen: SecondPage }, 
    ThirdPage: { screen: ThirdPage }, 
    command: {screen: command},
  },
  {
    initialRouteName: 'FirstPage',
  }
);
//For React Navigation 2.+ need to export App only
//export default App;
//For React Navigation 3.+
export default createAppContainer(App);