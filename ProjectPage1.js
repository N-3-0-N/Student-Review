import React from 'react';
import { Image, StyleSheet, View, Text, Button,Alert} from 'react-native'

export default function Nyloon() {
    return (
    <View style={styles.maincontainer}>
        <View style={styles.container}>
      <Image 
      style={styles.logoshort}
      source={require('../assets/logo.png')}
      />
       </View>
       <View style={styles.quote}>
           <Text style={styles.Text} >
           A good education can change anyone. A good teacher can change everything.
           </Text>
       </View>
       <View style={styles.button}>
          <Button
          title="Get Started"
          color= "#264d73"
          onPress={() => Alert.alert('Simple Button pressed')}
          />
       </View>
    </View>
    )
}
const styles = StyleSheet.create({
    maincontainer:{
        width: '100%',
        height:'100%',
        backgroundColor:"#e6ffff",
    },
    container:{
        flex:1,
        alignItems: 'center',
        marginTop: 80,
    },
    logoshort:{
        flex: 1,
        width: 450,
        height: 200,
        resizeMode: 'contain',
    },
    quote:{
        width:'100%',
        // marginBottom: 20,
        // marginLeft:10, 
        // marginRight:10,
    },
    Text:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 19,
        fontStyle : 'italic',
        marginLeft:10,
        marginRight:10,
        // backgroundColor:'lightblue',
    },
    button:{
        margin: 40,
        marginTop: 30,
        borderRadius : 10,
        Color: "black",
    }
})

