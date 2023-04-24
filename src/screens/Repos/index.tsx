import { StyleSheet, View, Text } from "react-native";

export default function Repos() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{"name user"}</Text>
      <View style={styles.card}>
        <Text> username </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#03001C",
    alignItems: "center",
    paddingTop: 30,
  },
  text: {
    color: "#fff",
    marginTop: 10,
    fontSize: 20,
  },
  card: {
    width: 301,
    height: 80,
    backgroundColor: "#404258",
    borderRadius: 10,
  },
});
