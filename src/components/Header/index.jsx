import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header(){
  return(
    <Container >
      <Profile>
        <img src="https://github.com/caiosantosxp.png" alt="Foto do Usuário" />
        <div>
          <span>Bem Vindo</span>
          <strong>Caio Santos</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}