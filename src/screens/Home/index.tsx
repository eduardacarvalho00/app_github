import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import { Button, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint:
    "https://github.com/settings/connections/applications/1b7e599c55e44d4dffbb",
};

export function Home() {
  const navigation = useNavigation();
  async function handleGitHubSignIn() {
    try {
      const CLIENT_ID = "1b7e599c55e44d4dffbb";
      const CLIENT_SECRET = "ba8ebeac51c2db4e0e9cbaeb62aebbfc2aec83e8";
      const REDIRECT_URI = "https://auth.expo.io/@eduardacarvalho00/appgithub";
      const SCOPE = "user";

      const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scopes=${SCOPE}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthResponse;

      const response = await axios.post(
        `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}`
      );

      // if (type === "success") {
      //   const ACCESS_TOKEN = response.data.split("&")[0].split("=")[1];
      //   const USER = await axios.get("https://api.github.com/user", {
      //     headers: {
      //       Authorization: `token ${ACCESS_TOKEN}`,
      //     },
      //   });

      //   await AsyncStorage.setItem("@appgithub:token", ACCESS_TOKEN);

      //   try {
      //     const value = await AsyncStorage.getItem("@appgithub:token");

      //     if (value === ACCESS_TOKEN || value !== undefined || value !== null) {
      //       navigation.navigate("Search", {
      //         avatar_url: USER.data.avatar_url,
      //         username: USER.data.name,
      //       });
      //     }
      //   } catch (error) {
      //     console.log(error);
      //   }
      // }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Button
        title="Login"
        onPress={() => {
          handleGitHubSignIn();
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#941919",
  },
});
