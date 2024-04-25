import { Text, Button, TextInput, View, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import { useState } from 'react'

const CafeSignup = ({navigation}) => {

    const [email,setEmail] = useState('');
    const [cEmail,setCEmail] = useState('');
    const [password,setPassword] = useState('');
    const [cPassword,setCPassword] = useState('');


    const handleSignup = () => {

        if ( password == cPassword && email == cEmail) {
            // login
            navigation.goBack();
        } else {
            alert('Field error');
        }

    } 

    const handleToLogin = () => {
        navigation.navigate('Cafe Login');
    }

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TextInput style={styles.textInput} placeholder='Email' />
                <TextInput style={styles.textInput} placeholder='Confirm email' />
                <TextInput style={styles.textInput} placeholder='Password' />
                <TextInput style={styles.textInput} placeholder='Confirm password' />
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.navBtn} onPress={handleSignup}>
                    <Text style={styles.btnText}>Signup</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleToLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topContainer: {
        height: '70%',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    bottomContainer: {
        height: '30%',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        width: '75%',
        height: 60,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#F7FFF6',
        paddingStart: 10,
        color: '#261C15'
    },
    navBtn: {
        width: '75%',
        height: 70,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A594F9'
    },
    btnText: {
        color: '#483D3F', 
        fontWeight: 'bold'
    },

})

export default CafeSignup;