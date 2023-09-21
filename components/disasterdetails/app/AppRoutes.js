import React from 'react';
import { Stack } from 'expo-router';
import Home from './index';
import Donate from '../components/disasterdetails/donate/Donate';  

const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Donate" component={Donate} />
    </Stack.Navigator>
  );
}

export default AppRoutes;