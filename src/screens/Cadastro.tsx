import React from "react";
import { Text, Image, View, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Botao from "../components/Botao";
import Input from "../components/Input";
import styles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

import { useState } from "react";
import InputSenha from "../components/InputSenha";


/* 
VERIFICAR COMO FAZ A TIPAGEM PARA NÃO DAR ERRO NO LOGIN
type PropsCadastro = {
    navigation:any;
   
}
*/
const Cadastro = ()=>{
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nomeError, setNomeError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [senhaError, setSenhaError] = useState('');
  
  
  const navigation = useNavigation();
  
  const clicar = ()=>{
    
        if (nome.trim() === '') {
          setNomeError('*Preencha o campo "NOME"');
          return;
        }
        if (email.trim() === '') {
          setEmailError('*Preencha o campo "E-mail"');
          return;
        }
          if (senha.trim() === '') {
            setSenhaError('*Preencha o campo "Senha"');
            return;
          }
          
          
          
          alert ("Conta criada com sucesso!")
          navigation.navigate("Login");
        } ;


    

    const clickLogin = ()=>{
        navigation.navigate("Login");
    }

    
    
    
    return(
        <SafeAreaView style={styles.safeArea}>
           
            <Image
             source={require('../images/logo.png')}
             style={styles.imagem}
             />
        
        <View>

        <Text style={styles.text1}>Crie sua conta</Text>
        </View>


        <View style={styles.textArea}>
            <Text style={styles.text2}> Já possui uma conta?</Text>
            <TouchableOpacity>
             <Text style={styles.textLink}
             onPress={clickLogin}
             >Fazer login </Text>    
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
         <Input 
            labelInput="Email"
            labelPlaceholder="Digite seu email"
            value={email}
            onChangeText={(text) => {
          setEmail(text);
          setEmailError('');
        }}
        error={emailError}
            
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

        <Botao labelButton="Criar conta" onpress={clicar}/>
      
      
       </SafeAreaView>
    )
};


export default Cadastro;