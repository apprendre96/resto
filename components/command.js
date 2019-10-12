import React, { Component } from 'react'
import { Text, View, Button, ScrollView } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import NumericInput from 'react-native-numeric-input'
import { Divider} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class command extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isGoing: true,
          numberOfGuests: 2
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    render() {
        
        return (
           
                <ScrollView>
            <View style={{flex:1,alignItems:'center',   paddingHorizontal: 10,
            paddingTop: 40,}}>

           
                <Text>Taille</Text>
                
                 <RNPickerSelect style={{flex:1,alignItems:'center',}}
                 
                
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'X', value: 'X' },
                { label: 'L', value: 'L' },
                { label: 'M', value: 'M' },
                { label: 'XL', value: 'XL' },
            ]}
            
        /> 

 <View style={{flex:1,   
    paddingTop: 40,alignItems:'center',}}>
        <Text>Nombre</Text>
  <NumericInput 
   
            value={this.state.value} 
            onChange={value => this.setState({value})} 
            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={240} 
            totalHeight={50} 
            iconSize={25}
            step={1}
            valueType='real'
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>
           
    
   
               


</View>
<View style={{  flex:1, paddingTop: 200,justifyContent:'center',alignItems:'center',
   
   
    }}>
    <Text >Commander</Text> 
    </View>


            

          
</View>
</ScrollView>


        )
    }
}
