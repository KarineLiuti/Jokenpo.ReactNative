import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Top from './src/components/top.js';
import Icon from './src/components/icon.js';

export default class Jokenpo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computerChoice: '',
      userChoice: '',
      resultGame: ''
    };
  }
  jokenpo = (userChoice) => {
    const aleatoryNumber = Math.floor(Math.random() * 3);

    let computerChoice;
    switch (aleatoryNumber) {
      case 0: computerChoice = 'stone'; break;
      case 1: computerChoice = 'paper'; break;
      case 2: computerChoice = 'scissors'; break;
      default: computerChoice = '';
    }

    let result = '';

    if (computerChoice === 'stone') {
      if (userChoice === 'stone') {
        result = 'Draw';
      }

      if (userChoice === 'paper') {
        result = 'You won';
      }

      if (userChoice === 'scissors') {
        result = 'You lose';
      }
    }

    if (computerChoice === 'paper') {
      if (userChoice === 'stone') {
        result = 'You lose';
      }

      if (userChoice === 'paper') {
        result = 'Draw';
      }

      if (userChoice === 'scissors') {
        result = 'You won';
      }
    }

    if (computerChoice === 'scissors') {
      if (userChoice === 'stone') {
        result = 'You won';
      }

      if (userChoice === 'paper') {
        result = 'You lose';
      }

      if (userChoice === 'scissors') {
        result = 'Draw';
      }
    }

    this.setState({ userChoice, computerChoice, result });
  }
  render() {
    return (
      <View>
        <Top />
        <View style={Styles.actionGroupButtons}>
          <View style={Styles.actionButton}>
            <Button
              title='Stone'
              onPress={() => this.jokenpo('stone')}
            />
          </View>
          <View style={Styles.actionButton}>
            <Button
              title='Paper'
              onPress={() => this.jokenpo('paper')}
            />
          </View>
          <View style={Styles.actionButton}>
            <Button
              title='scissors'
              onPress={() => this.jokenpo('scissors')}
            />
          </View>
        </View>
        <View style={Styles.resultArea}>
          <Text style={Styles.resultText}>{this.state.result}</Text>
          <Icon choice={this.state.userChoice} player={'My choice'} />
          <Icon choice={this.state.computerChoice} player={'Computer choice'} />
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  actionButton: {
    width: 110
  },
  actionGroupButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5,
  },
  resultArea: {
    alignItems: 'center',
    marginTop: 10
  },
  resultText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#2c365e',
    height: 50
  }
});

AppRegistry.registerComponent('Jokenpo', () => Jokenpo);
