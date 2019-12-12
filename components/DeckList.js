import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { deleteDeck } from '../actions/index'

class DeckList extends Component{

    deckEdit = (title) => {
        this.props.navigation.navigate('DeckEdit', {
            title: title
          });
    }

    render(){
        const { decks } = this.props

        return(
            <View>
                { Object.keys(decks).length  === 0 ? 
                <Text style={{textAlign: 'center', fontSize:20, marginTop:20}}>No Deck added yet</Text> :
                    Object.keys(decks).map((prop)=>(
                        <Card>
                            <Text 
                                onPress = {() => this.deckEdit(decks[prop].title)} 
                                style={{textAlign:'center', fontSize:20}}>{decks[prop].title}
                            </Text>
                            <Text 
                                onPress = {() => this.deckEdit(decks[prop].title)} 
                                style={{textAlign:'center'}}>{decks[prop].questions.length} Cards
                            </Text>
                        </Card>
                    ))
                }
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)