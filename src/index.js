import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/AlbumCard.css';
import AlbumCard from './components/AlbumCard';
import Card from './components/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <Card />
        </div>
        <div className='col-md-4'>
          <Card />
        </div>
        <div className='col-md-4'>
          <Card />
        </div>
      </div>
    </div>
  </React.StrictMode>
);