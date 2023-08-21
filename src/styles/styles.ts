import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea:{
      flex: 1,
      backgroundColor: "#faf9f9",
      padding: 15,
          
     
  },

  
  input:{
      height: 45,
      fontSize: 14,
      color: '#111111',
      backgroundColor: "white",
      borderColor:"gray",
      borderWidth:1,
      borderRadius: 10,
      
      paddingLeft: 10,
      paddingRight: 10,
      
  },
  textArea:{
      flexDirection:"row",
      marginTop:12,
      justifyContent:"center",
      paddingBottom:12,
      

  },


  text1:{
      fontSize:19,
      fontWeight:"bold",
      textAlign:"center",
      paddingTop:10,   
      color:"#0f0f0f", 
  },
  text2:{
      fontSize:15,
      fontWeight:"normal",
      color:"#0f0f0f", 

        
  },


  textLink:{
      fontSize:15,
      color:"#159761",
      marginLeft:5,
     
      
  },
  
  text3:{
      fontSize:14,
      margin:3,
  },

  container:{
      backgroundColor: "#faf9f9",
      paddingTop:50,
  },

  imagem:{
      width:200,
      height:200,
      marginLeft:60,
      resizeMode:"center",

  },
  imagemHome:{
    width:130,
    height:100,
    
    resizeMode:"center",

},
  viewArea:{
    backgroundColor: "#faf9f9",
    paddingTop:8,
    margin:3,
    
},
button:{
  backgroundColor: "#159761",
  width:"auto",
  height:45,
  justifyContent:"center",
  alignItems:"center",
  borderRadius:15,
  marginTop:25,

},

textBtn:{
  color:"white",
  fontSize:15,
},
inputError:{
    height: 45,
      fontSize: 14,
      color: 'red',
      backgroundColor: "white",
      borderColor:"gray",
      borderWidth:1,
      borderRadius: 10,
      paddingLeft: 10,
      paddingRight: 10,

},

errorText:{
    color:"red",
    fontSize:11,
    margin:4,
    
},

buttonUser:{
  backgroundColor: "#e9fbf4",
  width:45,
  height:45,
  justifyContent:"center",
  alignItems:"center",
  borderRadius:50,
  alignSelf:"center"
  
},
btnTextUser:{
    color:"#0f0f0f",
},

viewUser:{
    backgroundColor:"#faf9f9",
    flexDirection:"row",
    justifyContent:"space-between",
},

viewContainer:{
    backgroundColor: "#159761",
    width:"auto",
    height:"auto",
    borderRadius:15,
},

textContainerSaldo:{
    color:"white",
    fontSize:13,
    paddingTop:5,
    marginTop:15,
    marginLeft:10,
},

viewSaldo:{
    flexDirection:"row",
    justifyContent:"flex-start",
    textAlign:"center",
    marginTop:3,
    
},
textContainerValor:{
    color:"white",
    fontWeight:"bold",
    fontSize:22,
    marginLeft:10,
    
    
},
iconeValor:{
    color:"white",
    fontSize:18,
    marginLeft:3,
    alignSelf:"center",
   
    
    
},
textContas:{
    color:"white",
    fontWeight:"bold",
    marginTop:30,
    marginLeft:10,
    marginBottom:12,
    fontSize:18,


},

principalContainer:{
    backgroundColor:"white",
    width:280,
    height:"auto",
    borderRadius:15,
    paddingLeft:12,
    marginLeft:10,
    marginBottom:12,
    paddingBottom:10,
   
},

iconeCartao:{
    color:"black",
    fontSize:18,
    paddingVertical:20,
    paddingLeft:5,  
      
},

textBanco:{
    color:"black",
    fontSize:16,
},

textValorSaldo:{
    color:"black",
    fontSize:16,

},

viewBancoSaldo:{
    paddingTop:45,
},

textSaldo:{
    color:"gray",
    fontSize:13,
    
},

principalTransacoes:{
    marginTop:20,
    marginLeft:2,
    backgroundColor:"#ddd5",
    width:"auto",
    height:320,
    borderRadius:8,
    
},
containerTransacoes:{
    flexDirection:"row",
    marginTop:18,
    justifyContent:"center"

    
},
iconTransacoes:{
    color:"black",
    fontSize:24,
    
       
},
textTransacoes:{
    fontSize:18,
    marginLeft:3,
    marginRight:10,

},

containerFilter:{
    width:150,
    flexDirection:"row",
    justifyContent:"flex-end",
   
},
iconFilter:{
    color:"black",
    fontSize:22,
},

principalCalendario:{
    marginTop:24,
    flexDirection:"row",
    justifyContent:"space-around"
    
    
},



buttonMes:{
    
    width:35,
    height:35,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,    
    alignSelf:"center"
    
  },

  buttonMesSelect:{
    backgroundColor: "white",
    width:35,
    height:35,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,    
    alignSelf:"center"
    
  },
  btnTextMes:{
      color:"#0f0f0f",
      fontSize:12,
  },

  iconCalendario:{
    
    color:"black",
    alignSelf:"center",
  },

  principalrMovimentacao:{
    width:"auto",
    height:"auto",
    flexDirection:"column",
    justifyContent:"center",
    paddingTop:10,
    margin:5
    
    
  },

  containerMovimentacao:{
    backgroundColor: "white",
    width:"auto",
    height:60,
    flexDirection:"row",    
    justifyContent:"space-between",
    alignItems:"center",
    borderRadius:10,
    marginVertical:2,
    margin:10,
    paddingHorizontal:10,    
    
  },

  containerLancamento:{
    flex:1,
    alignItems:"flex-start",
    marginLeft:15,
    width:100,
   
   
    
    
  },
  textMovimentacao:{
    color:"black",
    fontSize:13,
    fontWeight:"bold",
       

  },
  textData:{
    color:"black",
    fontSize:10,
  },

  textMovValor:{
    color:"green",
    fontSize:13,
    width:120,
    textAlign:"right"
  },

  textMovValor2:{
    color:"red",
    fontSize:13,
    textAlign:"right"
  },

  buttonAdd:{
    backgroundColor: "#159761",
    marginTop:10,
    marginBottom:-5,
    marginHorizontal:-5,
    width:35,
    height:35,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,    
    alignSelf:"flex-end"
  },
  btnAdd:{
    color:"white",

  },
})




export default styles;