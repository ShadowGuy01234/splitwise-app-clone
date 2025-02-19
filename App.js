import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./screens/ProfileScreen";
import Feather from "@expo/vector-icons/Feather";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              headerStyle: {
                backgroundColor: "lightblue",
              },
            }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="Profile"
            options={{
              headerStyle: {
                backgroundColor: "lightblue",
                color: "white",
              },
              headerTitle: "",
              headerBack: () => {
                return null;
              },
              headerBackVisible: false,
              headerRight: () => {
                return (
                  <Pressable>
                    <Feather name="search" size={24} color="black" />
                  </Pressable>
                );
              },
            }}
            component={ProfileScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

function HomeScreen() {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={{
      flex: 1,
      justifyContent:"center",
      alignItems: "center",
    }} >
      <Text>Home Screen</Text>
      <Pressable
        onPress={handleNavigation}
        style={{
          backgroundColor: "blue",
          height: 50,
          width: 200,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          Go to Profile
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
