import React, {useState} from 'react';
import {StyleSheet, View, FlatList, ToastAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import TopBar from '../components/TopBar';
import MultipleChoiceItem from '../components/MultipleChoiceItem';
import {Audio} from  'expo-av'

const OneToFive = ({route}) => {
  const navigation = useNavigation();

  const [itemData, itemId] = route.params;
  const [correct, setCorrect] = useState([]);
  const [roundNumber, setRoundNumber] = useState(0);
  const round = itemData.rounds[roundNumber];
  
  const getSound = path => {
    switch(path) {
      case '../assets/sounds/intro.m4a' : return require("../assets/sounds/intro.m4a")
      case '../assets/sounds/ok.m4a' : return require("../assets/sounds/ok.m4a")
      case '../assets/sounds/erro.m4a' : return require("../assets/sounds/erro.m4a")
    }
  }

  const sounds = {
    intro: getSound(itemData.intro),
    ok: getSound(itemData.ok),
    erro: getSound(itemData.erro),
  }

  const showToasty = () => {
    ToastAndroid.showWithGravity(
      'ERRRROOOU!',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
  };

  const handlePlaySound = async note => {
		const soundObject = new Audio.Sound()

		try {
			let source = sounds[note]
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

  const handleTry = id => {
    if (!round.correctAlternatives.includes(id)) {
      handlePlaySound('erro');
      return showToasty();
    }
    setCorrect(correct =>
      correct.includes(id) ? correct : correct.concat(id),
    );
    handlePlaySound('ok');
  };

  const endRound = () => {
    if (roundNumber < itemData.rounds.length - 1) {
      setTimeout(() => {
        setCorrect([]);
        setRoundNumber(roundNumber + 1);
      }, 1500);
    }
    endUnit();
  };

  const endUnit = () => {
    if (roundNumber === itemData.rounds.length - 1) {
      setTimeout(() => {
        navigation.navigate('Menu');
      }, 1500);
    }
  };

  return (
    <View>
      <TopBar />
      <FlatList
        style={styles.list}
        numColumns={2}
        data={round.alternatives}
        keyExtractor={alternative => alternative.id}
        renderItem={({item}) => {
          return (
            <MultipleChoiceItem
              itemId={itemId}
              itemData={item}
              handleTry={handleTry}
              markedCorrect={correct}
              endRound={endRound}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 60,
    paddingHorizontal: 20,
  },
});

export default OneToFive;
