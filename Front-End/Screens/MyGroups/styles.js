
import { StyleSheet } from 'react-native';
import { BaseColor } from "@config";

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#FFFFFF"
    },
    container: {
        padding: 16,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: "#FFFFFF",
        alignItems: 'flex-start'
    },
    avatar: {
        width: 55,
        height: 55,
        borderRadius: 25,
    },
    text: {
        marginBottom: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    content: {
        flex: 1,
        marginLeft: 16,
        marginRight: 0
    },
    mainContent: {
        marginRight: 60
    },
    memberImage: {
        height: 30,
        width: 30,
        marginRight: 4,
        borderRadius: 10,
    },
    separator: {
        height: 1,
        backgroundColor: "#CCCCCC"
    },
    countMembers: {
        color: "#20B2AA"
    },
    timeAgo: {
        fontSize: 12,
        color: BaseColor.grayColor
    },
    groupName: {
        fontSize: 23,
        color: BaseColor.lightPrimaryColor
    },
    groupMembersContent: {
        flexDirection: 'row',
        marginTop: 10
    }
});   
export default styles;