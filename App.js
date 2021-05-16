import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handlePress = () => {
        alert('welcome button');
    }
    setInput = (newInput) => this.setState({input: newInput})
    pressText = () => alert('welcome ' + this.state.input);

    render() {
        return (
            <View style={styles.container}>
                <StatusBar/>
                <Text style={styles.text}>Abdelhay</Text>
                <TouchableOpacity onPress={this.handlePress}><Text>welcome</Text></TouchableOpacity>
                <TextInput defaultValue={this.state.input} inlineImageLeft='search_icon'
                           onChangeText={this.setInput}  value={this.state.input}
                           placeholder='type here' style={styles.input}/>
                <Button title="Press me" onPress={this.pressText} />
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            color: '#f5f',
            fontSize: 30,
        },
        input: {
            width: 300,
            borderWidth: 1,
            borderBottomColor: "#20232a",
        }
    }
);
