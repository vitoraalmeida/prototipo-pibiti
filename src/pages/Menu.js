import React from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';
import MenuItem from '../components/MenuItem';
import unitsData from '../db/unitsData.json';

const Menu = () => {
  return (
    <ScrollView style={styles.container}>
      {/* scrollview permite que a logo de cima também suba ao fazer a rolagem. */}

      <Image
        source={require('../assets/abc.png')}
        resizeMode="contain"
        style={styles.logo}
      />

      <MenuItem itemData={unitsData.units[0]} />
      <MenuItem itemData={unitsData.units[1]} />
      <MenuItem itemData={unitsData.units[2]} />
      <MenuItem itemData={unitsData.units[3]} />
      <MenuItem itemData={unitsData.units[4]} />
      <MenuItem itemData={unitsData.units[5]} />
      <MenuItem itemData={unitsData.units[6]} />
      <MenuItem itemData={unitsData.units[7]} />
      <MenuItem itemData={unitsData.units[8]} />
      <MenuItem itemData={unitsData.units[9]} />
      <MenuItem itemData={unitsData.units[10]} />

      {/* Foi feito assim na mão porque se usar a flatlist junto com scrollview dá problema, pois, aparentemente, ela própria utiliza um scrollview na implementação. Comente acima e descomente abaixo pra testar. */}

      {/* <FlatList
        style={styles.list}
        data={unitsData.units}
        renderItem={({item}) => (
          <MenuItem itemData={item}/>
        )}
      /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    backgroundColor: '#8545de',
  },
  logo: {
    height: 150,
    width: 150,
    marginVertical: 20,
    alignSelf: 'center',
  },
});

export default Menu;
