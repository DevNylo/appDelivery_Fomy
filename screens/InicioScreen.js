import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const InicioScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/images/home-top-1.jpg')}
        style={styles.imagem}
      />
      <View style={styles.overlay}>
        <View style={styles.legendaContainer}>
          <Text style={styles.legendaTexto1}>FAST FOOD</Text>
          <Text style={styles.legendaTexto2}>ORGÂNICA, FÁCIL E SAUDÁVEL</Text>
        </View>
        <SearchBar
          placeholder="Pesquisar..."
          lightTheme
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.inputContainer}
        />
      </View>
      <View style={styles.barraLaranja} />
      <Text style={styles.comoFunciona}>COMO FUNCIONA</Text>
      <View style={styles.secaoHorizontal}>
        <View style={styles.item}>
          <Icon name="silverware-fork-knife" size={50} color="orangered" />
          <Text style={styles.descricao}>Escolha um restaurante</Text>
        </View>

        <View style={styles.item}>
          <Icon name="food-fork-drink" size={50} color="orangered" />
          <Text style={styles.descricao}>Escolha um prato super gostoso!</Text>
        </View>

        <View style={styles.item}>
          <Icon name="truck-delivery" size={50} color="orangered" />
          <Text style={styles.descricao}>Retirada ou entrega</Text>
        </View>
      </View>
      <Image
        source={require('../assets/images/banner.jpg')}
        style={styles.imagemBanner}
      />
      <View style={styles.overlayBanner}>
        <Text style={styles.textoCentralizado}>
          BASTA FAZER O PEDIDO E ENTREGAREMOS A VOCÊ
        </Text>
        <TouchableOpacity>
          <View style={styles.botaoPecaAgora}>
            <Text style={{ color: 'white' }}>PEÇA AGORA</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.comoFunciona}>RESTAURANTES EM DESTAQUE</Text>

      {/* Sua imagem e informações adicionadas */}
        <View style={styles.destaqueContainer}>
          <Image
            source={require('../assets/images/listing-logo03.png')}
            style={styles.imagemDestaque}
          />
          <View style={styles.textoDestaqueContainer}>
            <Text style={styles.tituloDestaque}>ALIMENTOS NATURAIS SAUDÁVEIS</Text>
            <Text style={styles.paragrafoDestaque}>RESTAURANTE COM ALIMENTOS SAUDÁVEIS NA SUA REGIÃO</Text>
          </View>
        </View>
        <View style={styles.destaqueContainer}>
          <Image
            source={require('../assets/images/fb_masonary_7.jpg')}
            style={styles.imagemDestaque}
          />
          <View style={styles.textoDestaqueContainer}>
            <Text style={styles.tituloDestaque}>MASNARY</Text>
            <Text style={styles.paragrafoDestaque}>RESTAURANTE COM HAMBURGUER E FAST FOODS DA SUA ESCOLHA</Text>
          </View>
        </View>
        <View style={styles.destaqueContainer}>
          <Image
            source={require('../assets/images/fb_masonary_10.jpg')}
            style={styles.imagemDestaque}
          />
          <View style={styles.textoDestaqueContainer}>
            <Text style={styles.tituloDestaque}>CHULAS</Text>
            <Text style={styles.paragrafoDestaque}>ESPETINHOS DE FRANGO, CARNE E VEGETAIS DELICIOSOS</Text>
          </View>
        </View>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20
  },
  imagem: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 60,
  },
  searchBarContainer: {
    width: '80%',
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  inputContainer: {
    backgroundColor: '#e1e1e1',
  },
  barraLaranja: {
    backgroundColor: 'orangered',
    height: 40,
    width: '100%',
  },
  comoFunciona: {
    paddingTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0E0214',
  },
  secaoHorizontal: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  item: {
    flex: 1,
    alignItems: 'center',
  },
  descricao: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    flexWrap: 'wrap',
    minHeight: 40,
  },
  legendaContainer: {
    alignItems: 'center',
  },
  legendaTexto1: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  legendaTexto2: {
    color: 'white',
    fontSize: 16,
  },
  imagemBanner: {
    width: '100%',
    height: 200,
    marginTop: 30,
    resizeMode: 'cover',
  },
  overlayBanner: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textoCentralizado: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
      position: 'absolute',
      top: '35%',  // Posição vertical centralizada
      transform: [{ translateY: -25 }],  // Ajuste fino para centralizar
    },
    botaoPecaAgora: {
      backgroundColor: 'orange',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: -200,  // Ajuste a margem superior conforme necessário
    },
     destaqueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#fff',
        padding:20,
      },
      imagemDestaque: {
        width: '50%', // Ajuste conforme necessário
        height: 200,   // Ajuste conforme necessário
        resizeMode: 'cover',
      },
      textoDestaqueContainer: {
        marginLeft: 20,
        flex: 1,
      },
      tituloDestaque: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0E0214',
      },
      paragrafoDestaque: {
        fontSize: 16,
        marginTop: 10,
        color: '#0E0214',
      },
});

export default InicioScreen;
