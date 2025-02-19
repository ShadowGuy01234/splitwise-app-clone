import { Pressable, Text, View, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default function FriendsScreenCard({index, expense}){
    return (
        <>
        <View style={{
            flexDirection: "row",
            gap: 10,
            margin: 10,
            alignItems: "center",
        }}>
            <Image source={require('../assets/group_image.jpg')} style={{ height: 60, width: 80, borderRadius: 10 }}/>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
                justifyContent: "space-between"
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 500,
                }}>Person {index} </Text>
                <Text> {expense == 0 ? 'No expense' : `You owe: ${expense}`} </Text>
            </View>
        </View>
        </>
    )
}