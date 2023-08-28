import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from "./src/routes/index"
import Home from './src/screens/Home';





export default function App() {
  return (
    <NavigationContainer>
      <Home/>
    </NavigationContainer>
  );
}
