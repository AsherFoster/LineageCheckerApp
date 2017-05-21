/**
 * Created by asher on 21/05/17.
 */
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import Anchor from './Anchor';
import Icon from 'react-native-vector-icons/MaterialIcons';

class DeviceItem extends React.Component{

  render(){
    let device = this.props.device;

    return (
        <View>
          <Anchor href={device.url} style={styles.wrapper}>
            <View style={styles.iconWrapper}>
              <Icon name={device.type} style={[styles.text, styles.icon]} />
            </View>
            <View style={styles.textWrapper}>
              <Text style={[styles.text, styles.deviceName]} numberOfLines={1} ellipsizeMode="tail">{device.name}</Text>
              <Text style={[styles.text, styles.deviceManufacturer]}>
                {device.manufacturer} <Text style={styles.codename}>({device.codename})</Text>
              </Text>
            </View>
          </Anchor>
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
  text: {
    color: "#FFF"
  },
  icon: {
    fontSize: 50,
    marginLeft: 10,
    marginRight: 30
  },
  textWrapper: {
    marginRight: 40
  },
  deviceName: {
    fontSize: 20,
    width: 250
  },
  codename: {
    fontFamily: "monospace"
  }
});

export default DeviceItem;
