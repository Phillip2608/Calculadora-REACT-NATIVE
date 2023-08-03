import { StyleSheet, Text, View } from "react-native";

import Btn from "./src/components/Btn";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Btn label="AC" />
        <Btn label="/" />
        <Btn label="7" />
        <Btn label="8" />
        <Btn label="9" />
        <Btn label="*" />
        <Btn label="4" />
        <Btn label="5" />
        <Btn label="6" />
        <Btn label="-" />
        <Btn label="1" />
        <Btn label="2" />
        <Btn label="3" />
        <Btn label="+" />
        <Btn label="0" />
        <Btn label="." />
        <Btn label="=" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
