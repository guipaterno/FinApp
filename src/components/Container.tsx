import React from "react";
import styles from "../styles/styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";
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
      value:"200,14",
    },
    {
      id: '2',
      title: 'C6 Bank',
      icon:"credit-card",
      value:"350,20",
  
    },
    {
      id: '3',
      title: 'Itau',
      icon:"credit-card",
      value:"1000,73",
  
    },
  ];
  
  type ItemProps = {
    item: ItemData;
    
  };
  
  const totalValue = DATA.reduce((accumulator, currentItem) => {
    const itemValue = parseFloat(currentItem.value.replace(',', '.'));
    return accumulator + itemValue;
  }, 0);
  


const Container = ()=>{

    
    return(
    <SafeAreaView style={styles.viewContainer}> 
      <Text style={styles.textContainerSaldo}>Saldo total</Text>
        <View style={styles.viewSaldo}>
            <Text style={styles.textContainerValor}>R${totalValue.toFixed(2)} </Text>
            <MaterialCommunityIcons name="currency-usd-off" style={styles.iconeValor} />
        </View>

        <View>
            <Text style={styles.textContas}>Minhas Contas</Text>
        </View>

        <Banner/>
       
    </SafeAreaView>
    
    )
}



  const Item = ({item}: ItemProps) => (
  
    
    <View  style={styles.principalContainer}>
  
      <Octicons name={item.icon} style={styles.iconeCartao} />
      <Text style={styles.textBanco}>{item.title}</Text>
  
      <View style={styles.viewBancoSaldo}>
        <Text style={styles.textValorSaldo}>R${parseFloat(item.value.replace(',', '.')).toFixed(2)}</Text>
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

export default Container;