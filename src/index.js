import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/AlbumCard.css';
import AlbumCard from './components/AlbumCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AlbumCard />
  </React.StrictMode>
);