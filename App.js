import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import Btn from "./src/components/Btn";
import Display from "./src/components/Display";

export default function App() {
  const [value, setValue] = useState("0");

  function addDigit(n) {
    setValue(n);
  }

  function clearMemory() {
    setValue("0");
  }

  function setOperation(operation) {}

  return (
    <View style={styles.container}>
      <Display value={value} />
      <View style={styles.buttons}>
        <Btn label="AC" triple onClick={clearMemory} />
        <Btn label="/" operation onClick={setOperation} />
        <Btn label="7" onClick={addDigit} />
        <Btn label="8" onClick={addDigit} />
        <Btn label="9" onClick={addDigit} />
        <Btn label="*" operation onClick={setOperation} />
        <Btn label="4" onClick={addDigit} />
        <Btn label="5" onClick={addDigit} />
        <Btn label="6" onClick={addDigit} />
        <Btn label="-" operation onClick={setOperation} />
        <Btn label="1" onClick={addDigit} />
        <Btn label="2" onClick={addDigit} />
        <Btn label="3" onClick={addDigit} />
        <Btn label="+" operation onClick={setOperation} />
        <Btn label="0" double onClick={addDigit} />
        <Btn label="." onClick={addDigit} />
        <Btn label="=" operation onClick={setOperation} />
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
