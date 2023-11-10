import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { Image } from "react-native";

const CategoriesCard = ({ data,onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.body_container}>
          <Image style={styles.image} source={{ uri: data.strCategoryThumb }} />
          <Text style={styles.title}>{data.strCategory}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0e0e0e0",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    marginLeft: 15,
    flex: 1,
    marginVertical: 10,
  },
  body_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    flex: 1,
    marginLeft: 30,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
export default CategoriesCard;
