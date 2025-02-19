import { Pressable, StyleSheet, Text, View, Image } from "react-native";

export default function GroupCard({title, expense}){
    return (
        <>
        <View style={{
            flexDirection: "row",
            gap: 10,
            margin: 10,
            alignItems: "center",
        }}>
            <Image source={require('../assets/group_image.jpg')} style={{ height: 60, width: 80, borderRadius: 10 }}/>
            <View>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 500,
                }}>Group {title}</Text>
                <Text> {expense == 0 ? 'No expense' : `Expense: ${expense}`} </Text>
            </View>
        </View>
        </>
    )
}