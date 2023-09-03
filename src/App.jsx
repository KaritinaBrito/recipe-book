import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/HomePage';
import Error from './pages/ErrorPage/ErrorPage';
import Category from './pages/CategoryPage/CategoryPage';
import MealDetails from './pages/MealDetailsPage/MealDetailsPage';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Sidebar/>
      <Routes>
        <Route path='/' element={< Home/>}/>
        <Route path='/meal/:id' element={< MealDetails/>}/>
        <Route path='/meal/category/:name' element={< Category />}/>
        <Route path='*' element={< Error/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
