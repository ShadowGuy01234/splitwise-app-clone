import { Pressable, StyleSheet, Text, View } from "react-native";
import GroupCard from "../components/GroupScreenCard";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


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
            }}>Overall, You own nothing! 😼</Text>
            <Ionicons name="filter-sharp" size={24} color="black" />

        </View>
        <GroupCard title='1' expense = '0' />
        <GroupCard title='2' expense = '20' />
        <GroupCard title='3' expense = '110' />
        <GroupCard title='4' expense = '200' />
        
        <View style={{
            // width: 50,
        }}>
            <Pressable style={{
            flexDirection: "row",
            gap: 5,
            justifyContent:"center",
            margin: 5,
            borderWidth: 2,
            borderRadius: 50,
            alignItems: 'center',
            paddingVertical: 5,
        }}>
            <AntDesign name="adduser" size={24} color="black" />
                <Text>Start a new Group</Text>
            </Pressable>
        </View>
        <View>
            <Pressable style={{
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            backgroundColor: "green",
            width: 150,
            justifyContent:"center",
            borderRadius: 50,
            paddingVertical: 5,
            left: 200,
            top: 110
        }}>
            <FontAwesome6 name="add" size={24} color="white" />
            <Text style={{
                fontWeight: 500,
                color: "white"
            }}>Add expense</Text>
            </Pressable>
        </View>
        </>
    );
}