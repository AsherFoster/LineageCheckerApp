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

import DeviceItem from './DeviceItem';

import * as data from "./devices.json"
import ResultSummary from './ResultSummary';
const devices = data.devices;


export default class LineageCheckerApp extends Component {

  constructor(props){
    super(props);

    this.state = {
      results: []
    }
  }

  handleSearch = (term) => {
    if(!term) return this.setState({
      results: [],
      hasSearched: false
    });

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
        <View style={styles.wrapper}>
          <ScrollView style={styles.wrapper}>
            <View style={styles.container}>
              <Text style={styles.header}>Does it have Lineage</Text>
              <TextInput style={styles.input} onChangeText={this.handleSearch} returnKeyType="search" />
              {this.state.hasSearched &&
              <View>
                <ResultSummary resultFound={results.length > 0}/>
                {results}
              </View>
              }
            </View>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#32B1BA'
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    fontSize: 50,
    color: "#FFF",
    textAlign: "center"
  },
  input: {
    width: 300,
    height: 60
  }
});

AppRegistry.registerComponent('LineageCheckerApp', () => LineageCheckerApp);
