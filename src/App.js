import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import References from './pages/resources/References';
import Years from './pages/years/Years';
import Calculator from './pages/calculator/Calculator';
import Faq from './pages/resources/Faq';
import Chatroom from './pages/resources/Chatroom';

import Math1004 from './pages/years/coursesData/MATH1004/Math1004';
import Chem1101 from './pages/years/coursesData/Chem1101';


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
        <Route path="/chatroom" element = {<Chatroom/>} />

        <Route path = "/years/Math1004" element = {<Math1004/>} />
        <Route path = "/years/Chem1101" element = {<Chem1101/>} />
        
      </Routes>

      </div>
  </BrowserRouter>
  );
}

export default App;
