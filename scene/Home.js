import React from 'react';
import {View,Text,ScrollView, StyleSheet,Dimensions,Image} from "react-native"
import {BackGroundColor,DarkerBackGroundColor,LighterBackGroundColor} from '../constant'
import {useFonts } from 'expo-font'

const height=Dimensions.get('window').height

const styles = StyleSheet.create({
    page: {
        height:height,
        width: '100%',
        paddingStart: '5%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: BackGroundColor,
        borderColor: LighterBackGroundColor,
        borderBottomWidth: "1px",
        borderTopWidth: "1px"
    },
    title_text:{
        fontSize: '64px',
        fontFamily: 'Jura',
        fontWeight: 'bold',
        color: 'white',
    },
    sub_title:{
        fontSize: '21px',
        fontFamily: 'Raleway',
        color: 'white',
    },
    text_container:{
        
    },
    footer: {
        height: height*0.2,
        width: '100%',
        paddingStart: '5%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: DarkerBackGroundColor
    },
    parter:{
        width: '100%',
        alignItems: 'center',
        backgroundColor: BackGroundColor,
        borderColor: LighterBackGroundColor,
        borderBottomWidth: "1px",
        borderTopWidth: "1px"
    }
  });

function Footer(){
    return <View  style={styles.footer}>
        <Image
            style={{ width: 50, height: 50, }}
            source={require('../imgs/quasar.png')}
        />
    </View>
}
const partner_imgs=[
    '../imgs/partner_cloud.png'
]

export default function Home(){
    let [fontsLoaded] = useFonts({
        Jura: require('../assets/fonts/Jura.ttf'),
        Raleway: require('../assets/fonts/Raleway.ttf')
    });
    
    return  <ScrollView
        style={styles.scrollView}
        scrollEventThrottle={16}>
        <View 
        name="main"
        style={styles.page}>
            <View style={styles.text_container}>
                <Text style={styles.title_text}>The interchain lending </Text>
                <Text style={styles.title_text}>borrowing protocol</Text>
                <Text style={styles.sub_title}>Quasar is the next generation money market protocol for interchain ecosystem. </Text>
                <Text style={styles.sub_title}>earn more button that goes to documentation link </Text>
            </View>
        </View>
        <View 
        name="build"
        style={styles.page}>
            <View style={styles.text_container}>
                <Text style={styles.title_text}>Build </Text>
                <Text style={styles.sub_title}>Build the next interchain finance with Quasar </Text>
                <Text style={styles.sub_title}>learn more button with the documentation link</Text>
            </View>
        </View>
        <View 
        name="earn"
        style={styles.page}>
            <View style={styles.text_container}>
                <Text style={styles.title_text}>Earn </Text>
                <Text style={styles.sub_title}>Earn income by providing collateral to Quasar protocol.</Text>
                <Text style={styles.sub_title}>Learn more button with the documentation link</Text>
            </View>
        </View>
        <View 
        name="Etc"
        style={styles.page}>
            <View style={styles.text_container}>
                <Text style={styles.title_text}>{`{number of chains} that uses Quasar protocol`}</Text>
                <Text style={styles.sub_title}>Many blockchains are already using interchain money market enabled by Quasar.</Text>
            </View>
        </View>
        <View 
        name="partner"
        style={styles.parter}>
           <Text style={styles.title_text}>Partner </Text>
           <Image
                style={{ width: 100, height: 100 }}
                source={require('../imgs/partner_cloud.png')}
            />
        </View>
        <Footer/>
    </ScrollView>
}