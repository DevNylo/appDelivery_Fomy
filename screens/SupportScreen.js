import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';

const SupportScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5 name="headset" style={styles.headerIcon} />
        <Text style={styles.title}>Precisa de Ajuda?</Text>
      </View>

      <TextInput
        label="Seu nome"
        mode="outlined"
        left={<TextInput.Icon name={() => <FontAwesome5 name="user" style={styles.icon} />} />}
        style={styles.input}
      />

      <TextInput
        label="Seu e-mail"
        mode="outlined"
        left={<TextInput.Icon name={() => <FontAwesome5 name="envelope" style={styles.icon} />} />}
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        label="Digite sua mensagem"
        mode="outlined"
        left={<TextInput.Icon name={() => <FontAwesome5 name="comment" style={styles.icon} />} />}
        multiline
        numberOfLines={4}
        style={styles.messageInput} 
      />

      <Button
        mode="contained"
        icon={() => <FontAwesome5 name="paper-plane" style={styles.buttonIcon} />}
        style={styles.button}
        labelStyle={styles.buttonLabel}
      >
        Enviar Mensagem
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    elevation: 3,
    borderRadius: 10,
    margin: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  headerIcon: {
    fontSize: 30,
    color: 'orangered',
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  icon: {
    fontSize: 20,
    color: '#777777',
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },
  messageInput: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
    height: 100,
  },
  button: {
    backgroundColor: 'orangered',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonLabel: {
    color: '#ffffff',
  },
  buttonIcon: {
    fontSize: 20,
    color: '#ffffff',
    marginRight: 10,
  },
});

export default SupportScreen;
