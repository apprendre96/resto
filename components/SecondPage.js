// Second Screen which will be used to show backpress
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text ,BackHandler,Image,Alert,FormGroup,Label,Input,Button} from 'react-native';
//import all the components we are going to use.
import { Ionicons,EvilIcons,AntDesign,MaterialCommunityIcons,Feather } from '@expo/vector-icons';

import {Dialog,DialogTitle,DialogContent,DialogContentText,TextField,DialogActions} from "react-native-dialog";


import { Card, Title, Paragraph ,RadioButton} from 'react-native-paper';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


export default class SecondPage extends Component {

  _handleCommand () {
    props.navigation.navigate('command')
  
  }
    
  constructor(props) {
    super(props)
    //Binding handleBackButtonClick function with this
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  
  componentWillMount() {
    // This is the first method in the activity lifecycle
    // Addding Event Listener for the BackPress 
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
    // This is the Last method in the activity lifecycle
    // Removing Event Listener for the BackPress 
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
 

        // { text: 'May be', onPress: () => console.log('May be Pressed') },
        // { text: 'Yes', onPress: () => console.log('Yes Pressed') },
        // { text: 'OK', onPress: () => console.log('OK Pressed') },
      
      
    

 

  handleBackButtonClick() {
    // Registered function to handle the Back Press

    // We are generating an alert to show the back button pressed
    alert('You clicked back. Now Screen will move to ThirdPage');

    // We can move to any screen. If we want
    this.props.navigation.navigate('ThirdPage');

    // Returning true means we have handled the backpress
    // Returning false means we haven't handled the backpress
    return true;
  }

  static navigationOptions = {
     //Setting the header of the screen
    title: 'MENU',
  };
  
  
  render() {
    const { navigate } = this.props.navigation; 
    
    return (

        <TouchableOpacity  >

        <ScrollView>
            <View style={{flexDirection:'column'}}>
                <Card  onPress={() => this.props.navigation.navigate('command')}>
    <Card.Content style={{alignItems:'center'}}>
      <Title>Tacos</Title>
        <Image  resizeMode='cover' style={{flex:1,height:150}} source={require('../assets/tacos.jpeg')}/>
    </Card.Content>
  </Card>
  <Card>
    <Card.Content style={{alignItems:'center'}}>
      <Title>Chawarma</Title>
  
         <Image  resizeMode='cover' style={{flex:1,height:150}} source={require('../assets/chawarma.jpg')}/>


    </Card.Content>
  </Card>
       

<View style={{}}>
<Card >
<Card.Content style={{alignItems:'center'}}>
<Title>Pizza</Title>
 <Image style={{height:150}} source={require('../assets/pizzaa.jpg')}/>
</Card.Content>
</Card>

<Card>
<Card.Content style={{alignItems:'center'}}>
<Title>Boisson</Title>
<Image style={{height:150}} source={require('../assets/boisson.jpg')}/>
</Card.Content>
</Card>

<Card>
<Card.Content style={{alignItems:'center'}}>
<Title>Specialité Baskoto</Title>
<Image style={{height:150}} source={require('../assets/attieke.jpg')}/>
</Card.Content>
</Card>

</View>
</View>
        </ScrollView>
        </TouchableOpacity>
        
    
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#fff',
    // width:20,
    // height:20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});