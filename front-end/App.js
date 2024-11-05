import { Text, View, ImageBackground } from "react-native";
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import Input from "./components/Input/Input";
import { useEffect, useState } from "react";

import DisplayTemperature from "./components/DisplayTemperature/DisplayTemperature";
import {
  getOppositeUnit,
  convertTemperatureTo,
} from "./utils/temperature";
import ButtonConvert from "./components/ButtonConvert/ButtonConvert";
import { isIceTemperature } from "./utils/temperature";

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");
  const [currentBackground, setCurrentBackground] = useState(coldBackground)

  useEffect(() => {
    if (isIceTemperature(inputValue, currentUnit)) {
      setCurrentBackground(coldBackground);
    } else {
      setCurrentBackground(hotBackground)
    }
  }, [inputValue, currentUnit])

  function getConvertedTemperature() {
    if (isNaN(inputValue)) {
      return "";
    } else {
      //toFixed(x) = round number to x digit after comma
      return convertTemperatureTo(
        inputValue,
        getOppositeUnit(currentUnit)
      ).toFixed(1);
    }
  }

  return (
    <>
      {/* this will make the background cover all parts, including rabbit-ears of iphone and navigation tab */}
      <ImageBackground style={s.backgroundImage} source={currentBackground}>
        <SafeAreaProvider>
          <SafeAreaView style={s.root}>
            <View style={s.workspace}>
              <DisplayTemperature
                unit={getOppositeUnit(currentUnit)}
                temperatureConverted={getConvertedTemperature()}
              />

              <Input
                unit={currentUnit}
                onChange={setInputValue}
                defaultValue={0}
              />

              <ButtonConvert
                onPress={() => setCurrentUnit(getOppositeUnit(currentUnit))}
                unit={currentUnit}
              />
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </>
  );
}
