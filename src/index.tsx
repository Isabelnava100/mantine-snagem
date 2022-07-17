import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { Provider } from './context/TheProvider';

import './assets/styles/index.css';

import Home from './pages/HomePage';
import SharedLayout from './pages/SharedLayout';
import Register from './pages/auth/Register';
import Test from './pages/marketplace/test';
import Forum from './pages/forum/main';

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
      <Provider>
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="register" element={<Register/>} /> 
            <Route path="marketplace" element={<Test/>} /> 
            <Route path="forum" element={<Forum/>} > 
              <Route path="thread" element={"thread"} /> 
            </Route>
            <Route path="*" element={"404 err"} /> 
          </Route>
        </Switch>
      </BrowserRouter>
      </Provider>
    </MantineProvider>
    
  </React.StrictMode>
);

