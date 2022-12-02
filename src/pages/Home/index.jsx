import { Link } from 'react-router-dom';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { Modal } from '../../components/Modal';

import {
  Container,
  InputSearchContainer,
  Header,
  ListContainer,
  Card,
} from './styles';

export function Home() {
  return (
    <Container>
      <Modal danger />
      <InputSearchContainer>
        <input type="text" name="" id="" placeholder="Pesquisar contato" />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Seta" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Félix Vicente</strong>
              <small>instagram</small>
            </div>
            <span>felixvicent1306@gmail.com</span>
            <span>(83) 98708-1294</span>
          </div>
          <div className="actions">
            <Link to="/edit/1">
              <img src={edit} alt="Editar" />
            </Link>
            <button type="button">
              <img src={trash} alt="Apagar" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
