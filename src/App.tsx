// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Card } from './Card';
import './App.css';

export const App = () => (
  <div className="App">
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
      <Card user={{ fullName: 'Yegor Kozlov', role: 'Husband' }} />
      <Card user={{ fullName: 'Margarita Kozlova', role: 'Wife' }} />
      <Card user={{ fullName: 'Kiso Kozlov-Yakubousky', role: 'Pet' }} />
    </div>
  </div>
);
