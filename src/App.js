import './App.css';


import Home from './pages/home/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Years from './pages/years/Years';
import Calculator from './pages/calculator/Calculator';
import Faq from './pages/resources/Faq';


import Math1004 from './pages/years/coursesData/yearOne/Math1004';
import Ecor1041 from './pages/years/coursesData/yearOne/Ecor1041';
import Ecor1042 from './pages/years/coursesData/yearOne/Ecor1042';
import Ecor1043 from './pages/years/coursesData/yearOne/Ecor1043';
import Ecor1044 from './pages/years/coursesData/yearOne/Ecor1044';
import Ecor1045 from './pages/years/coursesData/yearOne/Ecor1045';
import Ecor1046 from './pages/years/coursesData/yearOne/Ecor1046';
import Ecor1047 from './pages/years/coursesData/yearOne/Ecor1047';
import Ecor1048 from './pages/years/coursesData/yearOne/Ecor1048';
import Phys1004 from './pages/years/coursesData/yearOne/Phys1004';
import Chem1101 from './pages/years/coursesData/yearOne/Chem1101';
import Math1104 from './pages/years/coursesData/yearOne/Math1104';
import Resources from './pages/resources/Resources';


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/courses" element = {<Years/>} />
        <Route path="/resources" element = {<Resources/>} />
        <Route path="/calculator" element = {<Calculator/>} />
        <Route path="/faq" element = {<Faq/>} />


        <Route path = "/years/Math1004" element = {<Math1004/>} />
        <Route path = "/years/Chem1101" element = {<Chem1101/>} />
        <Route path = "/years/Math1104" element = {<Math1104/>} />
        <Route path = "/years/Phys1004" element = {<Phys1004/>} />
        <Route path = "/years/Ecor1041" element = {<Ecor1041/>} />
        <Route path = "/years/Ecor1042" element = {<Ecor1042/>} />
        <Route path = "/years/Ecor1043" element = {<Ecor1043/>} />
        <Route path = "/years/Ecor1044" element = {<Ecor1044/>} />
        <Route path = "/years/Ecor1045" element = {<Ecor1045/>} />
        <Route path = "/years/Ecor1046" element = {<Ecor1046/>} />
        <Route path = "/years/Ecor1047" element = {<Ecor1047/>} />
        <Route path = "/years/Ecor1048" element = {<Ecor1048/>} />
        
        
      </Routes>

      </div>
  </BrowserRouter>
  );
}

export default App;
