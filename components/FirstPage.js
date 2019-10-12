import React, { Component } from 'react'
import { Image, StyleSheet, View ,Button,TouchableOpacity,Text} from 'react-native'

export default class App extends Component {
  static navigationOptions = {
  
    //Sets Header text of Status Bar
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
 <View style={{ flex:1,backgroundColor:'white'}}>
  
  
  <TouchableOpacity  onPress={() =>navigate('SecondPage')}>
    <Image
     style={{  }}
     resizeMode='contain'
source={require('/Users/hassan/resto/assets/buu.jpg')}
    />
   
</TouchableOpacity>
</View>

 






     

    



     
      
    )
  }
}

const styles = StyleSheet.create({
  // image: {
  
  //   width:200,
  //   height:200,

  //    justifyContent:'center',
  //   alignItems: 'center',
  //   resizeMode:'center'
    
  // },
})
