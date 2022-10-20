import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils/custom-theme';

import Header from './components/layouts/header';
import Main from './components/layouts/container';
import Footer from './components/layouts/footer';

import Pages from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Main>
        <Pages></Pages>
      </Main>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
