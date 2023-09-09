import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import {AddAnimal, EditarAnimal, Rebanho} from "./src/screens/Rebanho";
import { AppColors } from "./src/assets";
import { FONT_SIZE } from "./src/assets/Sizes";
import { RealmProvider, Realm } from "@realm/react";
import { Lote,Vaca } from "./src/realm";
import { AddProducao, EditarProducao, Producao } from "./src/screens/Producao";

export type RootStackParamList = {
  Home:undefined,
  Rebanho:undefined,
  AddAnimal:undefined,
  EditarAnimal:{name:string},
  Producao:undefined,
  AddProducao:undefined,
  EditarProducao:undefined
}

declare global {
  namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
  }
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = ():JSX.Element => {

  return (
    <NavigationContainer>
      <RealmProvider 
      schema={[Lote,Vaca]}
      deleteRealmIfMigrationNeeded={true}>
        <RootStack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor:AppColors.background.primary,
            },
            headerTitleStyle: {
              fontSize: FONT_SIZE * 1.2,
              color: AppColors.font.primary,
              fontWeight:"bold",
            },
            headerTitleAlign: "center",
            headerTintColor: AppColors.font.primary,
          }}
          >
          <RootStack.Screen name="Home" component={Home}/>
          <RootStack.Screen name="Rebanho" component={Rebanho}/>
          <RootStack.Screen name="AddAnimal" component={AddAnimal} options={{ title:"Adicionar Animal"}}/>
          <RootStack.Screen name="EditarAnimal" component={EditarAnimal} options={{ title:"Editar Animal"}}/>
          <RootStack.Screen name="Producao" component={Producao}/>
          <RootStack.Screen name="AddProducao" component={AddProducao} options={{ title:"Adicionar Produção"}}/>
          <RootStack.Screen name="EditarProducao" component={EditarProducao} options={{ title:"Editar Produção"}}/>
        </RootStack.Navigator>
      </RealmProvider>
    </NavigationContainer>
  );
}
export default App;