import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        This Page Cannot Be Found
      </Text>

      <Link href="/">
        <Text style={styles.text}>
          Please go back to the home page.
        </Text>
      </Link>
    </View>
  )
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
    color: "#E76F51",
    textDecorationLine: "underline"
  }
})
