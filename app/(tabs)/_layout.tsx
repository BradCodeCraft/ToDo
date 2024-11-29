import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#E9C46A",
        headerStyle: {
          backgroundColor: "#264653"
        },
        headerShadowVisible: false,
        headerTintColor: "#E9C46A",
        tabBarStyle: {
          backgroundColor: "#264653",
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home-sharp" : "home-outline"} size={24} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "information-circle-sharp" : "information-circle-outline"} size={24} color={color} />
          )
        }}
      />
    </Tabs>
  )
}
