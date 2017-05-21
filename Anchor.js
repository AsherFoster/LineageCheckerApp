/**
 * Created by asher on 21/05/17.
 */
import React from "react";
import {
  View,
  Linking
} from 'react-native';


class Anchor extends React.Component{

  render(){
    let url = this.props.href;
    return (
        <View onPress={() => Linking.openURL(url)} style={this.props.style}>
          {this.props.children}
        </View>
    )
  }
}

export default Anchor;
