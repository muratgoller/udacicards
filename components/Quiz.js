import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import styles from '../styles'
import Score from '../components/Score'

class Quiz extends Component{

    constructor(){
        super();
        this.state = {
            questionIndex: 0,
            module: 'question',
            answerCorrect : true,
            numberOfSucceed : 0
        };
    }

    answer = (correct, deck, index) => {
        this.setState({ 
            module : 'singleResult', 
            answerCorrect : correct,
            numberOfSucceed : deck.questions[index].correct === correct ? this.state.numberOfSucceed + 1 : this.state.numberOfSucceed
        })
    }

    next = () => {
        this.setState({module : 'question', questionIndex: this.state.questionIndex + 1})
    }

    score = (deckTitle) => {
        this.setState({module : 'question', questionIndex: 0})

        this.props.navigation.navigate('Score', {
            title: deckTitle,
            countOfSucceed : this.state.numberOfSucceed
          });
    }

    showModule = (module) => {
        const deckTitle = this.props.navigation.state.params.title
        const deck = this.props.decks[deckTitle]
        const index = this.state.questionIndex

        switch(module){
            case 'question' :
            return (
                <View style={styles.container}>
                <Text>{index + 1} / {deck.questions.length}</Text>
                <Text style={{textAlign:'center', fontSize:20}}>
                    {deck.questions[index].question}
                </Text>
                <Button
                    title="Answer"
                    onPress={() => this.setState({module: 'answer'})}
                />
                <TouchableOpacity
                    style={styles.buttonCorrect}
                    onPress={() => this.answer(true, deck, index)}>
                    <Text style={{color:'white'}}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonIncorrect}
                    onPress={() => this.answer(false, deck, index)}>
                    <Text style={{color:'white'}}>Incorrect</Text>
                </TouchableOpacity>
            </View>
            )

            case 'answer' :
            return(
                <View style={styles.container}>
                    <Text>{index + 1} / {deck.questions.length}</Text>
                    <Text style={{textAlign:'center', fontSize:20}}>
                        {deck.questions[index].answer}
                    </Text>
                    <Button
                        title="Question"
                        onPress={() => this.setState({module: 'question'})}
                    />
                </View>
            )

            case 'singleResult' : 
            return(
                    deck.questions[index].correct === this.state.answerCorrect ? 
                    (
                        <View style={styles.container}>
                            <Text style={{textAlign:'center', color:'green', fontSize:20}}>Succeed</Text> 
                            <Text style={{textAlign:'center', fontSize:20}}>
                                The Answer is: {deck.questions[index].answer}
                            </Text>
                            
                            {deck.questions.length > 1 && index < (deck.questions.length - 1) ? (
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={this.next}>
                                    <Text style={{color:'white'}}>Next Question</Text>
                                </TouchableOpacity>
                            ) : null}

                            {(deck.questions.length) - 1 === index ? (
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={this.score(deckTitle)}>
                                    <Text style={{color:'white'}}>Display Score</Text>
                                </TouchableOpacity>
                            ) : null }
                        </View>
                    )
                    :
                    (
                        <View>
                            <Text style={{textAlign:'center', color:'red', fontSize:20}}>Failed</Text>
                            <Text style={{textAlign:'center', fontSize:20}}>
                                The Answer is: {deck.questions[index].answer}
                            </Text>

                            {deck.questions.length > 1 && index < (deck.questions.length - 1) ? (
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={this.next}>
                                    <Text style={{color:'white'}}>Next Question</Text>
                                </TouchableOpacity>
                            ) : null}

                            {(deck.questions.length) - 1 === index ? (
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={this.score(deckTitle)}>
                                    <Text style={{color:'white'}}>Display Score</Text>
                                </TouchableOpacity>
                            ) : null }
                        </View>
                    )
                )
        }
    }

    render(){
        return(
            this.showModule(this.state.module)
        )
    }
}

function mapStateToProps(state) {
    return { decks: state }
}

export default connect(mapStateToProps, null)(Quiz)