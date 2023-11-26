import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RestaurantesScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { name: 'Vegano', icon: 'leaf-circle', color: 'green' },
    { name: 'Churrasco', icon: 'food-steak', color: 'brown' },
    { name: 'Lanches', icon: 'hamburger', color: 'orange' },
    { name: 'Asiática', icon: 'food-takeout-box', color: 'red' },
  ];

  const categoryData = {
    Vegano: [
      { title: 'Restaurante Vegano 1', image: require('../assets/restaurantes/vegano/1.png') },
      { title: 'Restaurante Vegano 2', image: require('../assets/restaurantes/vegano/2.png') },
      { title: 'Restaurante Vegano 3', image: require('../assets/restaurantes/vegano/3.png') },
      { title: 'Restaurante Vegano 4', image: require('../assets/restaurantes/vegano/4.png') },
      { title: 'Restaurante Vegano 5', image: require('../assets/restaurantes/vegano/5.png') },
      { title: 'Restaurante Vegano 6', image: require('../assets/restaurantes/vegano/6.png') },
      { title: 'Restaurante Vegano 7', image: require('../assets/restaurantes/vegano/7.png') },
      { title: 'Restaurante Vegano 8', image: require('../assets/restaurantes/vegano/8.png') },
      { title: 'Restaurante Vegano 9', image: require('../assets/restaurantes/vegano/9.png') },
      { title: 'Restaurante Vegano 10', image: require('../assets/restaurantes/vegano/10.png') },
      // Adicione mais itens conforme necessário
    ],
    Churrasco: [
      { title: 'Restaurante de Churrasco 1', image: require('../assets/restaurantes/churras/1.png') },
      { title: 'Restaurante de Churrasco 2', image: require('../assets/restaurantes/churras/2.png') },
      { title: 'Restaurante de Churrasco 3', image: require('../assets/restaurantes/churras/3.png') },
      { title: 'Restaurante de Churrasco 4', image: require('../assets/restaurantes/churras/4.png') },
      { title: 'Restaurante de Churrasco 5', image: require('../assets/restaurantes/churras/5.png') },
      { title: 'Restaurante de Churrasco 6', image: require('../assets/restaurantes/churras/6.png') },
      { title: 'Restaurante de Churrasco 7', image: require('../assets/restaurantes/churras/7.png') },
      { title: 'Restaurante de Churrasco 8', image: require('../assets/restaurantes/churras/8.png') },
      { title: 'Restaurante de Churrasco 9', image: require('../assets/restaurantes/churras/9.png') },
      { title: 'Restaurante de Churrasco 10', image: require('../assets/restaurantes/churras/10.png') },
      // Adicione mais itens conforme necessário
    ],
    Lanches: [
      { title: 'Lanchonete 1', image: require('../assets/restaurantes/lanche/1.png') },
      { title: 'Lanchonete 2', image: require('../assets/restaurantes/lanche/2.png') },
      { title: 'Lanchonete 3', image: require('../assets/restaurantes/lanche/3.png') },
      { title: 'Lanchonete 4', image: require('../assets/restaurantes/lanche/4.png') },
      { title: 'Lanchonete 5', image: require('../assets/restaurantes/lanche/5.png') },
      { title: 'Lanchonete 6', image: require('../assets/restaurantes/lanche/6.png') },
      { title: 'Lanchonete 7', image: require('../assets/restaurantes/lanche/7.png') },
      { title: 'Lanchonete 8', image: require('../assets/restaurantes/lanche/8.png') },
      { title: 'Lanchonete 9', image: require('../assets/restaurantes/lanche/9.png') },
      { title: 'Lanchonete 10', image: require('../assets/restaurantes/lanche/10.png') },
      // Adicione mais itens conforme necessário
    ],
    Asiática: [
      { title: 'Comida Asiática 1', image: require('../assets/restaurantes/asiatico/1.png') },
      { title: 'Comida Asiática 2', image: require('../assets/restaurantes/asiatico/2.png') },
      { title: 'Comida Asiática 3', image: require('../assets/restaurantes/asiatico/3.png') },
      { title: 'Comida Asiática 4', image: require('../assets/restaurantes/asiatico/4.png') },
      { title: 'Comida Asiática 5', image: require('../assets/restaurantes/asiatico/5.png') },
      { title: 'Comida Asiática 6', image: require('../assets/restaurantes/asiatico/6.png') },
      { title: 'Comida Asiática 7', image: require('../assets/restaurantes/asiatico/7.png') },
      { title: 'Comida Asiática 8', image: require('../assets/restaurantes/asiatico/8.png') },
      { title: 'Comida Asiática 9', image: require('../assets/restaurantes/asiatico/9.png') },
      { title: 'Comida Asiática 10', image: require('../assets/restaurantes/asiatico/10.png') },
      // Adicione mais itens conforme necessário
    ],
  };

  const handleIconPress = (category) => {
    setSelectedCategory(category);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={
        <>
          <Text style={styles.title}>RESTAURANTES NA REGIÃO</Text>
          <View style={styles.iconContainer}>
            {categories.map((category) => (
              <TouchableOpacity
                style={styles.iconWrapper}
                key={category.name}
                onPress={() => handleIconPress(category.name)}
              >
                <Icon
                  name={category.icon}
                  size={50}
                  color={category.color}
                  style={[styles.icon, styles.iconWithBorder]}
                />
                <Text style={[styles.iconText, styles.boldText]}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      }
      data={categoryData[selectedCategory]}
      keyExtractor={(item) => item.title}
      renderItem={renderItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  iconWrapper: {
    alignItems: 'center',
  },
  icon: {
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  iconWithBorder: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
  },
  iconText: {
    marginTop: 10,
    fontSize: 16,
  },
  boldText: {
    fontWeight: 'bold',
  },
  itemContainer: {
    alignItems: 'center',
    marginBottom: 20,
    flex: 1,
    marginVertical: 10,
  },
  itemImage: {
    width: '90%',
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
    marginTop: 10,
  },
  itemTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RestaurantesScreen;
