import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Banner = () => {
  return (
    <View style={styles.banner}>
      <Image
        source={require('../assets/abc.png')}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    marginTop: 15,
    marginBottom: 20,
    marginHorizontal: 100,
    backgroundColor: '#fff',
    height: 170,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },

  image: {
    height: 130,
    width: 130,
    marginHorizontal: 10,
  },
});

export default Banner;
