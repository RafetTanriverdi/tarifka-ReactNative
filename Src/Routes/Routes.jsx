import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesPage from "../Pages/CategoriesPage/CategoriesPage";
import FoodsPage from "../Pages/FoodsPage/FoodsPage";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";

const Stack = createNativeStackNavigator();
export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoriesPage}/>
        <Stack.Screen name="Foods" component={FoodsPage} 
         options={({ route }) => ({
          title: route.params.categoryName,
        })}
        />
        <Stack.Screen
          name="Details"
          component={DetailsPage}
          options={({ route }) => ({
            title: route.params.name,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
