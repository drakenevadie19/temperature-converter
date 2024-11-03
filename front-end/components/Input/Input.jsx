import { View, Text, TextInput } from "react-native";
import { s } from "./Input.style";

const Input = ({defaultValue}) => {
  return (
    <View style={s.frame}>
      <TextInput
        style={s.input}
        placeholder="Type your temperature"
        maxLength={4}
        defaultValue={defaultValue.toString()}
      />
      {/* Option + shift + 8 */}
      <Text style={s.unit}>°C</Text>
    </View>
  );
};

export default Input;
