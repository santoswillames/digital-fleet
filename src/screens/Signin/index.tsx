import * as S from "./styles";
import backgroundImg from "../../assets/background.png";
import { Button } from "../../components/Button";

export function Signin() {
  return (
    <S.Container source={backgroundImg}>
      <S.Title>Digital Fleet</S.Title>
      <S.Slogan>Gestão de uso de veículos</S.Slogan>
      <Button title="Entrar com Google" />
    </S.Container>
  );
}
