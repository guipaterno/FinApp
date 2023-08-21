import React from "react";
import { TouchableOpacity, View, Text} from "react-native";
import styles from "../styles/styles";
import { Octicons } from '@expo/vector-icons';




const Movimentacao = ()=>{
    return(

    <View style={styles.principalrMovimentacao}>
        <View style={styles.containerMovimentacao}>

    <Octicons name="credit-card" size={18} color="black" />

     {/* transformar com componente dinamico */}
        
        <View style={styles.containerLancamento}>
        <Text style={styles.textMovimentacao}>Salário</Text>
        <Text style={styles.textData}>20/05/2023</Text>
        
        </View>

        <Text style={styles.textMovValor}>+R$2.500,00</Text>

        </View>
        <View style={styles.containerMovimentacao}>

    <Octicons name="credit-card" size={18} color="black" />

     {/* transformar com componente dinamico */}
        <View style={styles.containerLancamento}>
        <Text style={styles.textMovimentacao}>Alimentação</Text>
        <Text style={styles.textData}>21/05/2023</Text>
        
        </View>

        <Text style={styles.textMovValor2}>-R$123,00</Text>

        </View>
        <TouchableOpacity style={styles.buttonAdd} >
        <Text style={styles.btnAdd}>+</Text>
        </TouchableOpacity>
    </View>
   
    )
}

export default Movimentacao;