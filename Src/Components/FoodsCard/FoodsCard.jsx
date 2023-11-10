import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableNativeFeedback,
} from "react-native";
import React from "react";

const FoodsCard = ({ data,onPress }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: data.strMealThumb }} />
        <Text style={styles.title}>{data.strMeal}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};
const phoneSize = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 4,
    width: phoneSize.width / 2,
  },
  image: {
    position: "relative",
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    position: "absolute",
    bottom: 0, // Adjust the positioning as per your design
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Example background color for better readability
    color: "white", // Example text color
    padding: 8,
    textAlign: "center",
  },
});
export default FoodsCard;
