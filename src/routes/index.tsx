import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { RoutesTypes } from "../@types/Routes";

import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Home from "../screens/Home"




const {Navigator, Screen} = createNativeStackNavigator<RoutesTypes>();



const Routes = ()=>{
    return(
        <Navigator initialRouteName="Login" screenOptions={{headerShown:false}}> 
            <Screen 
            name="Login"
            component={Login}
            />

            <Screen 
            name="Cadastro"
            component={Cadastro}
            />

            <Screen 
            name="Home"
            component={Home}
            />
   
        </Navigator>
    )
};



export default Routes;


