import { PageHeader } from '../../components/PageHeader';
import { ContactForm } from '../../components/ContactForm';

export function EditContact() {
  return (
    <>
      <PageHeader title="Editar Félix Vicente" />
      <ContactForm buttonLabel="Salvar Alterações" />
    </>
  );
}
