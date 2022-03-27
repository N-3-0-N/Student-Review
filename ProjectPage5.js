import React from 'react'
import { StyleSheet, Text, TouchableHighlight,TouchableOpacity ,setFontSize, View, Image, marginTop } from 'react-native';

export default function feedback() {
    return (
        <View style={styles.container}>
            <View style ={styles.topBar}>
                <Image 
                    style={styles.logoshort}
                    source={require('../assets/logo.png')}
                    
                />
            </View>
            <View>
                <Image 
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                />
                <Text style={styles.text}>THANKYOU FOR YOUR FEEDBACK</Text>
                <Text style={styles.next}>Your response has been recorded</Text>
            </View>
            <View>
                <TouchableOpacity>
                <Text style={styles.menu}>RETURN BACK TO MAIN MENU</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    logoshort: {
        height : 50,
        width : 50,
        // margin : 10,
    },
    logo: {
        alignSelf: "center",
        justifyContent:"center",
        marginTop:60,
        width:"80%",
        height:200,
    },
    text: {
        alignSelf:"center",
        justifyContent:"center",
        fontWeight:"bold",
        fontSize:18,
        marginTop:10,

    },
    next:{
        alignSelf:"center",
        justifyContent:"center",
        fontSize:15,
    },
    menu:{
        alignSelf:"flex-end",
        marginTop:405,
        // marginLeft:245,
        width:130,
        borderWidth:2,
        borderRadius:10,
        fontSize:12,
        fontWeight:"bold",

    },


})