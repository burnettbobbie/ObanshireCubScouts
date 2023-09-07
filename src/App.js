import './css/app.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Scouts from './pages/Scouts';
import Cubcorner from './pages/Cubcorner';
import Volunteer from './pages/Volunteer';
import Gallery from './pages/Gallery';
import Badges from './pages/Badges';
import Vhome from './pages/volunteer/Home';
import Ahome from './pages/admin/Home';
import CodeOfConduct from './pages/volunteer/CodeOfConduct';
import AboutTraining from './pages/volunteer/AboutTraining';
import Calendar from './pages/admin/Calendar';
import ManageEvents from './pages/admin/ManageEvents';
import Volunteers from './pages/admin/Volunteers';
import UsefulLinks from './pages/volunteer/UsefulLinks';
import Profile from './pages/volunteer/Profile';
import ScrollToTop from './ScrollToTop';
import MemoryGame from './components/games/MemoryGame';


const App = () =>{

  return (
    <>    
         <ScrollToTop>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/volunteer" element={<Volunteer/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/cubscouts" element={<Scouts/>}/>
          <Route path="/badges" element={<Badges/>}/>
          <Route path="/cubcorner" element={<Cubcorner/>}/>
          <Route path='/dashboard' element={<Vhome/>}/>          
          <Route path='/dashboard/training/code-of-conduct' element={<CodeOfConduct/>}/>
          <Route path='/dashboard/training/about' element={<AboutTraining/>}/>
          <Route path='/dashboard/training/useful-links' element={<UsefulLinks/>}/>
          <Route path='/dashboard/my-profile' element={<Profile/>}/>
          <Route path='/admin' element={<Ahome/>}/>          
          <Route path='/admin/events/calendar' element={<Calendar/>}/>     
          <Route path='/admin/events/manage-events' element={<ManageEvents/>}/>    
          <Route path='/admin/volunteers' element={<Volunteers/>}/> 
          <Route path='/mem' element={<MemoryGame />} />      
        </Routes>
        </ScrollToTop>
    </>
  )
}

export default App;