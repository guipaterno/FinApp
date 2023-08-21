import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../styles/styles";

type PropsBotao ={
    labelButton:string;
    onpress:()=>void;
}


const Botao = ({labelButton, onpress}:PropsBotao)=>{
    return(
<TouchableOpacity
     style={styles.button}
     onPress={onpress}
>
    <Text
      style={styles.textBtn}>
      {labelButton}
    </Text>
</TouchableOpacity>
    )
}

export default Botao;



