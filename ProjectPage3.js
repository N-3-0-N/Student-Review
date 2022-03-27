import React from 'react';
import { StyleSheet, Text, TouchableHighlight , View, Image  } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown-v2';

function Page1() {
    let department = [{
        value: 'Etrx',
      }, {
        value: 'Extc',
      }, {
        value: 'Cmpn',
      }, {
        value: 'Inft',
      }, {
        value: 'Biom'
      }];

    let division = [{
        value: 'A',
      }, {
        value: 'B',
      }];

    return (
        <View style={styles.container}>
            <View style ={styles.topBar}>
                <Image 
                    style={styles.logoshort}
                    source={require('../assets/logo.png')}
                    
                />
                <Image 
                    style={styles.logoshort}
                    source={require('../assets/logo.png')}
                />
            </View>
            <View >
                <Dropdown
                    label='Department'
                    data={department}
                />
                <Dropdown
                    label='Division'
                    data={division}
                 />
            </View>
            <View>
              
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
    topBar : {
        flexDirection : "row",
        justifyContent : "space-between",
        margin : 15,
    }
  });
export default Page1
