import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

const data = [
  {
    id: '1',
    title: 'Bolo de Chocolate',
    description: 'Descrição do Item',
    image: 'https://assets.delirec.com/images%2FgNaGya9vprXFetPl28oFUWJ9KwG2%2Frecipe%2F51b1683c-64bb-4b9e-878e-3066c35fcb04-Bolo-de-cenoura--gallery-0',
    },
  {
    id: '2',
    title: 'Pudim de Leite',
    description: 'Descrição do Item',
    image: 'https://s2-receitas.glbimg.com/yuO2RUpUW1oaotQV4D5v7eNdjuQ=/810x456/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/K/m/TgAqRfTYuvHxg6qvtxOg/capa-para-homes-internas-1080x720-px16.png',
  },
  {
    id: '3',
    title: 'Panqueca',
    description: 'Descrição do Item',
    image: 'https://www.mariareceita.com.br/wp-content/uploads/2022/03/receita-panquecas-carne-moida.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1',
  },
  {
    id: '4',
    title: 'Mini Coxinha',
    description: 'Descrição do Item',
    image: 'https://guiadacozinha.com.br/wp-content/uploads/2020/06/coxinha-de-liquidificador.jpg',
    },
  {
      id: '5',
      title: 'Lasanha',
      description: 'Descrição do Item',
      image: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2021/05/03/766841085-escondidinho-de-frigideira-768x512.jpg',
    },
  {
      id: '6',
      title: 'Biscoito de Chocolate',
      description: 'Descrição do Item',
      image: 'https://www.sabornamesa.com.br/media/k2/items/cache/5671c3c7047948180bbdf6ffd0980214_XL.jpg',
    },
  {
      id: '7',
      title: 'Enroladinho',
      description: 'Descrição do Item',
      image: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/07/15/1992932943-receitasparacriancas-cachorroquente.jpg',
    },
  {
      id: '8',
      title: 'Bolinho de Queijo',
      description: 'Descrição do Item',
      image: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/07/15/1018774879-receitasparacriancas-paodequeijo.jpg',
    },
  {
      id: '9',
      title: 'Brigadeiro Caseiro',
      description: 'Descrição do Item',
      image: 'https://www.receitasagora.com.br/wp-content/uploads/2022/09/como-fazer-brigadeiro-sem-lactose-450x270.jpg',
    },
   {
       id: '10',
       title: 'Linguiça Toscana',
       description: 'Descrição do Item',
       image: 'https://uploads.metropoles.com/wp-content/uploads/2022/02/07112830/1ragu-linguica-toscana-mandioca-1.jpg',
     },

];

const ReceitasScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  const numColumns = 2;
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth / numColumns;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      numColumns={numColumns}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    width: '48%', // Ou use itemWidth se desejar uma largura mais específica
    alignItems: 'center', // Centraliza os itens horizontalmente
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    marginTop: 3,
    paddingBottom: 50,
  },
});

export default ReceitasScreen;
