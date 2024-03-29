
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import { Fragment } from 'react';
import Footer from './common/footer/Footer'
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Sproduct from './pages/Sproduct';
import Checkout from './pages/Checkout';
import About from './pages/Tentang';


function App() {
  return (
    <div className='App'>
    <Fragment>
      <Router>
        
        <Routes>
          <Route exact path='/' element={<Main/>}/>      
          <Route exact path='/shop' element={<Shop/>}/>      
          <Route exact path='/blog' element={<Blog/>}/>      
          <Route exact path='/contact' element={<Contact/>}/>      
          <Route exact path='/about' element={<About/>}/>      
          <Route exact path='/account' element={<Account/>}/>      
          <Route exact path='/cart' element={<Cart/>}/>      
          <Route exact path='/login' element={<Login/>}/>      
          <Route exact path='/register' element={<Register/>}/>      
          <Route exact path='/sproduct' element={<Sproduct/>}/>      
          <Route exact path='/checkout' element={<Checkout/>}/>      
        </Routes>
        <Footer/>
      </Router>
    </Fragment>
    </div>
  );  
}

export default App;
