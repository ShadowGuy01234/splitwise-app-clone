import { Pressable, StyleSheet, Text, View } from "react-native";
import GroupCard from "../components/GroupScreenCard";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function GroupScreen({title, amount}) {
    return (
        <>
        <View style={{
            flexDirection: "row",
            margin: 10,
        }}>
            <Text style={{
                flex: 1,
                fontSize: 18,
            }}>Overall, You own nothing!</Text>
            <Ionicons name="filter-sharp" size={24} color="black" />

        </View>
        <GroupCard title='1' expense = '0' />
        <GroupCard title='2' expense = '20' />
        <GroupCard title='3' expense = '110' />
        <GroupCard title='4' expense = '200' />

        </>
    );
}