import React from 'react';
import { SafeAreaView, View, TouchableOpacity,Text } from 'react-native';

import styles from "../styles/styles";


type Props={
    handleCloseFiltro:()=>void;
}

const ModalFiltro = ({handleCloseFiltro}:Props) => {
  return (
    <SafeAreaView style={styles.modalContainer}>
        <TouchableOpacity style={{flex:1, zIndex:9}} onPress={handleCloseFiltro}></TouchableOpacity>
        <View style={styles.viewModal}>
        <Text style={styles.textTituloModal}>Filtro</Text>
        
             <TouchableOpacity
             style={styles.actionBtn}
             onPress={()=>{}}
             activeOpacity={0.8}
             >
                <Text style={styles.actionText}>Todos</Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={styles.actionBtn}
             onPress={()=>{}}
             activeOpacity={0.8}
              
              >
                <Text style={styles.actionText}>Salário</Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={styles.actionBtn}
             onPress={()=>{}}
             activeOpacity={0.8}
             >
                <Text style={styles.actionText}>Lazer</Text>
            </TouchableOpacity>

            <TouchableOpacity
             style={styles.actionBtn}
             onPress={()=>{}}
             activeOpacity={0.8}
             >
                <Text style={styles.actionText}>Alimentação</Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={styles.actionBtn}
             onPress={()=>{}}
             activeOpacity={0.8}
             >
                <Text style={styles.actionText}>Viagem</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

export default ModalFiltro;