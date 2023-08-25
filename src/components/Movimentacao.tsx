import React from "react";
import { View, Text, FlatList} from "react-native";
import styles from "../styles/styles";
import { MaterialIcons } from '@expo/vector-icons';


type ItemMovConta = {
    id: string;
    movimentacao: string;
    icon:any;
    date:string;
    value:string;

  };
  
  const MovConta: ItemMovConta[] = [
    {
      id: '1',
      movimentacao: 'Sálario',
      icon: "credit-card",
      date:"12/01/2021",
      value:"200,00",
    },
    {
      
      id: '2',
      movimentacao: 'Cinema',
      icon:"movie",
      date:"12/01/2021",
      value:"-350,00",
  
    },
    {
      id: '3',
      movimentacao: 'Roupas',
      icon:"shopping-bag",
      date:"12/01/2021",
      value:"-1000,00",
  
    },
    {
      id: '4',
      movimentacao: 'Restaurante',
      icon:"restaurant",
      date:"12/01/2021",
      value:"-100,00",
  
    },
    {
      id: '5',
      movimentacao: 'Futebol',
      icon:"sports-soccer",
      date:"12/01/2021",
      value:"-50,00",
  
    },
  ];

  type ItemProps = {
    item: ItemMovConta;
    
  };





  const MovimentacaoConta = ({ item }: ItemProps) => {
    
    const isNegative = item.value.startsWith('-');
    const value = parseFloat(item.value);

  
    return (
      <View style={styles.principalrMovimentacao}>
        <View style={styles.containerMovimentacao}>
          <MaterialIcons name={item.icon} style={styles.iconeCartao} />
          <View style={styles.containerLancamento}>
            <Text style={styles.textMovimentacao}>{item.movimentacao}</Text>
            <Text style={styles.textData}>{item.date}</Text>
          </View>
          <Text style={isNegative ? styles.textMovValorNegative : styles.textMovValor}>
            R${value.toFixed(2)}
          </Text>
        </View>
        
      </View>
   
    )
}

const Movimentacao = () => {

    return (
        
      <FlatList style={styles.viewContainerMov} 
        data={MovConta}
        showsVerticalScrollIndicator={false}
        renderItem={MovimentacaoConta}
        keyExtractor={item => item.id}
        scrollEnabled        

      />
    
    );
  };

export default Movimentacao;


