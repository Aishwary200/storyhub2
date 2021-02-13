import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Read Story</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        backgroundColor:'blue',
        fontSize:30,
        fontStyle:'bold',
        width:200,
        textAlign:'center'
    }
})