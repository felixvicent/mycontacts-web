import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaltTheme from '../../assets/styles/themes/default';

import { Header } from '../Header';
import { ContacsList } from '../ContactsList';

import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaltTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <ContacsList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
