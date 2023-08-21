import React from "react";
import { View, TouchableOpacity, Text, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Botao from "../components/Botao";
import Input from "../components/Input";
import InputSenha from "../components/InputSenha";



const Login = ()=>{

  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [nomeError, setNomeError] = useState('');
  const [senhaError, setSenhaError] = useState('');
  
  
    const logar = ()=>{

        if (nome.trim() === '') {
            setNomeError('*Preencha o campo "NOME"');
            return;
          }
          if (senha.trim() === '') {
            setSenhaError('*Preencha o campo "Senha"');
            return;
          }

          navigation.navigate("Home");

    };
    const navigation = useNavigation();

    const clickCadastro = () =>{
        navigation.navigate("Cadastro");
    }

    
    return(
        <SafeAreaView style={styles.safeArea}>
           
            <Image
             source={require('../images/logo.png')}
             style={styles.imagem}
             />
        

        <Text style={styles.text1}>Entre em sua conta</Text>

        <View style={styles.textArea}>
            <Text style={styles.text2}> Novo por aqui?</Text>
            <TouchableOpacity>
             <Text style={styles.textLink} onPress={clickCadastro}>Crie uma conta </Text>    
            </TouchableOpacity>
        </View>
        

        <Input 
            labelInput="Nome" 
            labelPlaceholder="Digite seu nome"  
            value={nome}
             onChangeText={(text) => {
                setNome(text);
                setNomeError('');
            }}
             error={nomeError}
        />

        <InputSenha
            labelInput="Senha"
            labelPlaceholder="Digite sua senha"
            value={senha}
            

            
            onChangeText={(text) => {
          setSenha(text);
          setSenhaError('');
        }}
        error={senhaError}
            
            />

        <Botao labelButton="Entrar" onpress={logar}/>
        
      
       </SafeAreaView>
    )
};

export default Login;