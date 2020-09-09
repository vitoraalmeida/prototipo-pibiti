import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from '@expo/vector-icons/FontAwesome';

const MenuItem = ({itemData}) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    if (itemData.id in [1, 2, 3, 4, 5, 6]) {
      navigation.navigate('OneToFive', [itemData, itemData.id]);
    } else {
      navigation.navigate('SixToEight', [itemData, itemData.id]);
    }
  };

  return (
    <TouchableOpacity onPress={() => handleNavigation()}>
      <View style={styles.listItem}>
        <Image
          source={require('../assets/abc.png')}
          resizeMode="contain"
          style={styles.image}
        />

        <Text style={styles.title}>{itemData.title}</Text>

        <View style={styles.progress}>
          <Icon name="star" size={25} color="#e2e2e2" iconStyle={styles.icon} />
          <View style={styles.progressDown}>
            <Icon name="star" size={30} color="#edd628" />
            <Icon name="star" size={25} color="#e2e2e2" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: '#fff',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
  },

  image: {
    height: 40,
    width: 40,
    marginHorizontal: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#777',
    maxWidth: 250,
    flexGrow: 1,
  },

  progress: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
  },

  icon: {
    borderWidth: 1,
    borderColor: '#000',
  },

  progressDown: {
    flexDirection: 'row',
  },
});

export default MenuItem;
