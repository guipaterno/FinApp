import React, { useState } from "react";
import styles from "../styles/styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { FlatList,  SafeAreaView,  Text,  View, TouchableOpacity} from 'react-native';
import {Octicons } from "@expo/vector-icons";



type ItemSaldoTotal = {
    id: string;
    title: string;
    icon:any;
    value:string;
  };
  
  const SaldoTotal: ItemSaldoTotal[] = [
    {
      id: '1',
      title: 'Nubank',
      icon: "credit-card",
      value:"2010,14",
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
      value:"10000,73",
  
    },
  ];
  
  type ItemProps = {
    item: ItemSaldoTotal;
    
  };
  
  const totalValue = SaldoTotal.reduce((accumulator, currentItem) => {
    const itemValue = parseFloat(currentItem.value.replace(',', '.'));
    return accumulator + itemValue;
  }, 0);
  

const Container = ()=>{
    const [showSaldo, setShowSaldo] = useState(false);
    
   
    return(
    <SafeAreaView style={styles.viewContainer}> 
      <Text style={styles.textContainerSaldo}>Saldo total</Text>
        <View style={styles.viewSaldo}>

        {showSaldo ? (
             <Text style={styles.textContainerValor}>R${totalValue.toFixed(2)} </Text>
        ):(
            <Text style={styles.textContainerValor}>R$ ****** </Text>
        )}
            <TouchableOpacity style={styles.iconeValor} onPress={() => setShowSaldo(!showSaldo)}>
            {showSaldo ?(

                <MaterialCommunityIcons name="currency-usd-off" style={styles.iconeValor} />
            ): (
                <MaterialCommunityIcons name="currency-usd" style={styles.iconeValor} />
            )}
            </TouchableOpacity>

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
          data={SaldoTotal}
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