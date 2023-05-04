import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import References from './pages/resources/References';
import Years from './pages/years/Years';
import Calculator from './pages/calculator/Calculator';
import Faq from './pages/resources/Faq';


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/years" element = {<Years/>} />
        <Route path="/references" element = {<References/>} />
        <Route path="/calculator" element = {<Calculator/>} />
        <Route path="/faq" element = {<Faq/>} />
        
      </Routes>

      </div>
  </BrowserRouter>
  );
}

export default App;
