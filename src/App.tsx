import React from 'react';
import { Routes } from './Routes';
import { GlobalStyle } from './styles/globalStyle';

import './init';
const App = () => (
    <div>
        <GlobalStyle />
        <Routes />
    </div>
);
export default App;
