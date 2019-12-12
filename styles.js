import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
  } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: 'center',
      paddingHorizontal: 10
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#000000',
      padding: 10,
      borderRadius:10,
      marginTop:10
    },
    countContainer: {
      alignItems: 'center',
      padding: 10
    },
    countText: {
      color: '#FF00FF'
    },
    buttonCorrect: {
      alignItems: 'center',
      backgroundColor: 'green',
      padding: 10,
      borderRadius:10,
      marginTop:10
    },
    buttonIncorrect: {
      alignItems: 'center',
      backgroundColor: 'red',
      padding: 10,
      borderRadius:10,
      marginTop:10
    }
  })

export default styles