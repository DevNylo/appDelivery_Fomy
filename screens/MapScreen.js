import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { SearchBar } from 'react-native-elements';
import MapView from 'react-native-maps';

const MapScreen = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Buscar:', searchText);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.5505,
          longitude: -46.6333,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <SearchBar
        placeholder="Digite o nome do restaurante..."
        onChangeText={(text) => setSearchText(text)}
        onSubmitEditing={handleSearch}
        value={searchText}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  searchBarContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  searchBarInputContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
});

export default MapScreen;
