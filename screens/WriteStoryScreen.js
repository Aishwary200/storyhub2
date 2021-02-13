import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from "react-native-gesture-handler"
import db from '../config'
import firebase from 'firebase/app'

export default class WriteScreen extends Component {
    constructor(){
        super();
        this.state={
            title:'',
            author:'',
            storyText:''
        }
    }
       submitStory = ()=>{ 
           db.collection("stories").add({ 
               title: this.state.title, 
               author: this.state.author, 
               storyText: this.state.storyText,
            }) 
            this.setState({ title: '', 
            author: '', 
            storyText: '' 
        }) }

    
    render() {
        return (
            <View>
                <Text style={styles.header}>Story Hub</Text>
                <Text style={styles.subTitle}>Write your Story</Text>
                <TextInput style={styles.inputBox}placeholder="title" value={this.state.title}
                onChangeText= {(text)=>{ this.setState({ title: text }) }}/>
                <TextInput style={styles.inputBox}placeholder="Author" value={this.state.author}
                onChangeText= {(text)=>{ this.setState({ author: text }) }}/>
                <TextInput style={styles.storyBox}placeholder="story" multiline={true}value={this.state.storyText}
                onChangeText= {(text)=>{ this.setState({ storyText: text }) }}/>
                <TouchableOpacity style={styles.button} onPress={this.submitStory}>
                    <Text style={styles.text}>Submit</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    inputBox: {
        marginLeft:50,
        marginTop:30,
        width: 200,
        height: 50, 
        borderWidth: 2.5, 
        fontSize: 20,
        textAlign:'center'
    },
    storyBox:{
        marginLeft:50,
        marginTop:30,
        width: 450,
        height: 200, 
        borderWidth: 2.5, 
        fontSize: 20,
    },
    header:{
        backgroundColor:'pink',
        height:50,
        textAlign:'center',
        fontStyle:'bold',
        fontSize:30
    },
    subTitle:{
        backgroundColor:'yellow',
        fontSize:20,
        textAlign:'center',
        height:30,
        marginTop:20
    },
    button:{
        backgroundColor:'red',
        width:100,
        height:60,
        marginLeft:80,
        marginTop:30,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:20,
        fontStyle:'bold'
    }
})