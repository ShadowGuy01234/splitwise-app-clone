import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./screens/ProfileScreen";

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
          <Stack.Screen name="Profile" />
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
    <View>
      <Text>Home Screen</Text>
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
