import React from 'react';
import Book from './components/Book';
import './App.css';
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  return (
    <div className="container">
        {/* <HeaderComponent/> */}
        <Book />
        {/* <FooterComponent/> */}
    </div>
  );
}

export default App;
