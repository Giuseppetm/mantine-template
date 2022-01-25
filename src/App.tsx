import React from 'react';
import Content from './Views/Content';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { MantineProvider } from '@mantine/core';
import { TypographyStylesProvider } from '@mantine/core';

function App() {
  let [colorScheme, setColorScheme] = React.useState("light");
  let [colors, setColors] = React.useState(null);

  return (
    <MantineProvider
      theme={{
        colorScheme: colorScheme === "light" ? "light" : "dark",
      }}
    >
      <TypographyStylesProvider>
        <Header />
        <Content />
        <Footer />
      </TypographyStylesProvider>
    </MantineProvider>
  );
}

export default App;