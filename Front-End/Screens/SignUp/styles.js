import { StyleSheet } from "react-native";
import { BaseColor } from "@config";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
        marginHorizontal: 16
    },

    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
        overflow: "hidden"
    },

    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 45,
        height: 45,
        borderRadius: 45 / 2,
        alignItems: "center",
        justifyContent: "center"
    },
    submitContainer: {
        backgroundColor: BaseColor.primaryColor,
        fontSize: 16,
        borderRadius: 4,
        paddingVertical: 12,
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
        color: "#FFF",
        shadowColor: "rgba(255, 22, 84, 0.24)",
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5,
        marginBottom:40
    },
    text: {
        fontFamily: "Roboto",
        // color: "#1D2029"
    }
});

export default styles;