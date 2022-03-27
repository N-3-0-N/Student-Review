import React from 'react';
import { Image, StyleSheet, View, Text, Button,Alert,TextInput} from 'react-native'
   export default function Logon() {
   return (
      <View style={styles.container}>
            <View style ={styles.topBar}>
              <Image 
                    style={styles.logoshort}
                    source={require('../assets/logo.png')}
                    />
           </View>
            <View style={styles.subcontainer}>
               <Image 
                 style={styles.logo}
                 source={require('../assets/logo.png')}
                 />
            </View> 
           <Text style={styles.textbar}>
                    Email Address
           </Text>
          <View style={styles.loginform}>
              <TextInput
                 style={styles.inputemail}
                 textContentType={'emailAddress'}
                 placeholder = "Enter your Email address"
               />
            </View>
            <Text style={styles.textbar}>
                    Password
                </Text>
            <View style={styles.loginform}>
               <TextInput
                 style={styles.inputemail}
                 textContentType={'password'}
               placeholder = "Enter your Password"
                 color = "white"
                 secureTextEntry
               />
            </View>
            <View style={styles.buttoncontainer}>
              <Button
                 style={styles.Button}
                 title="LOGIN"
                 color="#19334d"
                onPress={() => Alert.alert('Button with adjusted color pressed')}
               />
            </View>
        
        </View>    
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#e6ffff"
    },
    logoshort: {
        height : 50,
        width : 50,
        // margin : 10,
    },
topBar : {
        flexDirection : "row",
         justifyContent : "space-between",
         margin : 15,
    },
    subcontainer:{
        width: "100%",
        height: 300,
        alignItems: 'center',
    },
    logo:{
        flex: 1,
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    loginform:{
        // width: '90%',
        alignItems: 'center',
    },
    inputemail:{
        width: '80%',
        backgroundColor:"#19334d",
        padding: 15,
        borderRadius: 10,
        marginBottom:10,
    },
    textbar:{
        textAlign: 'left',
        marginLeft:40,
        marginRight: 40,
        marginBottom: 10,
        fontSize: 20,
        fontWeight:'bold'
    },
    buttoncontainer:{
         marginLeft: 100,
         marginRight: 100,
         marginTop: 20,
         alignItems: 'center',
     },
    Button:{
          width: "80%",
         borderRadius: 10,
          padding: 15,
          borderWidth: 10,
    }
})


