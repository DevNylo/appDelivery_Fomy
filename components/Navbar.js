import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TelaInicial from '../screens/InicioScreen'; // Importe a nova tela
import NotificacoesScreen from '../screens/NotificacoesScreen';
import ReceitasScreen from '../screens/ReceitasScreen';
import RestaurantesScreen from '../screens/RestaurantesScreen';
import PedidosScreen from '../screens/PedidosScreen';
import { SearchBar } from 'react-native-elements';

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <>

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'orangered',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
        }}
      >
        <Tab.Screen
          name="INÍCIO"
          component={TelaInicial}
          options={{
            tabBarLabel: 'INÍCIO',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notificacoes"
          component={NotificacoesScreen}
          options={{
            tabBarLabel: 'NOTIFICAÇÕES',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="notifications" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Receitas"
          component={ReceitasScreen}
          options={{
            tabBarLabel: 'RECEITAS',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Restaurantes"
          component={RestaurantesScreen}
          options={{
            tabBarLabel: 'RESTAURANTES',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="restaurant" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Pedidos"
          component={PedidosScreen}
          options={{
            tabBarLabel: 'PEDIDOS',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Navbar;
