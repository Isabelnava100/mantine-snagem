import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import './assets/styles/index.css';

import Home from './pages/HomePage';
import SharedLayout from './pages/SharedLayout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider theme={{
      colorScheme:'dark',
      primaryShade:8,
      primaryColor:'grape'
    }} withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home/>}/>
          </Route>
        </Switch>
      </BrowserRouter>

    </MantineProvider>
    
  </React.StrictMode>
);

