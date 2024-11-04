import { Text, TouchableOpacity } from "react-native";
import { s } from "./ButtonConvert.style"
import { getOppositeUnit } from "../../utils/temperature";

const ButtonConvert = ({ unit, onPress }) => {

    return (
        <>
            <TouchableOpacity onPress={onPress} style={s.buttonConvert}>
                <Text style={s.buttonConvertText}>Switch to from {getOppositeUnit(unit)} to {unit}</Text>
            </TouchableOpacity>
        </>
    );

}

export default ButtonConvert;