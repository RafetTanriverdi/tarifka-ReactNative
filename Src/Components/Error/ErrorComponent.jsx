import AnimatedLottieView from "lottie-react-native";
import React, { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

const ErrorComponent = ({ content }) => {
  const animation = useRef(null);
  return (
    <View style={styles.container}>
      <AnimatedLottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
        }}
        source={require("../../Assets/errorAnimation.json")}
      />
      <Text>{content}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
export default ErrorComponent;
