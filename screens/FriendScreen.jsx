import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons  from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FriendsScreenCard from "../components/FriendsScreenCard";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';



export default function Friends(){
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
        <FriendsScreenCard index={1} expense={0}/>
        <FriendsScreenCard index={2} expense={100}/>
        <FriendsScreenCard index={3} expense={200}/>
        <FriendsScreenCard index={4} expense={0}/>
       
        <View>
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
                <Text>Add new Friends</Text>
            </Pressable>
        </View>

        {/* Position Hardcoded Button */}
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
            top: 180,
        }}>
            <FontAwesome6 name="add" size={24} color="white" />
            <Text style={{
                fontWeight: 500,
                color: "white"
            }}>Add expense</Text>
            </Pressable>
        </View>

        </>
    )
}