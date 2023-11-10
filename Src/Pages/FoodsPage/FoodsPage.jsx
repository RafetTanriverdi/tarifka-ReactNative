import { View, Text, FlatList } from "react-native";
import React from "react";
import { UseFetch } from "../../Hooks/UseFetch";
import FoodsCard from "../../Components/FoodsCard/FoodsCard";
import LoadingComponent from "../../Components/Loading/LoadingComponent";
import ErrorComponent from "../../Components/Error/ErrorComponent";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;
const FoodsPage = ({ route, navigation }) => {
  const { categoryName } = route.params;
  const { data, error, loading } = UseFetch(
    apiUrl + `/filter.php?c=${categoryName}`
  );
  const foodData = data.meals;
  const onPress = (item) => {
    navigation.navigate("Details", { id: item.idMeal ,name:item.strMeal});
  };

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent content={error} />;
  const renderFoods = ({ item }) => <FoodsCard data={item} onPress={()=>onPress(item)} />;
  return (
    <View>
      <FlatList data={foodData} renderItem={renderFoods} numColumns={2} />
    </View>
  );
};

export default FoodsPage;
