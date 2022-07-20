import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes as Switch, Route, Navigate, HashRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { Provider } from './context/TheProvider';

import './assets/styles/index.css';

import Home from './pages/HomePage';
import SharedLayout from './pages/SharedLayout';
import Register from './pages/auth/Register';
import Test from './pages/marketplace/test';
import Forum from './pages/forum/MainForum';
import MiniNavForum from './pages/forum/components/MiniNavForum';
import Threads from './pages/forum/MainThread';
import { NewPost } from './pages/forum/NewPost';
import { NewTopic } from './pages/forum/NewTopic';
import { Login } from './pages/auth/Login';
import { ForgotPassword } from './pages/auth/ForgotPW';
import { DashboardProfileGrid } from './pages/profile/Dashboard';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider theme={{
      colorScheme:'dark',
      fontFamily:"ManropeMedium",
      primaryShade:8,
      primaryColor:'violet'
    }} withGlobalStyles withNormalizeCSS>
      <Provider>
      <BrowserRouter>  
        <Switch>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="register" element={<Register/>} /> 
            <Route path="marketplace" element={<Test/>} /> 
            <Route path="forum" element={<MiniNavForum links={[
              {label:'MAIN FORUMS',link:'/forum/1'},
              {label:'SIDE RP',link:'/forum/2'},
              {label:'MASTER MISSIONS',link:'/forum/3'},
              {label:'QUESTS',link:'/forum/4'},
              {label:'EVENTS',link:'/forum/7'},
              {label:'PRIVATE',link:'/forum/8'},
              {label:'ARCHIVED',link:'/forum/9'},
            ]} />} > 
              <Route index element={<Forum/>} /> 
              <Route path="thread" element={<Navigate to="../" />} /> 
              <Route path="thread/:id" element={<Threads/>}/>
              <Route path="thread/:id/:page" element={<Threads/>} /> 
              <Route path="thread/:id/post" element={<NewPost/>} /> 
              <Route path=":id/new" element={<NewTopic/>} /> 
              <Route path="new" element={<NewTopic/>} /> 
            </Route>
            <Route path="login" element={<Login/>} /> 
            <Route path="forgotpw" element={<ForgotPassword/>} />
            <Route path="profile" element={<DashboardProfileGrid/>} /> 
            <Route path="*" element={"404 err"} /> 
          </Route>
        </Switch>
      </BrowserRouter>
      </Provider>
    </MantineProvider>
    
  </React.StrictMode>
);

