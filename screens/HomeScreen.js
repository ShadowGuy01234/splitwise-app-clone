import { Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



function HomeScreen() {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("Profile");
  };

  return (
    <>
      <View>
        <Text>Hello From HomeScreen</Text>
        <Pressable
          onPress={handleNavigation}
          style={{
            color: "blue",
            backgroundColor: "lightblue",
            height: 40,
            width: 200,
            borderRadius: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "black" }}>Go to Profile</Text>
        </Pressable>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: "grey",
          margin: 10,
          width: 340,
          flexDirection: "column",
        }}
      ></View>
      <View>

      </View>
    </>
  );
}

export default HomeScreen;