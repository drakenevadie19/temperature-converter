import { View, Text, TextInput } from "react-native";
import { s } from "./Input.style";

const Input = ({ defaultValue, onChange, unit }) => {
  return (
    <View style={s.frame}>
      <TextInput
        style={s.input}
        placeholder="Type your temperature"
        maxLength={4}
        defaultValue={defaultValue.toString()}
        onChangeText={(text) => {
            onChange(text)
        }}  
        type="number"
      />
      {/* Option + shift + 8 */}
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
};

export default Input;
