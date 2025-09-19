import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createContext } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
    export const MyContext = createContext(); 
const userName = "Grow"
root.render(
 <MyContext.Provider value={userName}>
    <App />
   </MyContext.Provider>
);

