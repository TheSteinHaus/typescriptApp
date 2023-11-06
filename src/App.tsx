import React from 'react';

import { observer } from 'mobx-react-lite';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './pages/Todo';
import Login from './components/Authorization/components/Login';
import Signup from './components/Authorization/components/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/registration" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default observer(App);
