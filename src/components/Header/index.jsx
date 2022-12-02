import logo from '../../assets/images/logo.svg';

import { Container, InputSearchContainer } from './styles';

export function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" width="201" />

      <InputSearchContainer>
        <input type="text" name="" id="" placeholder="Pesquisar contato" />
      </InputSearchContainer>
    </Container>
  );
}
