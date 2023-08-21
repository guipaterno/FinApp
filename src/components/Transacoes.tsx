import React from "react";
import { View, Text} from "react-native";
import styles from "../styles/styles";
import { MaterialIcons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Calendario from "./Calendario";
import Movimentacao from "./Movimentacao";


const Transacoes = ()=>{
    return(
        <View style={styles.principalTransacoes}>
            <View style={styles.containerTransacoes}>
                    <MaterialCommunityIcons style={styles.iconTransacoes} name="bank-transfer"  />
                    <Text style={styles.textTransacoes}>Transações</Text>
                    <MaterialIcons style={styles.iconTransacoes} name="keyboard-arrow-down"  />
                    <View style={styles.containerFilter}>
                     <AntDesign style={styles.iconFilter} name="filter" />
              
                    </View>
                
            </View>
        <Calendario/>
        <Movimentacao/>
        
           
        </View>

    )
}

export default Transacoes;