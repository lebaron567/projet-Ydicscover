import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import About from './About'

export default function ({ navigation }) {
  const goTo = () => navigation.navigate("About");

  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button onPress={goTo} title={`Go to Details`} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "azure",
    alignItems: "center",
    justifyContent: "center",
  },
});