import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import ProgramTree from './pages/resources/ProgramTree';
import Years from './pages/years/Years';
import Calculator from './pages/calculator/Calculator';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    
      <Routes>
        <Route path="/" element = {<Home/>} />
        
        <Route path="/years" element = {<Years/>} />
        <Route path="/programtree" element = {<ProgramTree/>} />
        <Route path="/calculator" element = {<Calculator/>} />
        
      </Routes>
      
      </div>
  </BrowserRouter>
  );
}

export default App;
