import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/AlbumCard.css';
import AlbumCard from './components/AlbumCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <AlbumCard />
        </div>
        <div className='col-md-4'>
          <AlbumCard />
        </div>
        <div className='col-md-4'>
          <AlbumCard />
        </div>
      </div>
    </div>
  </React.StrictMode>
);