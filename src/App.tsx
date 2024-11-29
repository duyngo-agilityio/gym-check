// Libs
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Themes
import configThemes from './themes';

// Constants
import { ROUTE } from './constants';

// Pages
import {
  Category,
  Checkout,
  Dashboard,
  Details,
  NotFound,
  SubscribePackage,
} from './pages';

const App = () => (
  <ChakraProvider theme={configThemes}>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTE.CATEGORY} element={<Category />} />
        <Route path={`${ROUTE.CATEGORY_DETAILS}/:id`} element={<Details />} />
        <Route path={ROUTE.SUBSCRIBE_PACKAGE} element={<SubscribePackage />} />
        <Route path={`${ROUTE.CHECKOUT}/:id`} index element={<Checkout />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);

export default App;
