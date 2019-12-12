import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Alert, Button } from 'react-native'
import { connect } from 'react-redux'
import styles from '../styles'
import { deleteDeck } from '../actions/index'

class DeckEdit extends Component{

    addCard = () => {

        this.props.navigation.navigate('AddCard', {
            title: this.props.navigation.state.params.title
          });
    }

    startQuiz = () => {

        const { decks } = this.props

        if(decks[this.props.navigation.state.params.title].questions.length === 0){
            Alert.alert('You cannot take the quiz because there is no card added in the deck.')
            return false
        }

        this.props.navigation.navigate('Quiz', {
            title: this.props.navigation.state.params.title
          });
    }

    redirect = () => {
        this.props.handleDeleteDeck(this.props.navigation.state.params.title)

        this.props.navigation.navigate('DecksList')
    }

    getDeckMainInfo = (deck) => {
        return (
            <View style={styles.container}>
                <Text style={{textAlign: "center", fontSize: 18}}>{deck.title}</Text>
                <Text style={{textAlign: "center", fontSize: 18}}>{deck.questions.length} Cards</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.addCard}>
                    <Text style={{color:'white'}}>Add Card</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.startQuiz}>
                    <Text style={{color:'white'}}>Start Quiz</Text>
                </TouchableOpacity>

                <Button
                    title="Delete Deck"
                    onPress={() => this.redirect()}
                />
            </View>
        )
    }

    render(){
        const { navigation, decks } = this.props

        const deck = decks[navigation.state.params.title]

        return(
            deck === undefined ? null : this.getDeckMainInfo(deck)
        )
    }
}

function mapStateToProps(state) {
    return { decks: state }
}

  const mapDispatchToProps = dispatch => {
    return {
        handleDeleteDeck: (deckTitle) => dispatch(deleteDeck(deckTitle))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckEdit)