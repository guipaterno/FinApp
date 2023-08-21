import React from "react";
import { TextInput, Text,View, KeyboardAvoidingView } from "react-native";
import styles from "../styles/styles";

type PropsLabel = {
    labelInput:string;
    labelPlaceholder:string;
    value:string;
    onChangeText:(text:any)=>void;
    error:string;
  
};


const InputSenha = ({labelInput, labelPlaceholder, value, onChangeText, error}:PropsLabel)=>{
    return(
        
        <View style={styles.viewArea}>
            <Text style={styles.text3}>{labelInput}</Text>
            <TextInput style={[styles.input, error ? styles.inputError : null]} 
            placeholder={labelPlaceholder} 
            placeholderTextColor={"#868383"}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={true}
                                 
        />
         {error ? <Text style={styles.errorText}>{error}</Text> : null}

        </View>
       
    )
}

export default InputSenha;

