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
  TextInput, ScrollView
} from 'react-native';

import DeviceItem from './device-item';

import * as data from "./devices.json"
const devices = data.devices;


export default class LineageCheckerApp extends Component {

  constructor(props){
    super(props);

    this.state = {
      results: []
    }
  }

  handleSearch = (term) => {

    let results = devices.filter((device) =>
        device.name.toLowerCase().includes(term.toLowerCase().trim())
    );

    this.setState({
      results: results,
      hasSearched: true
    });
  };

  render() {
    let results = this.state.results.map(result => <DeviceItem key={result.codename} device={result}/>);

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Does it have Lineage</Text>
        <TextInput style={styles.input} onChangeText={this.handleSearch} />
        <ScrollView>
          {results}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#32B1BA',
  },
  header: {
    fontSize: 50,
    color: "#FFF",
    textAlign: "center"
  },
  input: {
    backgroundColor: "#FFF",
    width: 300,
    height: 60
  }
});

AppRegistry.registerComponent('LineageCheckerApp', () => LineageCheckerApp);
