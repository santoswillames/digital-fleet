import { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as S from "./styles";
import backgroundImg from "../../assets/background.png";
import { Button } from "../../components/Button";
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from "@env";

WebBrowser.maybeCompleteAuthSession();

export function Signin() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const [_, response, googleSignIn] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    scopes: ["profile", "email"],
  });

  function handleGoogleSignIn() {
    setIsAuthenticating(true);

    googleSignIn().then((response) => {
      if (response.type !== "success") {
        setIsAuthenticating(false);
      }
    });
  }

  useEffect(() => {
    if (response?.type === "success") {
      if (response.authentication?.idToken) {
        console.log(
          "TOKEN DE AUTENTICAÇÃO => ",
          response.authentication.idToken
        );
      }
    }
  }, [response]);

  return (
    <S.Container source={backgroundImg}>
      <S.Title>Digital Fleet</S.Title>
      <S.Slogan>Gestão de uso de veículos</S.Slogan>
      <Button
        title="Entrar com Google"
        onPress={handleGoogleSignIn}
        isLoading={isAuthenticating}
      />
    </S.Container>
  );
}
