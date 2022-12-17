import { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import useSafeAsyncAction from '../../hooks/useSafeAsyncAction';

import toast from '../../utils/toast';

import ContactsService from '../../services/ContactsService';
import Presentation from './Presentation';

export default function Container() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const contactFormRef = useRef(null);

  const history = useHistory();

  const { id } = useParams();

  const safeAsyncAction = useSafeAsyncAction();

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id);

        safeAsyncAction(() => {
          contactFormRef.current.setFieldsValues(contact);

          setIsLoading(false);
          setContactName(contact.name);
        });
      } catch {
        safeAsyncAction(() => {
          history.push('/');
          toast({ type: 'danger', text: 'Contato não encontrado!' });
        });
      }
    }

    loadContact();
  }, [id, history, safeAsyncAction]);

  async function handleSubmit(contact) {
    try {
      const contactData = await ContactsService.updateContact(id, contact);

      setContactName(contactData.name);

      toast({ type: 'success', text: 'Contato editado com sucesso!' });
    } catch {
      toast({ type: 'danger', text: 'Ocorreu um erro ao editar contato!' });
    }
  }
  return (
    <Presentation
      contactFormRef={contactFormRef}
      onSubmit={handleSubmit}
      contactName={contactName}
      isLoading={isLoading}
    />
  );
}
