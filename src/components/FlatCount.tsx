import React from 'react';
import styles from '../styles/styles';
import { FlatList,  SafeAreaView,  Text,  View} from 'react-native';
import {Octicons } from "@expo/vector-icons";



type ItemData = {
  id: string;
  title: string;
  icon:any;
};

const DATA: ItemData[] = [
  {
    id: '1',
    title: 'Nubank',
    icon: "credit-card",
  },
  {
    id: '2',
    title: 'C6 Bank',
    icon:"credit-card",

  },
  {
    id: '3',
    title: 'Itau',
    icon:"credit-card",

  },
];

type ItemProps = {
  item: ItemData;
  

};

const Item = ({item}: ItemProps) => (
  <View  style={styles.principalContainer}>
    <Octicons name={item.icon} style={styles.iconeCartao} />
    <Text style={styles.textBanco}>{item.title}</Text>

    <View style={styles.viewBancoSaldo}>
                <Text style={styles.textValorSaldo}>R$123,00</Text>
                <Text style={styles.textSaldo}>Saldo atual</Text>
            </View>
  </View>
);


const FlatCount = () => {

  return (
    <SafeAreaView style={styles.viewContainer}>
      <FlatList
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled        
        renderItem={Item}
        keyExtractor={item => item.id}
        
      />
    </SafeAreaView>
  );
};


export default FlatCount;