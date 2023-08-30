import React from "react";
import {ScrollView, SafeAreaView, View} from "react-native";
import styles from "../styles/styles";
import Header from "../components/Header";
import Container from "../components/Container";
import Transacoes from "../components/Transacoes";
import AddBotao from "../components/AddBotao";


const Home = ()=>{

   
    return(
        <SafeAreaView style={styles.safeArea}>
            
        <Header/>     
        <Container/>

        
        <Transacoes/>
      
        </SafeAreaView>
    )
};

export default Home;