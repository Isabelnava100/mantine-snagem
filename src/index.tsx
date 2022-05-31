import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import './assets/styles/index.css';

import Home from './pages/HomePage';
import SharedLayout from './pages/SharedLayout';
import Register from './pages/auth/Register';
import Test from './pages/marketplace/test';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider theme={{
      colorScheme:'dark',
      fontFamily:"ManropeMedium",
      primaryShade:8,
      primaryColor:'grape'
    }} withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="register" element={<Register/>} /> 
            <Route path="marketplace" element={<Test/>} /> 
          </Route>
        </Switch>
      </BrowserRouter>

    </MantineProvider>
    
  </React.StrictMode>
);

