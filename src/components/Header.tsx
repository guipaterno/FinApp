import React from "react";
import { View, TouchableOpacity, Image, Text} from "react-native";
import styles from "../styles/styles";

const Header = ()=>{
    return(
    <View style={styles.viewUser}> 
        <Image
        source={require('../images/logo.png')}
        style={styles.imagemHome}
        />
        <TouchableOpacity style={styles.buttonUser} >
        <Text style={styles.btnTextUser}>GP</Text>
        </TouchableOpacity>
    </View>

    )
}

export default Header;