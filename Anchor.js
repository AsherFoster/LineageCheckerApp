/**
 * Created by asher on 21/05/17.
 */
import React from "react";
import {
  Text,
  Linking
} from 'react-native';


class Anchor extends React.Component{

  render(){
    let url = this.props.href;
    return (
        <Text onPress={() => Linking.openURL(url)} style={this.props.style}>
          {this.props.children}
        </Text>
    )
  }
}

export default Anchor;
