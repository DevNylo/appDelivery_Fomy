// Importe as bibliotecas necessárias
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Defina o componente InicioScreen
const PedidosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pedidos</Text>
    </View>
  );
};

// Estilos CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

// Exporte o componente
export default PedidosScreen;