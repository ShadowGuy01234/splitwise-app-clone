import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import ActivityScreenCard from "../components/ActivityScreenCard";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export default function Activity(){
    return (
        <>
        <ScrollView>
        <View style={{
            flexDirection: "row",
            margin: 10,
        }}>
            <Text style={{
                fontWeight: 600,
                fontSize: 24,
            }}>Activity</Text>
        </View>
        <ActivityScreenCard person={1} group={1}/>
        <ActivityScreenCard person={2} group={'abcd'}/>
        <ActivityScreenCard person={'Cool'} group={4}/>
        <ActivityScreenCard person={'Demn'} group={'hello'}/>
        <ActivityScreenCard person={'Demn'} group={'hello'}/>
        <ActivityScreenCard person={'Demn'} group={'hello'}/>
        <ActivityScreenCard person={'Demn'} group={'hello'}/>
        <ActivityScreenCard person={'Demn'} group={'hello'}/>
        <ActivityScreenCard person={'Demn'} group={'hello'}/>
        <ActivityScreenCard person={'Demn'} group={'hello'}/>

            
            {/* Position Hardcoded Button */}
        <View>
            <Pressable style={{
            position: "fixed",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            backgroundColor: "green",
            width: 150,
            justifyContent:"center",
            borderRadius: 50,
            paddingVertical: 5,
            left: 200,
        }}>
            <FontAwesome6 name="add" size={24} color="white" />
            <Text style={{
                fontWeight: 500,
                color: "white"
            }}>Add expense</Text>
            </Pressable>
        </View>  
        </ScrollView>  
        </>
    )
}