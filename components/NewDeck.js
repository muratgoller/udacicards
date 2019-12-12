import React, { Component } from 'react'
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import styles from '../styles'
import { addDeck } from '../actions/index'
import { connect } from 'react-redux'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class NewDeck extends Component{

    constructor(){
        super();
        this.state = {
            input: ''
        };
    }

    onPress = () => {
        
        let deck = {
            title : this.state.input,
            questions : []
        }

        this.props.handleAddDeck(deck)

        //this.props.navigation.navigate("DeckEdit")

        this.props.navigation.navigate('DeckEdit', {
            title: this.state.input
          });
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={{textAlign:"center", marginTop:30}}>What is the title of your new deck ?</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', marginTop:10, borderWidth: 1}}
                    onChangeText={(text) => this.setState({input: text})}
                    placeholder="Please type the name of new deck"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}>
                    <Text style={{color:'white'}}>Create Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps({decks}) {
    return { decks: decks }
  }

const mapDispatchToProps = dispatch => {
    return {
        handleAddDeck: (deck) => dispatch(addDeck(deck))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)