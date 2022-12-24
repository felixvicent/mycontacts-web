import { Route } from 'react-router-dom';

import { EditContact } from './pages/EditContact';
import { Home } from './pages/Home';
import { NewContact } from './pages/NewContact';

export function Routes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/new" component={NewContact} />
      <Route path="/edit/:id" component={EditContact} />
    </>
  );
}
