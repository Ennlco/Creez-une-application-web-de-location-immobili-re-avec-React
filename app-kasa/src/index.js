import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './Styles/Css/index.css'
import Accueil from './Pages/Acceuil/'
import APropos from './Pages/APropos/'
import InfoLocation from './Pages/InfoLocation'
import Header from './Compoments/Header'
import Footer from './Compoments/Footer'
import Error from './Compoments/Error'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
      <div className='kasa-content-all'>
        <Header />
        <Routes>
          <Route path='/' element={<Accueil/>}/>
          <Route path='/APropos' element={<APropos/>}/>
          <Route path='/InfoLocation/:id' element={<InfoLocation/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
);


