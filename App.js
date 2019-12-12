import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Tabs from './components/Tabs'
import DeckEdit from './components/DeckEdit'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import Score from './components/Score'
import { createStore } from 'redux'
import reducer from './reducers/index'
import middleware from './middleware'
import { Provider } from 'react-redux'
import { addDeck } from './actions/index'

export default class App extends React.Component {

  render() {

    const AppNavigator = createStackNavigator({
      Home: {
        screen: Tabs
      },
      DeckEdit: {
        screen : DeckEdit,
        navigationOptions: ({ navigation }) => ({
          title: navigation.getParam('title'),
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: 'black',
            borderBottomColor: '#ffffff',
            borderBottomWidth: 3,
          },
          headerTitleStyle: {
            fontSize: 18,
          }
        })
      },
      AddCard: {
        screen : AddCard,
        navigationOptions: ({ navigation }) => ({
          title: navigation.getParam('title') + " Add Card",
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: 'black',
            borderBottomColor: '#ffffff',
            borderBottomWidth: 3,
          },
          headerTitleStyle: {
            fontSize: 18,
          }
        })
      },
      Quiz: {
        screen : Quiz,
        navigationOptions: ({ navigation }) => ({
          title: 'Quiz',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: 'black',
            borderBottomColor: '#ffffff',
            borderBottomWidth: 3,
          },
          headerTitleStyle: {
            fontSize: 18,
          }
        })
      },
      Score: {
        screen: Score,
        navigationOptions: ({ navigation }) => ({
          title: navigation.getParam('title') + " Score",
          countOfSucceed: navigation.getParam('countOfSucceed'),
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: 'black',
            borderBottomColor: '#ffffff',
            borderBottomWidth: 3,
          },
          headerTitleStyle: {
            fontSize: 18,
          }
        })
      }
  });
    
    //const AppContainer = createAppContainer(Tabs);
    const AppContainer = createAppContainer(AppNavigator);

    const store = createStore(reducer, middleware)

    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
            <AppContainer />
        </View>
      </Provider>
    )
  }
}