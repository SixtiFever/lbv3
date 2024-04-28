import { Text, Button, TextInput, View, StyleSheet, Touchable, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import * as ImagePicker from 'expo-image-picker';

const defaultImage = require('../../assets/user.png');

const CafeSignup = ({navigation}) => {

    const [email,setEmail] = useState('');
    const [cEmail,setCEmail] = useState('');
    const [password,setPassword] = useState('');
    const [cPassword,setCPassword] = useState('');
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };


    const handleSignup = () => {

        if ( password == cPassword && email == cEmail) {
            // singup

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
        navigation.navigate('Cafe Login');
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
                <View style={styles.topContainer}>
                    <TextInput style={styles.textInput} placeholder='Email' onChangeText={setEmail} />
                    <TextInput style={styles.textInput} placeholder='Confirm email' onChangeText={setCEmail} />
                    <TextInput style={styles.textInput} placeholder='Password' onChangeText={setPassword} />
                    <TextInput style={styles.textInput} placeholder='Confirm password' onChangeText={setCPassword} />
                    <View style={styles.imagePickerContainer}>
                        <TouchableOpacity onPress={pickImage}>
                            <Text>Choose loyalty card image</Text>
                        </TouchableOpacity>
                        { image &&  <Image source={ image != null ? {uri: image} : defaultImage} style={styles.imageContainer}/> }
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.navBtn} onPress={handleSignup}>
                        <Text style={styles.btnText}>Signup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleToLogin}>
                        <Text>Login</Text>
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
        height: '80%',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    bottomContainer: {
        height: '20%',
        bottom: 0,
        display: 'flex',
        justifyContent: 'space-evenly',
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
    imageContainer: {
        width: 75,
        height: 75,
        backgroundColor: 'red',
    },
    imagePickerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        justifyContent: 'space-evenly'
    }

})

export default CafeSignup;