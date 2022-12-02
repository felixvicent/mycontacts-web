import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaltTheme from '../../assets/styles/themes/default';

import { Header } from '../Header';

import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaltTheme}>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
