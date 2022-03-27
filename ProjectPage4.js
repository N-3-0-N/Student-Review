import React from 'react'
import { StyleSheet, Text, TouchableHighlight,TouchableOpacity ,setFontSize, View, Image, marginTop } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function logo() {
    return (
        <View style={styles.container}>
            <View style ={styles.topBar}>
                <Image 
                    style={styles.logoshort}
                    source={require('../assets/logo.png')}
                    
                />
            </View>
            <View>
                <Text style= {styles.text} >Teachers Name: Nisy Mathew</Text>
            </View>
            <View>
                <Image style= {styles.image} source={require('../assets/nissy.png')}   />

            </View>
            <View>
            <Text style= {styles.run} >Power Electronics</Text>
            </View>
            <View> 
                <Text style= {styles.gun}>How organized was the lecture in terms of the time frame and assessment and access to materials?</Text>
            </View>
            <View style= {styles.emoji}>
                <TouchableOpacity>
                    <Entypo name="emoji-sad" size={35} color="black" />
                </TouchableOpacity>

            <View style={styles.second}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="emoticon-sad-outline" size={40} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.third}>
                <TouchableOpacity>    
                    <Entypo name="emoji-neutral" size={35} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.fourth}>
                <TouchableOpacity>   
                    <MaterialCommunityIcons name="emoticon-happy-outline" size={40} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.fifth}>
                <TouchableOpacity> 
                    <Entypo name="emoji-happy" size={35} color="black" /> 
                </TouchableOpacity>  
            </View>
            </View>
            <View>
                <Text style={styles.next}>Very Unsatisfied    Unsatisfied      Neutral          Satisfied      Very Satisfied   </Text>
            </View>

            <View> 
                <Text style= {styles.gun}>How well did the teacher communicate his or her subjects to the students?</Text>
            </View>
            <View style= {styles.emoji}>
                <TouchableOpacity> 
                    <Entypo name="emoji-sad" size={35} color="black" />
                </TouchableOpacity>
            <View style={styles.second}>
                <TouchableOpacity>    
                    <MaterialCommunityIcons name="emoticon-sad-outline" size={40} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.third}>
                <TouchableOpacity>    
                    <Entypo name="emoji-neutral" size={35} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.fourth}>
                <TouchableOpacity>    
                    <MaterialCommunityIcons name="emoticon-happy-outline" size={40} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.fifth}>
                <TouchableOpacity>     
                    <Entypo name="emoji-happy" size={35} color="black" />  
                </TouchableOpacity>
            </View>
            </View>
            <View>
                <Text style={styles.next}>Very Unsatisfied    Unsatisfied      Neutral          Satisfied      Very Satisfied   </Text>
            </View>

            <View> 
                <Text style= {styles.gun}>How fair was the course assessment method?</Text>
            </View>
            <View style= {styles.emoji}>
                <TouchableOpacity>    
                    <Entypo name="emoji-sad" size={35} color="black" />
                </TouchableOpacity>
            <View style={styles.second}>
                <TouchableOpacity>    
                    <MaterialCommunityIcons name="emoticon-sad-outline" size={40} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.third}>
                <TouchableOpacity>    
                    <Entypo name="emoji-neutral" size={35} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.fourth}>
                <TouchableOpacity>    
                    <MaterialCommunityIcons name="emoticon-happy-outline" size={40} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.fifth}>
                <TouchableOpacity>    
                    <Entypo name="emoji-happy" size={35} color="black" /> 
                </TouchableOpacity>
            </View>
            </View>
            <View>
                <Text style={styles.next}>Very Unsatisfied    Unsatisfied      Neutral          Satisfied      Very Satisfied   </Text>
            </View>
            


        </View>      
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    logoshort: {
        height : 50,
        width : 50,
        // margin : 10,
    },
    text:{
        marginTop:50,
        fontSize:20,
        marginLeft:40,
        fontWeight:"Bold",


    },
    image:{
        width:"80%",
        height:250,
        marginLeft:38,

    },
    run:{
        marginTop:10,
        fontSize:20,
        marginLeft:100,
        fontWeight:"Bold",
        
    },
    gun:{
        marginTop:15,
        marginLeft:20,
        fontSize:15,
        fontWeight:"bold",
    },
    emoji:{
        flexDirection: "row",
        marginTop:10,
        marginLeft:22,
    },
    second:{
        marginLeft:40,
    },
    third:{
        marginLeft:35,
    },
    fourth:{
        marginLeft:30,
    },
    fifth:{
        marginLeft:30,

    },
    next:{
        marginLeft:8,
        fontSize:11,
    }



    

}
);