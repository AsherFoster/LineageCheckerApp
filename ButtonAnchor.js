/**
 * Created by asher on 23/05/17.
 */
import React from "react";
import {
  Linking,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform
} from 'react-native';


class ButtonAnchor extends React.Component{

  render(){
    let url = this.props.href;
    const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return (
        <Touchable title={this.props.title} onPress={() => Linking.openURL(url)} style={this.props.style}>
          {this.props.children}
        </Touchable>
    )
  }
}

export default ButtonAnchor;
