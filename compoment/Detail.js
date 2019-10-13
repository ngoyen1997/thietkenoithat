import React, { Component } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions,ScrollView } from 'react-native'
class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image source={{ uri: 'http://design-app.000webhostapp.com/' + this.props.item.anh_bia }} style={{ height: Dimensions.get('window').height/3, width: Dimensions.get('window').width/2.1,margin:5 }} />
            </View>
        )
    }
}
class DetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.navigation.getParam('id','0'),
            LoaiPhong: [],
        }
    }
    componentDidMount() {
        this.getData(this.state.id);
        //alert(this.state.id)
    }
    async getData(params) {
        const url = 'http:/design-app.000webhostapp.com/Server/getchitiet.php?idPhong=' + params;
        let res = await fetch(url);
        let resJson = await res.json();
        setTimeout(() => {
            this.setState({
                LoaiPhong: resJson.data,
            })
        }, 1000);
       // alert(JSON.stringify(resJson.data));
    }
    render() {
        return (
            <View style={{flex:1}}>
                <FlatList style={{flex:1}}
                    data={this.state.LoaiPhong}
                    numColumns={2}
                    style={{ flex:1, flexDirection: 'column' }}
                    renderItem={({ item, index }) => <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('Detail2', {
                            item: item,
                          });
                    }}>
                        <Item style={{ flex: 1 }} item={item} index={index} />
                    </TouchableOpacity>}
                />
            <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('Home'); }}>
            <Text>Go home</Text>
            </TouchableOpacity>
            </View>
        )
    }
}
export default DetailScreen;