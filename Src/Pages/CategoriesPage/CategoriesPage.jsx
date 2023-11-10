import { View, Text, FlatList } from "react-native";
import React from "react";
import { UseFetch } from "../../Hooks/UseFetch";
import LoadingComponent from "../../Components/Loading/LoadingComponent";
import ErrorComponent from "../../Components/Error/ErrorComponent";
import CategoriesCard from "../../Components/CategoriesCard/CategoriesCard";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const CategoriesPage = ({ navigation }) => {
  const { data, error, loading } = UseFetch(apiUrl + "/categories.php");

  const categories = data.categories;

  const onpress = (categoryName) => {
    navigation.navigate("Foods", {categoryName});
  };

  const renderCategories = ({ item }) => (
    <CategoriesCard data={item} onPress={()=>onpress(item.strCategory)} />
  );

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent content={error} />;
  return (
    <View>
      <FlatList data={categories} renderItem={renderCategories} />
    </View>
  );
};

export default CategoriesPage;
