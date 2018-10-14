/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Jokenpo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computerChoice: '',
      userChoice: '',
      result: ''
    };
  }
  jokenpo = (userChoiceParam) => {
    this.setState({ userChoice: userChoiceParam });
  }
  render() {
    return (
      <View>
        <Text>Computer choice: </Text>
        <Text>User choice: {this.state.userChoice}</Text>
        <Text>Result: </Text>
        <Button
          title='Stone'
          onPress={() => this.jokenpo('stone')}
        />
        <Button
          title='Paper'
          onPress={() => this.jokenpo('paper')}
        />
        <Button
          title='Scirror'
          onPress={() => this.jokenpo('scirror')}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Jokenpo', () => Jokenpo);
