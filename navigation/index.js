import  React from 'react';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { useWindowDimensions, Button,Image,View,StyleSheet,Text,Linking } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {BackGroundColor} from '../constant/'

import {
    Home
} from '../scene';

const styles = StyleSheet.create({
    button_container: {
        flexDirection: "row",
        marginRight: 10
    },
    button :{
        size: "100px",
        fontSize: '50px',
        color: "white",
    },
    Header_logo:{
        fontSize: '30px',
        fontWeight: 'bold',
        color: 'white'
    },
    Navi_button:{
        fontSize: '17px',
        fontWeight: 'bold',
        color: 'white',
        margin: '10px'
    },
    header:{
        borderBottomWidth: 0,
        height: 100,
        backgroundColor: BackGroundColor,
        margin: 0
    }
  });

const Stack= createStackNavigator();

function LogoTitle() {
    const navigation= useNavigation()
    return <View>
     <Text 
     style={styles.Header_logo}
        onPress={()=>{
            navigation.navigate("Home")
            }
        }>
         Digital Native
     </Text>
    </View>
}

const buttonList={
    "App":"https://doc.quasar.money",
    "Blog":"https://medium.com/quasar-framework",
    "Build":"https://doc.quasar.money/",
    "Community":"https://discord.com/invite/5TDhbDg",
    "Governance":"https://medium.com/quasar-framework",
    "Research":"https://forum.quasar-framework.org/",
    "Stats":"https://doc.quasar.money"
}

const HeaderButtons=()=>{
    const navigation= useNavigation()
    return <View style={styles.button_container}>
        {Object.entries(buttonList).map(([s,k])=>{
        return <Text
            style={styles.Navi_button}
            onPress={()=>{
                Linking.openURL(k);
            }}>
            {s}
            </Text> 
        })}
    </View>
} 

export default function EntryScreen(props){
    return <>
    <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
            headerStyle:styles.header,
            headerLeft: null,
            headerTitle: props => <LogoTitle {...props} />,
            headerRight:HeaderButtons
        }}
        >
         <Stack.Screen
            name="Home"
            component={Home}
            />
    </Stack.Navigator>
    </>
}