import React from "react";
import { View, Text, SafeAreaView} from "react-native";
import styles from "../styles/styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Banner from "./Banner";


type PropsContainer = {
    saldoTotal:string;
  
};


const Container = ({saldoTotal}:PropsContainer)=>{

    
    return(
    <SafeAreaView style={styles.viewContainer}> 
      <Text style={styles.textContainerSaldo}>Saldo total</Text>
        <View style={styles.viewSaldo}>
            <Text style={styles.textContainerValor}>R${saldoTotal} </Text>
            <MaterialCommunityIcons name="currency-usd-off" style={styles.iconeValor} />
        </View>

        <View>
            <Text style={styles.textContas}>Minhas Contas</Text>
        </View>
        <Banner/>
       
    </SafeAreaView>

    )
}

export default Container;