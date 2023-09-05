import React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity, Modal} from "react-native";
import styles from "../styles/styles";
import { MaterialIcons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Calendario from "./Calendario";
import Movimentacao from "./Movimentacao";
import AddBotao from "./AddBotao";
import ModalTransacao  from "../Modal/ModalTransacao";
import ModalFiltro from "../Modal/ModalFiltro";
import * as Animatable from "react-native-animatable"
import ModalFlatList from "../Modal/ModalTransacao";
import ModalFlatListFiltro from "../Modal/ModalFiltro";







const Transacoes = ()=>{
    const [transacoesModal, setTransacoesModal] = useState(false);
    const [filtroModal,setFiltroModal] = useState(false);

    return(
        <Animatable.View delay={800} animation="fadeInUp" style={styles.principalTransacoes}>
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
                        <ModalFlatList/>
                    </Modal>
                    <View style={styles.containerFilter}>

                    <TouchableOpacity onPress={()=>setFiltroModal(true)}>
                     <AntDesign style={styles.iconFilter} name="filter" />
                    </TouchableOpacity>
                    <Modal
                    visible={filtroModal}
                    transparent={true}
                    onRequestClose={()=> setFiltroModal(false)}
                    >
                        <ModalFlatListFiltro/>
                    </Modal>

                    </View>
                
            </View>
        <Calendario/>
        <Movimentacao/>
        <AddBotao/>
        
        
           
        </Animatable.View>

    )
}

export default Transacoes;