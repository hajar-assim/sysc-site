import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProgramTree from './Pages/ProgramTree';
import Years from './Pages/Years';
import Calculator from './Pages/Calculator';

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
