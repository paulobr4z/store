import './App.css';

import Sidebar from './components/sidebar';
import Header from './components/header';
import Section from './components/section';
import { IProducts } from './types';
import { useState } from 'react';
import { CartProvider } from './context/ItemsContext';

export default () => {
  return(
    <CartProvider >
      <Sidebar/>
      <Header />
      <Section />
    </CartProvider>
  );
}