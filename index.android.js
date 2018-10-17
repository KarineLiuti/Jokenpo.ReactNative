/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
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
      resultGame: ''
    };
  }
  jokenpo = (userChoiceParam) => {
    var computerChoice = Math.floor(Math.random() * 3);

    var computerChoiceValue = '';
    switch (computerChoice) {
      case 0: computerChoiceValue = 'stone'; break;
      case 1: computerChoiceValue = 'paper'; break;
      case 2: computerChoiceValue = 'scirror'; break;
    }

    var result = '';

    if (computerChoiceValue === 'stone') {
      if (userChoiceParam === 'stone') {
        result = 'Draw';
      }

      if (userChoiceParam === 'paper') {
        result = 'You won';
      }

      if (userChoiceParam === 'scirror') {
        result = 'You lose';
      }
    }

    if (computerChoiceValue === 'paper') {
      if (userChoiceParam === 'stone') {
        result = 'You lose';
      }

      if (userChoiceParam === 'paper') {
        result = 'Draw';
      }

      if (userChoiceParam === 'scirror') {
        result = 'You won';
      }
    }

    if (computerChoiceValue === 'scirror') {
      if (userChoiceParam === 'stone') {
        result = 'You won';
      }

      if (userChoiceParam === 'paper') {
        result = 'You lose';
      }

      if (userChoiceParam === 'scirror') {
        result = 'Draw';
      }
    }

    this.setState({ userChoice: userChoiceParam,
                    computerChoice: computerChoiceValue,
                    resultGame: result });
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
              title='Scirror'
              onPress={() => this.jokenpo('scirror')}
            />
          </View>
        </View>
        <View style={Styles.resultArea}>
          <Text style={Styles.resultText}>{this.state.resultGame}</Text>
          <Icon choice={this.state.userChoice} player={'My choice'} />
          <Icon choice={this.state.computerChoice} player={'Computer choice'} />
        </View>
      </View>
    );
  }
}

class Top extends Component {
  render() {
    return (
      <View>
        <Image source={require('./imgs/jokenpo.png')} />
      </View>
    );
  }
}

class Icon extends Component {
  render() {
    //this.props.choice;
    //this.props.player;

    if (this.props.choice === '') return false;

    if (this.props.choice === 'stone') {
      return (
        <View style={Styles.viewChoice}>
          <Text style={Styles.textChoice}>{this.props.player}</Text>
          <Image source={require('./imgs/stone.png')} />
        </View>
      );
    }

    if (this.props.choice === 'paper') {
      return (
        <View style={Styles.viewChoice}>
          <Text style={Styles.textChoice}>{this.props.player}</Text>
          <Image source={require('./imgs/paper.png')} />
        </View>
      );
    }

    if (this.props.choice === 'scirror') {
      return (
        <View style={Styles.viewChoice}>
          <Text style={Styles.textChoice}>{this.props.player}</Text>
          <Image source={require('./imgs/scirror.png')} />
        </View>
      );
    }
    
  }
}

const Styles = StyleSheet.create ({
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
    fontWeight: "bold",
    color: '#2c365e',
    height: 50
  },
  textChoice: {
    fontSize: 18,
  },
  viewChoice: {
    alignItems: 'center',
    marginBottom: 15
  }
});

AppRegistry.registerComponent('Jokenpo', () => Jokenpo);
