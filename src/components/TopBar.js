import React from 'react';

import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Icon from '@expo/vector-icons/FontAwesome';

import {Audio} from  'expo-av'

const TopBar = () => {

  const xyloSounds = {
    intro: require('../assets/sounds/intro.m4a'), 
  }

  const navigation = useNavigation();

  const handlePlaySound = async note => {
		const soundObject = new Audio.Sound()

		try {
			let source = xyloSounds[note]
			await soundObject.loadAsync(source)
			await soundObject
				.playFromPositionAsync(1000)
				.then(async playbackStatus => {
					setTimeout(() => {
						soundObject.unloadAsync()
					}, playbackStatus.durationMillis)
				})
				.catch(error => {
					console.log(error)
				})
		} catch (error) {
			console.log(error)
		}
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <Icon  style={styles.icon} name="home" size={40} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePlaySound('intro')}>
        <Icon style={styles.icon} name="music" size={40} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: '#8545de',
    height: 72,
  },
  icon: {
    marginLeft: 20,
    marginRight: 22,
    marginTop: 22,
  },
});

export default TopBar;
