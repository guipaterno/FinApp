import React from 'react';
import styles from '../styles/styles';
import { FlatList,  SafeAreaView,  Text,  View} from 'react-native';
import {Octicons } from "@expo/vector-icons";

type ItemData = {
  id: string;
  title: string;
  icon:any;
  value:string;
};

const DATA: ItemData[] = [
  {
    id: '1',
    title: 'Nubank',
    icon: "credit-card",
    value:"200,00",
  },
  {

    id: '2',
    title: 'C6 Bank',
    icon:"credit-card",
    value:"350,00",

  },
  {
    id: '3',
    title: 'Itau',
    icon:"credit-card",
    value:"1000,00",

  },
];

type ItemProps = {
  item: ItemData;
  
};

const totalValue = DATA.reduce((accumulator, currentItem) => {
  const itemValue = parseFloat(currentItem.value.replace(',', '.'));
  return accumulator + itemValue;
}, 0);

const Item = ({item}: ItemProps) => (

  
  <View  style={styles.principalContainer}>

    
    <Octicons name={item.icon} style={styles.iconeCartao} />
    <Text style={styles.textBanco}>{item.title}</Text>

    <View style={styles.viewBancoSaldo}>
      <Text style={styles.textValorSaldo}>R${parseFloat(item.value.replace(',', '.'))}</Text>
      <Text style={styles.textSaldo}>Saldo atual</Text>
    </View>
  </View>
);


const Banner = () => {

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


export default Banner;