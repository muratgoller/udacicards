import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import NewDeck from './NewDeck'
import DeckList from './DeckList'
import Header from './Header'

const Tabs = createMaterialTopTabNavigator({
    DecksList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Decks List'
        //tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
      },
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck'
        //tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
      },
    }
  }, {
    initialRouteName : 'DecksList',
    navigationOptions: {
      header: Header
    },
    tabBarOptions: {
      activeTintColor: 'white',
      indicatorStyle: { backgroundColor: 'white' },
      style: {
        height: 56,
        backgroundColor: 'black',
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
})

export default Tabs