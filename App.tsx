import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import Routes from "./src/routes/index"
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import Home from './src/screens/Home';




export default function App() {
  return (
    <NavigationContainer>
      <Routes/>    
    </NavigationContainer>
  );
}
