import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';
import defaltTheme from '../../assets/styles/themes/default';

import { Header } from '../Header';

import { Container } from './styles';
import { Routes } from '../../routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaltTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
