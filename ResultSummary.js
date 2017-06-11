/**
 * Created by asher on 22/05/17.
 */
import React from "react";
import {Text, View, StyleSheet} from "react-native";

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
    wrapper: {
      marginVertical: 3,
      backgroundColor: "#222",
      width: 400,
      flexDirection: "row",
      padding: 20,
      borderRadius: 10,
    },
    icon: {
      color: "#FFF",
      fontSize: 50,
      marginLeft: 10,
      marginRight: 30
    },
    textWrapper: {
      marginRight: 40,
    },
    text: {
      color: "#FFF",
      fontSize: 20,
      lineHeight: 35
    }
});


export default ResultSummary;