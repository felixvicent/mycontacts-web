import { useRef } from 'react';

import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export function NewContact() {
  const contactFormRef = useRef(null);

  async function handleSubmit(contact) {
    try {
      await ContactsService.createContact(contact);

      contactFormRef.current.resetFields();

      toast({ type: 'success', text: 'Contato cadastrado com sucesso!' });
    } catch {
      toast({ type: 'danger', text: 'Ocorreu um erro ao cadastrar contato!' });
    }
  }

  return (
    <>
      <PageHeader title="Novo Contato" />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
