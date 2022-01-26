import Content from './Views/Content';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { MantineProvider } from '@mantine/core';
import { TypographyStylesProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <TypographyStylesProvider>
        <Header />
        <Content />
        <Footer />
      </TypographyStylesProvider>
    </MantineProvider>
  );
}

export default App;