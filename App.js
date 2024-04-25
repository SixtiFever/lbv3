import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserLogin from './components/user_onboarding/UserLogin';
import UserSignup from './components/user_onboarding/UserSignup';
import CafeSignup from './components/cafe_onboarding/CafeSignup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CafeLogin from './components/cafe_onboarding/CafeLogin';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <RootStack />
    </NavigationContainer>
  );
}


const RootStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='User Login' component={UserLogin} />
            <Stack.Screen name='User Signup' component={UserSignup} />
            <Stack.Screen name='Cafe Login' component={CafeLogin} />
            <Stack.Screen name='Cafe Signup' component={CafeSignup} />
        </Stack.Navigator>
    )
}

