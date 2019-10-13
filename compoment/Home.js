import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions,ScrollView ,StyleSheet} from 'react-native'

import Logo from '../css/logo.png';

const st = StyleSheet.create({
    st1:{
        flex: 1,margin: 8, 
         justifyContent: 'center', 
         alignItems: 'center',
         borderRadius:10,
         shadowColor: "gray",
         borderWidth:1,   
         borderColor:'gray',
         shadowOffset: {
                width: 10,
                height: 10,
        },
        shadowOpacity: 0.25,
            
        elevation: 1,
    },
    text1:{
        fontWeight:'bold',
        color:'red',
    },
    img1:{
        marginBottom:2,
        height: Dimensions.get('window').height/5.7,
         width: Dimensions.get('window').width/2.2,
         borderRadius:10
    }


})
class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
         
            <View style={st.st1}>
                <Image source={{ uri: 'http://design-app.000webhostapp.com' + this.props.item.logo }} style={st.img1} />
                <Text style={st.text1}>{this.props.item.ten_phong}</Text>
            </View>
        )
    }
}
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LoaiPhong: [],
        }
    }
    componentDidMount() {
        this.getData(1);
    }
    async getData(params) {
        const url = 'http://design-app.000webhostapp.com/Server/get.php?idPhongCach=' + params;
        let res = await fetch(url);
        let resJson = await res.json();
        setTimeout(() => {
            this.setState({
                LoaiPhong: resJson.data,
            })
        }, 1000);
    }
    render() {
        return (
                 <View>
                <Image source={Logo} style={{width:300,height:100,marginBottom:5}}></Image> 
                <FlatList
                    data={this.state.LoaiPhong}
                    numColumns={2}
                    style={{ flexDirection: 'column' }}
                    renderItem={({ item, index }) => <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('Detail', {
                            id: item.id,
                          });
                    }}>
                        
                        <Item style={{ flex: 1 }} item={item} index={index} />

                    </TouchableOpacity>}
                />
            </View>
            
        )
    }
}
export default HomeScreen;