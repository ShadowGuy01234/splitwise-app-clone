import { Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

function Account() {
  return (
    <>
      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 500,
            margin: 10,
          }}
        >
          Account
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Pressable>
          <MaterialCommunityIcons
            style={{
              height: 70,
              width: 70,
              borderRadius: 100,
              margin: 10,
            }}
            name="face-man-profile"
            size={70}
            color="black"
          />
        </Pressable>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            gap: 1,
          }}
        >
          <Text
            style={{
              fontWeight: 600,
              fontSize: 18,
            }}
          >
            Anurag Banerjee
          </Text>
          <Text>anuragchess22@gmail.com </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            marginRight: 10,
          }}
        >
          <FontAwesome6 name="pencil" size={24} color="black" />
        </View>
      </View>

      <View
        style={{
          height: 1,
          backgroundColor: "grey",
          margin: 10,
          width: 340,
        }}
      ></View>

      <View
        style={{
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <AntDesign name="qrcode" size={30} color="black" />
        <Text
          style={{
            fontSize: 15,
          }}
        >
          {" "}
          Scan Code{" "}
        </Text>
      </View>
      <View
        style={{
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <FontAwesome6 name="crown" size={24} color="black" />
        <Text
          style={{
            fontSize: 15,
          }}
        >
          {" "}
          Splitwise Pro{" "}
        </Text>
      </View>
      <Text
        style={{
          margin: 10,
        }}
      >
        {" "}
        Preferences{" "}
      </Text>
      <View
        style={{
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Fontisto name="email" size={24} color="black" />
        <Text
          style={{
            fontSize: 15,
          }}
        >
          {" "}
          Email Settings{" "}
        </Text>
      </View>
      <View
        style={{
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <FontAwesome name="bell-o" size={24} color="black" />
        <Text
          style={{
            fontSize: 15,
          }}
        >
          {" "}
          Device and push notifications settings{" "}
        </Text>
      </View>
      <View
        style={{
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <MaterialCommunityIcons name="security" size={24} color="black" />
        <Text
          style={{
            fontSize: 15,
          }}
        >
          {" "}
          Security{" "}
        </Text>
      </View>
      <Text
        style={{
          margin: 10,
        }}
      >
        {" "}
        Feedback{" "}
      </Text>
      <View
        style={{
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <AntDesign name="staro" size={24} color="black" />
        <Text
          style={{
            fontSize: 15,
          }}
        >
          {" "}
          Rate Splitwise{" "}
        </Text>
      </View>
      <View
        style={{
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <AntDesign name="customerservice" size={24} color="black" />
        <Text
          style={{
            fontSize: 15,
          }}
        >
          {" "}
          Contact Splitwise Support{" "}
        </Text>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: "grey",
          margin: 10,
          width: 340,
        }}
      ></View>
      <View
        style={{
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <AntDesign name="logout" size={24} color="black" />
        <Text
          style={{
            fontSize: 15,
          }}
        >
          {" "}
          Log Out{" "}
        </Text>
      </View>
      <View
        style={{
          gap: 10,
          margin: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Made with ❤️ in India</Text>
        <Text>Copyright © 2025 splitwise, inc.</Text>
      </View>
    </>
  );
}

export default Account;
