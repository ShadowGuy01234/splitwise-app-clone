import { StyleSheet, Text, View, Pressable } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Account from "./screens/ProfileScreen";
import GroupScreen from "./screens/GroupScreen";
import Activity from "./screens/ActivityScreen";
import Friends from "./screens/FriendScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Fontisto from "@expo/vector-icons/Fontisto";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              height: 60,
            },
            headerTitle: "",
            headerRight: () => {
              return (
                <>
                  <AntDesign name="addusergroup" size={24} color="black" />
                  <Fontisto
                    name="search"
                    size={24}
                    color="black"
                    style={{
                      margin: 10,
                    }}
                  />
                </>
              );
            },
          }}
        >
          <Tab.Screen
            name="Group"
            component={GroupScreen}
            options={{
              tabBarIcon: () => (
                <MaterialIcons name="groups" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Friends"
            component={Friends}
            options={{
              tabBarIcon: () => (
                <AntDesign name="user" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Activity"
            component={Activity}
            options={{
              tabBarIcon: () => (
                <Entypo name="line-graph" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={Account}
            options={{
              tabBarIcon: () => (
                <MaterialIcons name="account-circle" size={24} color="black" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
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
