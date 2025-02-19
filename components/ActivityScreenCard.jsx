import { Pressable, StyleSheet, Text, View, Image} from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function ActivityScreenCard({person, group}) {
    return (
        <>
        <View style={{
            margin: 10,
        }}>
            <View style={{
                margin: 5
            }}>
            <MaterialCommunityIcons name="newspaper-variant-outline" size={55} color="black" style={{
                position: "absolute"
            }}/>
            <Image source={require('../assets/group_image.jpg')} style={{ 
                position: "relative",
                height: 25,
                width: 25,
                borderRadius: 30,
                left: 30,
                top: 30
                   }}/>
            </View>
            <View>
                {/* hardcoded text */}
            <Text style={{
                flexDirection: "row",
                marginLeft: 70,
                alignItems: "center",
                justifyContent: "center",
                fontSize: 19,
                fontWeight: 500,
                top: -20,
            }}>
                Person {person} added "Group {group}" {"\n"}  
            <Text>12/12/12</Text>
            </Text>
        </View>
        </View>
        
        </>
    );
}