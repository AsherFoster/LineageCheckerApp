/**
 * Created by asher on 22/05/17.
 */
import React from "react";
import {Text, View, StyleSheet} from "react-native";

import "./HasResult.css";
import Icon from 'react-native-vector-icons/MaterialIcons';

class ResultSummary extends React.Component {
  render(){
    if(this.props.resultFound)
      return (
          <View style={styles.wrapper}>
            <View style={styles.iconWrapper}>
              <Icon name="check" style={styles.icon} />
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.text}>Found a matching device</Text>
            </View>
          </View>
      );
    else
      return (
          <View style={styles.wrapper}>
            <View style={styles.iconWrapper}>
              <Icon name="warning" style={styles.icon} />
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.text}>No devices found</Text>
            </View>
          </View>
      )
  }
}

const styles = StyleSheet.create({

});


export default ResultSummary;