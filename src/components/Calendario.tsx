import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import styles from "../styles/styles";
import {EvilIcons } from '@expo/vector-icons';




const Calendario = ()=>{
    return(
        <View style={styles.principalCalendario}>
        
         <EvilIcons style={styles.iconCalendario} name="chevron-left" size={24}  />
         <TouchableOpacity style={styles.buttonMes} >
            
        <Text style={styles.btnTextMes}>Abr</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMesSelect} >
        <Text style={styles.btnTextMes}>Mai</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMes} >
        <Text style={styles.btnTextMes}>Jun</Text>
        </TouchableOpacity>
        <EvilIcons style={styles.iconCalendario} name="chevron-right" size={24}  />
         
           
        </View>

    )
}

export default Calendario;