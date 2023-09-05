import React from 'react';
import { SafeAreaView, View, TouchableOpacity,Text, FlatList } from 'react-native';

import styles from "../styles/styles";


type Props={
    handleClose:()=>void;
}
;

type ItemFiltro = {
  id: string;
  filtro: string;


};

const Filtro: ItemFiltro[] = [
  {
    id: '1',
    filtro: 'Todas',
    
  },
  {
    
    id: '2',
    filtro: 'Receita',
 
  },
  {
    id: '3',
    filtro: 'Despesas',
    
  },

 
];

type ItemProps = {
  item: ItemFiltro;
  
};

const ModalTransacao = ({item}:ItemProps) => {
  return (
    <>
    <SafeAreaView style={styles.modalContainer}>
      
        <TouchableOpacity style={{flex:1, zIndex:9}}></TouchableOpacity>
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


const ModalFlatList = () => {

  return (
      
    <FlatList style={styles.viewContainerModal} 
      data={Filtro}
      showsVerticalScrollIndicator={false}
      renderItem={ModalTransacao}
      keyExtractor={item => item.id}
      scrollEnabled        

    />
  
  );
};





export default ModalFlatList;