import React from 'react';
import './App.css';
import { List } from './components/List/List';

function App() {
  const cards = [
    {
      title: 'asdasdas',
      description: 'tryuiuytfghj'
    },
    {
      title: 'asdasdas 2',
      description: 'tryuiuytfghj 2'
    }
  ];

  return <List cards={cards} />;
}

export default App;
