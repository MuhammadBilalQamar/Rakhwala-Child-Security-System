
import { StyleSheet } from "react-native";

import { BaseColor } from "@config";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 30
    },
    text: {
        fontFamily: "Roboto",
        color: "#1D2029",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        textAlign: "center"
    },
    socialButton: {
        flexDirection: "column",
        marginHorizontal: 12,
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: BaseColor.borderColor,
        borderRadius: 4,
        backgroundColor: "#fff",
        shadowColor: "rgba(171, 180, 189, 0.35)",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5,
        height: 170
    },
    socialLogo: {
        width: 100,
        height: 100,
        marginRight: 8
    },
    link: {
        color: BaseColor.primaryColor,
        fontSize: 14,
        fontWeight: "500"
    },

});

export default styles;