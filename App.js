import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import Btn from "./src/components/Btn";
import Display from "./src/components/Display";

export default function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [varOperation, setVarOperation] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [clear, setClear] = useState(false);
  const [current, setCurrent] = useState(0);

  function addDigit(n) {
    const clearDisplay = displayValue === "0" || clear;

    if (n === "." && !clearDisplay && displayValue.includes(".")) {
      return;
    }

    const currentValue = clearDisplay ? "" : displayValue;
    const disValue = currentValue + n;
    setDisplayValue(disValue);
    setClear(false);

    if (n !== ".") {
      const newValue = parseFloat(disValue);
      const vals = [...values];
      vals[current] = newValue;
      setValues(vals)
    }
  }

  function clearMemory() {
    setDisplayValue("0")
    setVarOperation(null)
    setValues([0,0])
    setClear(false)
    setCurrent(0)
  }

  function setOperation(operation) {
    if(current === 0){
      setVarOperation(operation)
      setCurrent(1)
      setClear(true)
    }else{
      const equals = operation === '='
      const vals = [...values]
      try{
        vals[0] = eval(`${vals[0]} ${varOperation} ${vals[1]}`)
      }catch(e){
        vals[0] = values[0]
      }

      vals[1] = 0
      setDisplayValue(`${vals[0]}`)
      setVarOperation(equals ? null : operation)
      setCurrent(equals ? 0 : 1)
      setClear(!equals)
      setValues(vals)
    }
  }

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
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
