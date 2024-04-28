import { Text, Button, TextInput, View, StyleSheet, Touchable, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { useEffect, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';


const CafeLogin = ({navigation}) => {

    // useEffect(() => {
    //     navigation.setOptions({
    //         'headerRight': () => <Entypo onPress={() => navigation.navigate('Cafe Signup')} name="shop" size={24} color="black" />
    //     })

    // }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigation.navigate('Cafe Stack');
            // ...
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
        
    }


    const handleToSignup = () => {
        navigation.navigate('Cafe Signup');
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
                <View style={styles.topContainer}>
                    <Text>Icon</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.loginInputs}>
                        <TextInput style={styles.textInput} placeholder='Email' onChangeText={setEmail} />
                        <TextInput style={styles.textInput} placeholder='Password' onChangeText={setPassword} />
                    </View>
                    <TouchableOpacity style={styles.navBtn} onPress={handleLogin}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleToSignup}>
                        <Text>Signup</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topContainer: {
        backgroundColor: '#E7D7C1',
        top: 0,
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainer: {
        bottom: 0,
        height: '50%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
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
    loginInputs: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '50%',
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
    btnText: {
        color: '#483D3F', 
        fontWeight: 'bold'
    },
})

export default CafeLogin;