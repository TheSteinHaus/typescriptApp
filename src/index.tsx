import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserStore } from './components/store/store';

export const store = new UserStore();

export const Context = createContext({
  store,
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{
    store
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);