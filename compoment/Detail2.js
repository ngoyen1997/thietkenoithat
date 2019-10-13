import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'

class DetailScreen2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.navigation.getParam('item', []),
        }
    }
    render() {
        return (
            <ScrollView style={{flex:1}}>
                <View style={{ flex: 1 }}>
                <Image style={{ height: Dimensions.get('window').width *356/604, width: Dimensions.get('window').width }} source={{ uri: 'http://design-app.000webhostapp.com/'+this.state.item.anh_detail1 }}></Image>
                <Image style={{ height: Dimensions.get('window').width *356/604, width: Dimensions.get('window').width }} source={{ uri: 'http://design-app.000webhostapp.com/'+this.state.item.anh_detail2 }}></Image>
                <Image style={{ height: Dimensions.get('window').width *356/604, width: Dimensions.get('window').width }} source={{ uri: 'http://design-app.000webhostapp.com/'+this.state.item.anh_detail3 }}></Image>
                <Text>{this.state.item.ten_noiThat}</Text>
                <Text>{this.state.item.mo_ta}</Text>
            </View>
            </ScrollView>
        )
    }
}
export default DetailScreen2;