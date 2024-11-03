import { Text } from "react-native";
import { s } from "./DisplayTemperature.style"

const DisplayTemperature = ({ temperatureConverted, unit }) => {

    return (
        <>
            <Text style={s.temperatureConverted}>{temperatureConverted} {unit}</Text>
        </>
    );

}

export default DisplayTemperature;