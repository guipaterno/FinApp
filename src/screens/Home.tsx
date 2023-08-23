import React from "react";
import {ScrollView} from "react-native";
import styles from "../styles/styles";
import Header from "../components/Header";
import Container from "../components/Container";
import Transacoes from "../components/Transacoes";


const Home = ()=>{

    return(
        <ScrollView style={styles.safeArea}>
            
        <Header/>     
        <Container saldoTotal="2.000,00"/>
        
        <Transacoes/>
            
        </ScrollView>
    )
};

export default Home;