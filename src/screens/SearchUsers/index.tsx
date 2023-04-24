import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
export function SearchUsers() {
  return (
    <View style={styles.container}>
      <View style={styles.headerUser}>
        <Text style={styles.textHeader}>Olá {"user"} :)</Text>
      </View>
      <View style={styles.dividerView} />

      <View>
        <Text style={styles.labelInput}>Search for other profiles :</Text>
        <TextInput
          placeholder="users"
          style={styles.input}
          placeholderTextColor="#abaaaa"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#03001C",
    alignItems: "center",
    color: "#fff",
  },
  headerUser: {
    marginTop: 30,
    height: 53,
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    color: "#fff",
    fontSize: 18,
  },
  dividerView: {
    backgroundColor: "#635985",
    height: 1,
    marginBottom: 10,
  },
  input: {
    borderColor: "#635985",
    borderRadius: 6,
    borderStyle: "solid",
    borderWidth: 1,
    width: 301,
    height: 36,
    fontSize: 18,
    color: "#fff",
    paddingLeft: 10,
  },
  labelInput: {
    fontSize: 18,
    color: "#fff",
  },
});
