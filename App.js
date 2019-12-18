import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
// the ./ means same folder structure level
import Input from './Components/Input/Input';
import Tinder from './Components/Tinder/Tinder';

export default class App extends React.Component {

  state = {
    value: '',
    // array
    jokes: [],
    flag : true 
  }

// props are a channel to pass info from an instance to the class
  render() {
    return (
      <View style={styles.container}>
        <Input
          updateJokes={(jokes) => this.setState({ jokes: jokes })}
          value={this.state.value}
          onChange={(value) => this.setState({ value: value })}
        />
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.setState({ flag : !this.state.flag}) }
          >
            <Text
              style={styles.text}
            >Flag</Text>
          </TouchableHighlight>

         
         <Tinder jokes={this.state.jokes} />  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
});



//AIzaSyCJd2JfeBR0Tft2E51ltbV4qRVJw23NBEU
