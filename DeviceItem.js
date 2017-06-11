/**
 * Created by asher on 21/05/17.
 */
import React from "react";
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ButtonAnchor from './ButtonAnchor';

class DeviceItem extends React.Component{

  render(){
    let device = this.props.device;
    device.iconName = device.type.replace("_", "-");


    return (
        <ButtonAnchor href={device.url}>
          <View style={styles.wrapper}>
            <View style={styles.iconWrapper}>
              <Icon name={device.iconName} style={[styles.text, styles.icon]} />
            </View>
            <View style={styles.textWrapper}>
              <Text style={[styles.text, styles.deviceName]} numberOfLines={1} ellipsizeMode="tail">{device.name}</Text>
              <Text style={[styles.text, styles.deviceManufacturer]}>
                {device.manufacturer} <Text style={styles.codename}>({device.codename})</Text>
              </Text>
            </View>
          </View>
        </ButtonAnchor>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 3,
    marginHorizontal: 10,
    backgroundColor: "#222",
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
