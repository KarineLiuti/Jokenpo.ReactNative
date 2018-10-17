import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet
} from 'react-native';

const imageStone = require('../../imgs/stone.png');
const imagePaper = require('../../imgs/paper.png');
const imageScissors = require('../../imgs/scissors.png');

class Icon extends Component {
  render() {
    //this.props.choice;
    //this.props.player;

    if (this.props.choice === '') return false;

    if (this.props.choice === 'stone') {
      return (
        <View style={Styles.viewChoice}>
          <Text style={Styles.textChoice}>{this.props.player}</Text>
          <Image source={imageStone} />
        </View>
      );
    }

    if (this.props.choice === 'paper') {
      return (
        <View style={Styles.viewChoice}>
          <Text style={Styles.textChoice}>{this.props.player}</Text>
          <Image source={imagePaper} />
        </View>
      );
    }

    if (this.props.choice === 'scissors') {
      return (
        <View style={Styles.viewChoice}>
          <Text style={Styles.textChoice}>{this.props.player}</Text>
          <Image source={imageScissors} />
        </View>
      );
    }
  }
}

const Styles = StyleSheet.create({
  textChoice: {
    fontSize: 18,
  },
  viewChoice: {
    alignItems: 'center',
    marginBottom: 15
  }
});

export default Icon;
