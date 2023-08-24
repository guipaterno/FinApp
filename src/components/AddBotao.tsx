import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../styles/styles";



const AddBotao = ()=>{
    return(
        <TouchableOpacity style={styles.buttonAdd} >
        <Text style={styles.btnAdd}>+</Text>
        </TouchableOpacity>
    )
}

export default AddBotao;