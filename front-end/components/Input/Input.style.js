import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    frame: {
        alignSelf: "stretch", // override the alignItems attribute value from parent
        justifyContent: "center"
    },
    input: {
        backgroundColor: "white",
        height: 50,
        borderRadius: 20,
        paddingLeft: 25
    },
    unit: {
        position: "absolute",
        alignSelf: "flex-end",
        paddingRight: 25,
        fontSize: 30
    }
});