import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';

import defaltTheme from './assets/styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaltTheme}>
      <GlobalStyles />
      <h1>MyContacts</h1>
    </ThemeProvider>
  );
}

export default App;
