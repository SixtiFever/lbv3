import { View, Text, Image } from "react-native";
import { auth } from "../../firebase";

const CafeHome = ({navigation}) => {
    return (
        <View>
            <Text>{auth.currentUser.email}</Text>
        </View>
    )
}

export default CafeHome;