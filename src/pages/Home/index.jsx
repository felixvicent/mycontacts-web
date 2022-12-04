import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import ContactsService from '../../services/ContactsService';

import formatPhone from '../../utils/formatPhone';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import { Loader } from '../../components/Loader';

import {
  Container,
  InputSearchContainer,
  Header,
  ListHeader,
  Card,
} from './styles';

export function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadContacts() {
      try {
        setIsLoading(true);

        const contactsList = await ContactsService.listContacts(orderBy);

        setContacts(contactsList);
      } finally {
        setIsLoading(false);
      }
    }

    loadContacts();
  }, [orderBy]);

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [contacts, searchTerm],
  );

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <InputSearchContainer>
        <input
          value={searchTerm}
          onChange={handleChangeSearchTerm}
          type="text"
          placeholder="Pesquisar contato"
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredContacts.length}{' '}
          {filteredContacts.length === 1 ? 'Contato' : 'Contatos'}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      {filteredContacts.length > 0 && (
        <ListHeader orderBy={orderBy}>
          <button onClick={handleToggleOrderBy} type="button">
            <span>Nome</span>
            <img src={arrow} alt="Seta" />
          </button>
        </ListHeader>
      )}

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && <small>{contact.category_name}</small>}
            </div>
            <span>{contact.email}</span>
            <span>{formatPhone(contact.phone)}</span>
          </div>
          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Editar" />
            </Link>
            <button type="button">
              <img src={trash} alt="Apagar" />
            </button>
          </div>
        </Card>
      ))}
    </Container>
  );
}
