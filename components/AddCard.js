import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Picker, Alert } from 'react-native'
import { connect } from 'react-redux'
import styles from '../styles'
import { addCard } from '../actions/index'

class AddCard extends Component{

    constructor(){
        super();
        this.state = {
            question: '',
            answer: '',
            correct: true
        };
    }

    handleAdd = () => {
        let card = {
            title : this.props.navigation.state.params.title,
            question: this.state.question,
            answer: this.state.answer,
            correct: this.state.correct
        }

        if(this.state.question === '' || this.state.answer === ''){
            Alert.alert('Question and answer cannot be blank')
            return false
        }

        this.props.handleAddCard(card)

        this.props.navigation.navigate('DeckEdit', {
            title: this.props.navigation.state.params.title
          });
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', marginTop:10, borderWidth: 1}}
                    onChangeText={(text) => this.setState({question: text})}
                    placeholder="Question"
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', marginTop:10, borderWidth: 1}}
                    onChangeText={(text) => this.setState({answer: text})}
                    placeholder="Answer"
                />
                <Picker
                    selectedValue={this.state.correct}
                    style={{marginTop:5}}
                    onValueChange={(itemValue, itemIndex) => this.setState({correct: itemValue})}>
                    <Picker.Item label="Correct" value={true} />
                    <Picker.Item label="Incorrect" value={false} />
                </Picker>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.handleAdd}>
                    <Text style={{color:'white'}}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleAddCard: (card) => dispatch(addCard(card))
    }
}

export default connect(null, mapDispatchToProps)(AddCard)