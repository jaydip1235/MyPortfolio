import logo from './logo.svg';
import './App.css';
import {Route , BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'
import './stylesheets/home.css'
import './stylesheets/header-footer.css'
import './stylesheets/courosel.css'
import './stylesheets/projects-achievements.css'
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init({
  duration:500
});
function App() {
  return (
    <div className="App">
        
         <BrowserRouter>
         
           <Route path='/' exact component={Home}/>
           <Route path='/projects' exact component={Projects}/>
           <Route path='/achievements' exact component={Achievements}/>
           <Route path='/contact' exact component={Contact}/>
         
         </BrowserRouter>

         <Footer/>

    </div>
  );
}

export default App;
