import React from 'react';
import { SafeAreaView, View, TouchableOpacity,Text, FlatList } from 'react-native';

import styles from "../styles/styles";



type ItemFiltro = {
  id: string;
  filtro: string;


};

const FiltroMov: ItemFiltro[] = [
  {
    id: '10',
    filtro: 'Todas',
    
  },
  {
    
    id: '20',
    filtro: 'Alimentação',
 
  },
  {
    id: '30',
    filtro: 'Lazer',
    
  },
  
  {
    id: '40',
    filtro: 'Salário',
    
  },

  {
    id: '50',
    filtro: 'Cursos',
    
  },
  
 
];

type ItemProps2 = {
  item: ItemFiltro;
  
};

const ModalTransacaoFiltro = ({item}:ItemProps2) => {
  return (
    <>
    <SafeAreaView style={styles.modalContainer}>
      
        <TouchableOpacity style={{flex:1, zIndex:9}} onPress={()=>{}}></TouchableOpacity>
        <View style={styles.viewModal}>
            <TouchableOpacity
             style={styles.actionBtn}
             onPress={()=>{}}
             activeOpacity={0.8}
             
             >
                <Text style={styles.actionText}>{item.filtro}</Text>
            </TouchableOpacity>
            
        </View>
    </SafeAreaView>
                </>
  );
}


const ModalFlatListFiltro = () => {

  return (
      
    <FlatList style={styles.viewContainerModal} 
      data={FiltroMov}
      showsVerticalScrollIndicator={false}
      renderItem={ModalTransacaoFiltro}
      keyExtractor={item => item.id}
      scrollEnabled        

    />
  
  );
};

export default ModalFlatListFiltro;