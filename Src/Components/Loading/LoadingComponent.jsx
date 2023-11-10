import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const LoadingComponent = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color='blue' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default LoadingComponent;
