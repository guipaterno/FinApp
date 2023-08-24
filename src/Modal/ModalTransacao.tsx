import React from 'react';
import { SafeAreaView, View, TouchableOpacity,Text } from 'react-native';

import styles from "../styles/styles";


type Props={
    handleClose:()=>void;
}

const ModalTransacao = ({handleClose}:Props) => {
  return (
    <SafeAreaView style={styles.modalContainer}>
        <TouchableOpacity style={{flex:1, zIndex:9}} onPress={handleClose}></TouchableOpacity>
        <View style={styles.viewModal}>
        <Text style={styles.textTituloModal}>Transações</Text>
            <TouchableOpacity
             style={styles.actionBtn}
             onPress={()=>{}}
             activeOpacity={0.8}
              
              >
                <Text style={styles.actionText}>Todas</Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={styles.actionBtn}
             onPress={()=>{}}
             activeOpacity={0.8}
             >
                <Text style={styles.actionText}>Receitas</Text>
            </TouchableOpacity>

            <TouchableOpacity
             style={styles.actionBtn}
             onPress={()=>{}}
             activeOpacity={0.8}
             >
                <Text style={styles.actionText}>Despesas</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

export default ModalTransacao;