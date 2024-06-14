import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    inputs: {
        width: "90%"
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    button: {
        width: "90%"
    },
    textRedirect: {
        marginTop: 20,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#705aa9'
    },
    rootHome: {
        flex: 1,
        marginVertical: 55,
        marginHorizontal: 25
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    iconEnd: {
        flex: 1,
        alignItems: 'flex-end'
    },
    modal: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: "#fff",
        gap: 10
    },
    rootMessage: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 20,
        alignItems: 'center'
    },
    fabMessage: {
        position: 'absolute',
        bottom: 20,
        right: 15
    },
    rootDetail: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
        gap: 20
    },
    textDetail: {
        fontWeight: 'bold',
        fontSize: 18
    },
    iconSignOut: {
        marginTop: 25,
        alignItems: 'center'
    },
    card: {
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        gap:5
    },
    cardContent: {
        flex: 1,
        marginTop: 10,
        gap:5
    },
    cardLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardMessage: {
        fontSize: 14,
        marginTop: 5,
    },
    cardIcon: {
        marginLeft: 10,
    },

})