import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,TextInput,Dimensions} from 'react-native';
import PropType from 'prop-types';
export default class InputUser extends Component{
    render(){
        return(
            <View style={st.inputWrap}>
                <Image style={st.inlineImg} source={this.props.source}/>
                <TextInput
                style={st.input}
                placeholder={this.props.placeholder}
                secureTextEntry={this.props.secureTextEntry}
                autoCorrect={this.props.autoCorrect}
                autoCapitalize={this.props.autoCapitalize}
                returnKeyType={this.props.returnKeyType}
                placeholderTextColor="white"
                underlineColorAndroid="transparent"
                    />
            </View>
        );
    }
};
InputUser.propType={
    source:PropType.number.isRequired,
    placeholder:PropType.string.isRequired,
    secureTextEntry:PropType.bool,
    autoCapitalize:PropType.string,
    returnKeyType:PropType.string,
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;



const st = StyleSheet.create({
    inputWrap:{
        flex:1,
    },
    inlineImg:{
        position:'absolute',
        zIndex:99,
        width:22,
        height:22,
        left:35,
        top:9,
    },
    input:{
        backgroundColor:'#7adef5',
        width:DEVICE_WIDTH -30,
        height:40,
        paddingLeft: 50,
        marginHorizontal:20,
        color:'black',
    }
})