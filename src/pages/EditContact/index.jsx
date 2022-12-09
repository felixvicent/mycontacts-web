import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

import { PageHeader } from '../../components/PageHeader';
import { ContactForm } from '../../components/ContactForm';
import { Loader } from '../../components/Loader';

import toast from '../../utils/toast';

import ContactsService from '../../services/ContactsService';

export function EditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const contactFormRef = useRef(null);

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id);

        contactFormRef.current.setFieldsValues(contact);

        setIsLoading(false);
      } catch {
        history.push('/');
        toast({ type: 'danger', text: 'Contato não encontrado!' });
      }
    }

    loadContact();
  }, [id, history]);

  function handleSubmit() {}
  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader title="Editar Félix Vicente" />
      <ContactForm
        ref={contactFormRef}
        onSubmit={handleSubmit}
        buttonLabel="Salvar Alterações"
      />
    </>
  );
}
