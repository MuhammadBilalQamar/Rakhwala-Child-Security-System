import { BaseColor } from "@config";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    text: {
        fontFamily: "Roboto",
        color: BaseColor.primaryColor
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    showModalButton: {
        flexDirection: "row",
        borderColor: BaseColor.borderColor,
        // justifyContent: "right"
        // left:0
        right: 0
    },
    openButton: {
        flexDirection: "row",
        marginHorizontal: 12,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: BaseColor.borderColor,
        borderRadius: 4,
        shadowColor: "rgba(171, 180, 189, 0.35)",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5,
        backgroundColor: BaseColor.lightPrimaryColor
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 20
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20
    },
    inputTitle: {
    }
});
export default styles;