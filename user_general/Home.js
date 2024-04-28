import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Platform } from "react-native";
import { auth } from "../firebase";

const coffeeCup = require('../assets/coffee-cup.png');
const pv = require('../assets/pv.png');

const Home = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} style={{ flex: 1 }}>
                <View style={styles.cardContainer}>
                    <View style={styles.titleContainer}>
                        <View style={styles.logoContainer}>
                            <Image source={pv} style={styles.logo} />
                        </View>
                        <Text style={styles.titleText}>The Sunset Society</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image source={coffeeCup} style={styles.coffeeCupImage} />
                        <Text style={styles.imageText}>7 / 8</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity>
                            <Text style={styles.touchableText}>Scan</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCF7F7',
    },
    scrollViewContainer: {
        alignItems: 'center',
        height: '100%',
        paddingTop: 40,
        paddingBottom: 20,
    },
    cardContainer: {
        height: 350,
        width: '80%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 8,
        // Shadow properties
        ...Platform.select({
            ios: {
              shadowColor: '#000000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: .25,
              shadowRadius: 2,
            },
            android: {
              elevation: 4,
            },
          }),
    },
    coffeeCupImage: {
        height: 100,
        width: 100,
    },
    titleContainer: {
        height: '25%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 20,
        paddingTop: 20,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#3F3F37',
        marginLeft: 15,
        display: 'flex',
        flexWrap: 'wrap'
    },
    imageContainer: {
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 14,
        color: '#3F3F37'
    },
    buttonContainer: {
        height: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchable: {
        width: '50%',
        height: '60%'
    },
    touchableText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#DE541E'
    },
    logoContainer: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    logo: {
        height: 65,
        width: 65,
    }
})

export default Home;