import React from 'react';
import {View,Text,ScrollView, StyleSheet,Dimensions,Image,Linking} from "react-native"
import {BackGroundColor,DarkerBackGroundColor,LighterBackGroundColor} from '../constant'
import {useFonts } from 'expo-font'

const height=Dimensions.get('window').height
const width=Dimensions.get('window').width

const styles = StyleSheet.create({
    page: {
        height:height,
        width: '100%',
        paddingStart: '5%',
        paddingEnd: '5%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: BackGroundColor,
        borderColor: LighterBackGroundColor,
        borderBottomWidth: "1px",
        borderTopWidth: "1px"
    },
    sub_page:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%"
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
        marginRight: '20px'
    },
    footer: {
        height: "100px",
        width: '100%',
        paddingStart: '5%',
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
    },
    parter_row :{
        flexDirection: "row"
    },
    image_container:{
        alignItems: "center",
    },
    parter_text:{
        fontSize: '21px',
        fontFamily: 'Raleway',
        color: 'white',
    },
    Navi_button:{
        fontSize: '17px',
        fontWeight: 'bold',
        color: 'white',
        marginStart: '10px',
        marginEnd: '10px'
    },
    moment:{
        padding: "20px",
        width: '100%',
        alignItems: 'center',
        backgroundColor: BackGroundColor,
        borderColor: LighterBackGroundColor,
        borderBottomWidth: "1px",
        borderTopWidth: "1px"
    },
  });

const buttonList={
    "App":"https://doc.quasar.money",
    "Blog":"https://medium.com/quasar-framework",
    "Build":"https://doc.quasar.money/",
    "Community":"https://discord.com/invite/5TDhbDg",
    "Governance":"https://medium.com/quasar-framework",
    "Research":"https://forum.quasar-framework.org/",
    "Stats":"https://doc.quasar.money"
}

function Footer(){
    return <View  style={styles.footer}>
       <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
       }}>
       <Image
            style={{ 
                width: 50, 
                height: 50,
                alignSelf: "flex-start"
             }}
            source={require('../imgs/quasar.png')}
        />
        <View style={{
            flexDirection: "row",
            alignItems: "center"
        }}>
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
       </View>
    </View>
}
function ImageContainer({name,source}){
    return <View style={styles.image_container}>
        <Image
            style={{ width: 200, height: 100, margin: "10px",tintColor: "white"}}
            resizeMode= 'contain'
            source={source}/>
    </View>
}

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
            <View style={styles.sub_page}>
                <View style={styles.text_container}>
                    <Text style={styles.title_text}>The interchain lending </Text>
                    <Text style={styles.title_text}>borrowing protocol</Text>
                    <Text style={styles.sub_title}>Quasar is the next generation money market protocol for interchain ecosystem. </Text>
                    <Text style={styles.sub_title}>earn more button that goes to documentation link </Text>
                </View>
                <Image style={ {
                    width: "70%",
                }}
                resizeMode= 'contain'
                source={require('../imgs/interchain.png')}
                />
            </View>
        </View>
        <View 
        name="build"
        style={styles.page}>
            <View style={styles.sub_page}>
            <View style={styles.text_container}>
                <Text style={styles.title_text}>Build </Text>
                <Text style={styles.sub_title}>Build the next interchain finance with Quasar </Text>
                <Text style={styles.sub_title}>learn more button with the documentation link</Text>
            </View>
            <Image style={ {
                 margin: "50px",
                    width: "50%",
                    height: "400px"
                }}
                resizeMode= 'scale'
                source={require('../imgs/internet.jpg')}
                />
            </View>
        </View>
        <View 
        name="earn"
        style={styles.page}>
            <View style={styles.sub_page}>
            <View style={styles.text_container}>
                <Text style={styles.title_text}>Earn </Text>
                <Text style={styles.sub_title}>Earn income by providing collateral to Quasar protocol.</Text>
                <Text style={styles.sub_title}>Learn more button with the documentation link</Text>
            </View>
            <Image style={ {
                    margin: "50px",
                    width: "70%",
                    height: "500px"
                }}
                resizeMode= 'scale'
                source={require('../imgs/blockchain_coin.jpg')}
                />
            </View>
        </View>
        <View 
        name="Etc"
        style={styles.moment}>
            <View 
                style={{ margin: "20px"}}>
                <Text style={styles.title_text}>{`{number of chains} that uses Quasar protocol`}</Text>
            </View>
            <View style={{ margin: "20px"}}>
                <Text style={styles.sub_title}>Many blockchains are already using interchain money market enabled by Quasar.</Text>
            </View>
        </View>
        <View 
        name="partner"
        style={styles.parter}>
           <Text style={styles.title_text}>Partner </Text>
           <View style={styles.parter_row}>
            <ImageContainer
            name="campus cloud"
            source={require('../imgs/partner_cloud.png')}
            />
            <ImageContainer
            name="bga soft"
            source={require('../imgs/partner_bga.png')}
            />
            <ImageContainer
            name="debricked"
            source={require('../imgs/partner_debricked.png')}
            />
            <ImageContainer
            name="digital ocean"
            source={require('../imgs/partner_digital_ocean.png')}
            />
           </View>
           <View style={styles.parter_row}>
            <ImageContainer
            name="dream_monkey"
            source={require('../imgs/partner_dream_monkey.svg')}
            />
            <ImageContainer
            name="ibl"
            source={require('../imgs/partner_ibl.svg')}
            />
            <ImageContainer
            name="jungle"
            source={require('../imgs/partner_jungle.png')}
            />
            <ImageContainer
            name="kalisio"
            source={require('../imgs/partner_kalisio.png')}
            />
           </View>
           <View style={styles.parter_row}>
           
            <ImageContainer
            name="project_finance"
            source={require('../imgs/partner_project_finance.svg')}
            />
            <ImageContainer
            name="truelogic"
            source={require('../imgs/partner_truelogic.png')}
            />
           </View>
        </View>
        <Footer/>
    </ScrollView>
}