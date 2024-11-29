import { Link } from "expo-router";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.label}>
        Welcome to React Native {Platform.OS.charAt(0).toUpperCase() + Platform.OS.substring(1)} Application!
      </Text>

      <Link href="/about">
        <Text style={styles.text}>
          Go to About Page
        </Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#264653"
  },
  label: {
    fontSize: 24,
    color: "#E9C46A"
  },
  text: {
    fontSize: 18,
    color: '#E76F51',
    textDecorationLine: "underline"
  },
})
