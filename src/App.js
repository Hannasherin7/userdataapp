import logo from './logo.svg';
import './App.css';
import { Adduser } from './components/Adduser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Searchuser } from './components/Searchuser';
import { Deleteuser } from './components/Deleteuser';
import { ViewPro, Viewall } from './components/ViewPro';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={(<Adduser/>)}/>
      <Route path='/search'element={(<Searchuser/>)}/>
      <Route path='/delete'element={(<Deleteuser/>)}/>
      <Route path='/viewall'element={(<ViewPro/>)}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
