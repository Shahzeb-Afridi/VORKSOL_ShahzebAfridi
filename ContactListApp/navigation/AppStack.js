import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ContactListScreen from '../screens/ContactListScreen';
import DetailedContactScreen from '../screens/DetailedContactScreen';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contact List Screen" component={ContactListScreen} />
      <Stack.Screen
        name="Detailed Contact Screen"
        component={DetailedContactScreen}
      />
    </Stack.Navigator>
  );
}
