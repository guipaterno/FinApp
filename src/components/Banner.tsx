import React from "react";
import { View, Text, FlatList,SafeAreaView, Dimensions} from "react-native";
import styles from "../styles/styles";
import {Octicons } from "@expo/vector-icons"
import FlatCount from "./FlatCount";






const Banner = ()=>{
    return(

        <FlatCount/>

    )
}

export default Banner;



/*





const Banner = ()=>{
    return(

        
        <View style={styles.principalContainer}>
            <Octicons name="credit-card" style={styles.iconeCartao} />
            <Text style={styles.textBanco}>Nubank</Text>


            <View style={styles.viewBancoSaldo}>
                <Text style={styles.textValorSaldo}>R$123,00</Text>
                <Text style={styles.textSaldo}>Saldo atual</Text>
            </View>

           


        </View>

        

    )
}

export default Banner;

*/