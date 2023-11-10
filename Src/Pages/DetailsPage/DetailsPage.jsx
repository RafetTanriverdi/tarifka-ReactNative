import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { UseFetch } from "../../Hooks/UseFetch";
import LoadingComponent from "../../Components/Loading/LoadingComponent";
import ErrorComponent from "../../Components/Error/ErrorComponent";
import WebView from "react-native-webview";
import { StyleSheet } from "react-native";
import Video from "react-native-video";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const DetailsPage = ({ route }) => {
  const { id } = route.params;
  const { data, error, loading } = UseFetch(apiUrl + `/lookup.php?i=${id}`);
  const mealData = data.meals;

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent content={error} />;

  const newData = { ...mealData[0] };

  const extractIngredients = (newData) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;
      const ingredient = newData[ingredientKey];
      const measure = newData[measureKey];

      // Check if the ingredient exists
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(
          `${measure ? measure.trim() + " " : ""}${ingredient.trim()}`
        );
      }
    }
    return ingredients;
  };

  const ingredients = extractIngredients(newData);

  const mealIngredients = ({ item }) => <Text style={styles.material_item}>{item}</Text>;
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={{ uri: newData.strMealThumb }} />
        <View style={styles.badge_container}>
          <Text style={styles.area}>Area: {newData.strArea}</Text>
          <Text style={styles.category}>Category: {newData.strCategory}</Text>
        </View>
        <View style={styles.make_container}>
          <Text style={styles.make_title}>How To Make</Text>
          <Text style={styles.make_content}>{newData.strInstructions}</Text>
        </View>
        <View style={styles.material_container}>
          <Text style={styles.material_title}>Necessary materials</Text>
          <FlatList
            style={styles.ingredient}
            data={ingredients}
            renderItem={mealIngredients}
            scrollEnabled={false}
            numColumns={2}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const phoneSize = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "scroll",
  },
  badge_container: {
    flexDirection: "row",
    flex: 1,
  },
  area: {
    width: phoneSize.width / 2,
    fontSize: 15,
    backgroundColor: "#FBF0B2",
    padding: 5,
    margin: 5,
    flex: 1,
    borderRadius: 20,
    paddingLeft: 15,
  },
  category: {
    backgroundColor: "#F9B572",
    width: phoneSize.width / 2,
    borderRadius: 20,
    padding: 5,
    paddingLeft: 15,
    margin: 5,
    flex: 1,
  },
  make_container: {
    marginHorizontal: 18,
  },
  make_title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  material_container: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  material_title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  material_item:{
    backgroundColor:'#FFFBF5',
    flex:1,
    width:phoneSize.width/2,
    borderColor:'#e8e8e8',
    borderWidth:1,
    fontSize:14,
    margin:2,
    padding:10,
  },
  ingredient: {
    flex: 1,
    
  },
  image: {
    height: phoneSize.height / 2.5,
    flex: 1,
  },
  video: {
    height: phoneSize.height / 2,
  },
});

export default DetailsPage;
