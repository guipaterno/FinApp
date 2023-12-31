import { Platform, StyleSheet } from "react-native";
import THEME from "../theme/theme";


const styles = StyleSheet.create({
  safeArea:{
      flex: 1,
      backgroundColor: THEME.COLORS.BACKGROUND,
      paddingVertical: 10,
      paddingHorizontal:15,
      marginHorizontal:Platform.OS =="ios"? 15 : 10,
      marginVertical:5,



     
     
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
      color:THEME.COLORS.PRIMARIA,
      marginLeft:5,
     
      
  },
  
  text3:{
      fontSize:14,
      margin:3,
  },

  container:{
      backgroundColor:THEME.COLORS.BACKGROUND,
      paddingTop:50,
  },

  imagem:{
      width:200,
      height:200,
      marginLeft:60,
      resizeMode:"center",

  },
  imagemHome:{
    width:Platform.OS =="ios"? 100 : 130,
    height:Platform.OS =="ios"? 80 :100,
    
    resizeMode:"center",

},
  viewArea:{
    backgroundColor: THEME.COLORS.BACKGROUND,
    paddingTop:8,
    margin:3,
    
},
button:{
  backgroundColor: THEME.COLORS.PRIMARIA,
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
  width:Platform.OS =="ios"? 35 : 45,
  height:Platform.OS =="ios"? 35 : 45,
  justifyContent:"center",
  alignItems:"center",
  borderRadius:50,
  alignSelf:"center"
  
},
btnTextUser:{
    color:"#0f0f0f",
},

viewUser:{
    backgroundColor:THEME.COLORS.BACKGROUND,
    flexDirection:"row",
    justifyContent:"space-between",
    width:"auto",
    height:Platform.OS =="ios"? 65 : "auto",

    

},

viewContainer:{
    backgroundColor: THEME.COLORS.PRIMARIA,
    width:"auto",
    height:Platform.OS =="ios"? 220 : "auto",
    borderRadius:15,
},

viewContainerMov:{
  flex:1,
  backgroundColor: THEME.COLORS.PRIMARIA,
  width:"auto",
  height:Platform.OS =="ios"? 135 : "auto",

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
    marginTop: Platform.OS =="ios"? 15 : 30,
    marginLeft:10,
    marginBottom:12,
    fontSize:18,


},

principalContainer:{
    backgroundColor:"white",
    width:280,
    height:Platform.OS =="ios"? 100 : "auto",
    borderRadius:15,
    paddingLeft:12,
    marginLeft:10,
    marginBottom:12,
    paddingBottom:10,
   
},

iconeCartao:{
    color:"black",
    fontSize:18,
    paddingVertical:Platform.OS =="ios"? 5 :20,
    paddingLeft:5,  
      
},

textBanco:{
    color:"black",
   fontSize:Platform.OS =="ios"? 14 :16,
},

viewBancoSaldo:{
    paddingTop:Platform.OS =="ios"? 20 :45,
},
textValorSaldo:{
    color:"black",
    fontSize:Platform.OS =="ios"? 14 :16,

},
textSaldo:{
    color:"gray",
    fontSize:Platform.OS =="ios"? 11 :13,
    
},

principalTransacoes:{
    marginTop:20,
    marginLeft:2,
    backgroundColor:THEME.COLORS.SECUNDARIO,
    width:"auto",
    height:Platform.OS =="ios"? 320 : 310,
    borderRadius:8,
      
},
containerTransacoes:{
    flexDirection:"row",
    marginTop:Platform.OS =="ios"? 10 :18,
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
    justifyContent:"space-around",
    paddingBottom:Platform.OS =="ios"?5:2,
    
    
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
    paddingBottom:2,
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

  textMovValorNegative: {
    fontSize: 13,
    color: 'red',
  },

  textMovValor2:{
    color:"red",
    fontSize:13,
    textAlign:"right"
  },

  buttonAdd:{
    backgroundColor: THEME.COLORS.PRIMARIA,
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

  modalContainer:{
    alignContent:"center",
    backgroundColor:"white",
    opacity:0.8,
    width:"auto",
    height:120,
    justifyContent:"flex-end",
   
    
  },

  viewModal:{
    marginVertical: 5,
    marginLeft:35,
    marginRight:35,
    alignContent:"center",
    backgroundColor:THEME.COLORS.PRIMARIA,
    elevation:5,
    padding:20,
    width:"auto",
    height:100,
    borderRadius:10,
    shadowOpacity:0.50,
    shadowRadius:4,
   
  },

  viewContainerModal:{
    marginTop:Platform.OS =="ios"?280 : 350,
    flex:1,
    backgroundColor: "white",
    width:"auto",
    height:0,
    borderRadius:15,
    paddingTop:20,
  },

  textTituloModal:{
    fontSize:18,
    fontWeight:"bold",
    textAlign:"center",
    letterSpacing:1,
  },
  actionBtn:{
    zIndex:99,
    backgroundColor:"white",
    borderRadius:6,
    marginTop:8,
    padding:10,
    borderWidth:1,
    borderColor:"rgba(0,0,0,0.2)",
    shadowColor:"rgba(0,0,0,0.5)",
    elevation:5,
    shadowOffset:{
      width:0,
      height:2,
    },
    shadowOpacity:0.43,
    shadowRadius:4,
    
  },

  actionText:{
    textAlign:"center",
    fontSize:13,
    color:"black"

  },
})




export default styles;