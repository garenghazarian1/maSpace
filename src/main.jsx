import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import MySpace from './pages/MySpace';
import Apps from './pages/Apps';
import ToDoList from './pages/ToDoList';
import NotFound from './components/NotFound';
import StarryBackground from './StarryBackground';
import Shop from './eshop/Shop';
import ProductsDetail from './eshop/ProductsDetail';

import LoginPage from './login/LoginPage';
import NavBar from './components/NavBar';
import Footer from './pages/Footer';
import ColorBox from './components/ColorBox';
import Recipes from './pages/Recipes';



ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <StarryBackground />
      <div className="flex justify-center">
        <NavBar />
      </div>
        <Routes>
          <Route path="/" element={<MySpace />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/todolist" element={<ToDoList />} />
          <Route path="/eshop" element={<Shop />} />
          <Route path="/productsdetails/:id" element={<ProductsDetail />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className="flex flex-col items-center justify-center">
       <ColorBox/>
        <ColorBox/>
        </div>
       <Footer/>
       
    </BrowserRouter>
 
);
