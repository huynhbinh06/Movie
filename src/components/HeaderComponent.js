import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class HeaderComponent extends Component {
    render() {
        return (
            <View style={{paddingVertical:12,paddingHorizontal:21}}>
                <Text style={{fontSize:28,fontFamily:'Roboto-Bold',color:'#001F45'}}>Home</Text>
            </View>
        )
    }
}
