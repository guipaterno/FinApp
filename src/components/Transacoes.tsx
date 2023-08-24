import React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity, Modal} from "react-native";
import styles from "../styles/styles";
import { MaterialIcons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Calendario from "./Calendario";
import Movimentacao from "./Movimentacao";
import AddBotao from "./AddBotao";
import ModalTransacao  from "../Modal/ModalTransacao";




const Transacoes = ()=>{
    const [transacoesModal, setTransacoesModal] = useState(false);

    return(
        <View style={styles.principalTransacoes}>
            <View style={styles.containerTransacoes}>
                    <MaterialCommunityIcons style={styles.iconTransacoes} name="bank-transfer"  />
                    <Text style={styles.textTransacoes}>Transações</Text>
                    <TouchableOpacity onPress={()=> setTransacoesModal(true)}>
                    <MaterialIcons style={styles.iconTransacoes} name="keyboard-arrow-down"  />
                    </TouchableOpacity>
                    <Modal
                    visible={transacoesModal}
                    transparent={true}
                    onRequestClose={()=> setTransacoesModal(false)}
                    >
                        <ModalTransacao
                        handleClose={() => setTransacoesModal(false)}/>
                    </Modal>
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