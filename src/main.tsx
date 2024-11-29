import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// Styles
import './styles/index.css';

// Libs
import { ChakraProvider } from '@chakra-ui/react';

// Themes
import configThemes from './themes/index.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={configThemes}>
      <App />
    </ChakraProvider>
  </StrictMode>,
);
