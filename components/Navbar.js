import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ReceitasScreen from '../screens/ReceitasScreen';
import RestaurantesScreen from '../screens/RestaurantesScreen';
import SupportScreen from '../screens/SupportScreen';
import InicioScreen from '../screens/InicioScreen';
import MapScreen from '../screens/MapScreen';

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
          component={InicioScreen}
          options={{
            tabBarLabel: 'INÍCIO',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="MAPA"
          component={MapScreen}
          options={{
            tabBarLabel: 'MAPA',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="map" color={color} size={size} />
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
          name="SUPORTE"
          component={SupportScreen}
          options={{
            tabBarLabel: 'SUPORTE',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="help-buoy" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Navbar;