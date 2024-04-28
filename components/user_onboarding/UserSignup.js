import { Text, Button, TextInput, View, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const UserSignup = ({navigation}) => {

    const [email,setEmail] = useState('');
    const [cEmail,setCEmail] = useState('');
    const [password,setPassword] = useState('');
    const [cPassword,setCPassword] = useState('');


    const handleSignup = () => {

        if ( password == cPassword && email == cEmail) {
            // signup
            createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

            navigation.goBack();
        } else {
            alert('Field error');
        }

    } 

    const handleToLogin = () => {
        navigation.navigate('User Login');
    }

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TextInput style={styles.textInput} placeholder='Email' onChangeText={setEmail} />
                <TextInput style={styles.textInput} placeholder='Confirm email' onChangeText={setCEmail} />
                <TextInput style={styles.textInput} placeholder='Password' onChangeText={setPassword} />
                <TextInput style={styles.textInput} placeholder='Confirm password' onChangeText={setCPassword} />
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

export default UserSignup