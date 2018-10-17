import React, { Component } from 'react';
import {
  Image,
  View,
} from 'react-native';

const imageJokenpo = require('../../imgs/jokenpo.png');

class Top extends Component {
  render() {
    return (
      <View>
        <Image source={imageJokenpo} />
      </View>
    );
  }
}

export default Top;
