import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const MultipleChoiceItem = ({
  itemId,
  itemData,
  handleTry,
  markedCorrect,
  endRound,
}) => {
  if (markedCorrect.length === 3) {
    endRound();
  }

  const setStyle = id => {
    if (markedCorrect.includes(id)) {
      return [styles.item, styles.itemSuccess];
    } else {
      return styles.item;
    }
  };

  const setLayout = id => {
    if (id in [1, 2, 3, 4, 5, 6]) {
      return [styles.imageAlone];
    } else {
      return [styles.imageWithBanner];
    }
  };

  return (
    <TouchableOpacity
      style={setStyle(itemData.id)}
      onPress={() => handleTry(itemData.id)}>
      <View>
        <Image
          source={require('../assets/abc.png')}
          resizeMode="contain"
          style={setLayout(itemId)}
        />
        <Text style={styles.title}>
          {itemData.imagem} id: {itemData.id}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 10,
    flex: 1,
    alignItems: 'center',
    marginVertical: 6,
    marginHorizontal: 6,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },

  imageWithBanner: {
    height: 60,
    width: 60,
    marginHorizontal: 0,
  },

  imageAlone: {
    height: 100,
    width: 100,
    marginHorizontal: 0,
  },

  itemSuccess: {
    borderWidth: 5,
    borderColor: '#00FF00',
  },

  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#a1a1a1',
    maxWidth: 250,
    flexGrow: 1,
  },
});

export default MultipleChoiceItem;
