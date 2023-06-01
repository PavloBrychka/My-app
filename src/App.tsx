// import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import DefaultHeader from './components/conteiners/default/DefaultHeader';
import CategoryCreatePage from './components/category/create/CategoryCreatePage';
import { Route, Routes } from 'react-router-dom';
import DefaultLoyout from './components/conteiners/default/DefaultLoyout';
import HomePage from './components/Home/HomePage';

function App() {
  return (
    <>
    
    <Routes>
      <Route path="/"  element={<DefaultLoyout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="category/create" element={<CategoryCreatePage/>}/>
      </Route>
    </Routes>
    {/* <h1>Hello World</h1> */}
    {/* <HomePage/> */}
    {/* <CategoryCreatePage/> */}
    </>
  );
}

export default App;
