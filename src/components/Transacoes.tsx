import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import styles from "../styles/styles";
import { MaterialIcons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Calendario from "./Calendario";
import Movimentacao from "./Movimentacao";

import AddBotao from "./AddBotao";

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
        <AddBotao/>
        
           
        </View>

    )
}

export default Transacoes;