import {createNativeStackNavigator} from "@react-navigation/native-stack";


import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Home from "../screens/Home"

const Stack = createNativeStackNavigator();



const Routes = ()=>{
    return(
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}> 
            <Stack.Screen 
            name="Login"
            component={Login}
            />

            <Stack.Screen 
            name="Cadastro"
            component={Cadastro}
            />

            <Stack.Screen 
            name="Home"
            component={Home}
            />
   
        </Stack.Navigator>
    )
};


export default Routes;
