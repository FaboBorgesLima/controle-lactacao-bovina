import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Rebanho from "./src/screens/Rebanho/Rebanho";
import AddAnimal from "./src/screens/Rebanho/AddAnimal";
import EditarAnimal from "./src/screens/Rebanho/EditarAnimal";
import Producao from "./src/screens/Producao/Producao";
import AddProducao from "./src/screens/Producao/AddProducao";
import EditarProducao from "./src/screens/Producao/EditarProducao";
import { AppColors, Typography } from "./src/assets";
import { FONT_SIZE } from "./src/assets/Sizes";

type RootSackParamList = {
  Home:undefined,
  Rebanho:undefined,
  AddAnimal:undefined,
  EditarAnimal:undefined,
  Producao:undefined,
  AddProducao:undefined,
  EditarProducao:undefined
}

declare global {
  namespace ReactNavigation {
      interface RootParamList extends RootSackParamList {}
  }
}

const RootStack = createNativeStackNavigator<RootSackParamList>();

const App = ():JSX.Element => {

  return (
    <NavigationContainer>
      <RootStack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor:AppColors.background.primary,
          },
          headerTitleStyle: {
            fontSize: FONT_SIZE * 1.5,
            color: AppColors.font.primary,
            fontWeight:"bold"
          },
          headerTitleAlign: "center",
          headerTintColor: AppColors.font.primary,
        }}
        >
        <RootStack.Screen name="Home" component={Home}/>
        <RootStack.Screen name="Rebanho" component={Rebanho}/>
        <RootStack.Screen name="AddAnimal" component={AddAnimal}/>
        <RootStack.Screen name="EditarAnimal" component={EditarAnimal}/>
        <RootStack.Screen name="Producao" component={Producao}/>
        <RootStack.Screen name="AddProducao" component={AddProducao}/>
        <RootStack.Screen name="EditarProducao" component={EditarProducao}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
export default App;