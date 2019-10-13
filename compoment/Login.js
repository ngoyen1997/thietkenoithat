import React,{Component} from 'react';
import {Text,View,StyleSheet,ImageBackground,Image,TextInput,TouchableOpacity,KeyboardAvoidingView,Dimensions} from 'react-native';
import InputUser from './InputUser'
import bgr from '../css/background.jpg'
import Logo from '../css/logo.png'
import IconUser from '../css/iconuser.png'
import IconPass from '../css/iconpass.png'
export default class Login extends Component{
    render(){
        return(
           <ImageBackground source={bgr} style={st.backgr}>
               <View style={st.contain}> 
                    <Image source={Logo} style={st.icon}/>
                    <Text style={st.textHeader}>THIẾT KẾ NỘI THẤT PHÁT HÀ</Text>
               </View>
               <KeyboardAvoidingView behavior='padding' style={st.con1}> 
                   <InputUser
                    source={IconUser}
                    placeholder="Text input "
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                   />
                   <InputUser
                    source={IconPass}
                    placeholder="Text input pass "
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                   />
                   
               </KeyboardAvoidingView>
               <View style={st.con2}>
                   <TouchableOpacity style={st.btn}
                   activeOpacity={1}>
                    <Text style={st.text}>LOGIN</Text>
                   </TouchableOpacity>
               </View>
               <View style={st.con2}>
                   <Text style={st.text}>Sign Up</Text>
               </View>
           </ImageBackground>
        );
    }
}
const st = StyleSheet.create({
    
    backgr:{
        flex:1,
        width:null,
        height:null,
        resizeMode:'cover',
    },
    contain:{
        flex:2,
        alignItems:'center',
        justifyContent:'center'
    },
    con1:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
       
    },
    text:{
        color:'black',
        fontSize:17,
        backgroundColor:'transparent',
         
    },
    icon:{
        width:100,
        height:100
    },
    textHeader:{
        marginTop:10,
        fontSize:18,
        fontWeight:'bold',
        color:'red',
        fontStyle:'italic'
        
    },
    con2:{
        flex:1,
        width:DEVICE_WIDTH,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    btn:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#68b4ed',
        height:40,
        width:150,
        borderRadius:30,
        zIndex:100,
    }
});
const DEVICE_WIDTH = Dimensions.get('window').width;

const DEVICE_HEIGHT = Dimensions.get('window').height;
