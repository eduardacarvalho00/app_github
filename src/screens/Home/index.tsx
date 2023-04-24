import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint:
    "https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scopes=${SCOPE}`",
};

export function Home() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: "1b7e599c55e44d4dffbb",
      scopes: ["user"],
      redirectUri: makeRedirectUri({
        scheme: "appgithub",
        path: "https://auth.expo.io/@eduardacarvalho00/appgithub",
      }),
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Login with git hub</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#03001C",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#635985",
    color: "#fff",
    width: 185,
    height: 48,
  },
  textButton: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Home;
