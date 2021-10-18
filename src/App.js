import { BrowserRouter , Switch,Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Contact from './Pages/Contact/Contact';
import Doctors from './Pages/Doctors/Doctors';
import Home from './Pages/Home/Home';
import Notfound from './Pages/Notfound/Notfound';
import Services from './Pages/Services/Services';

function App() {
  return (
    
    <BrowserRouter>
       <Header></Header>
      <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
        <Route path="/home">
            <Home></Home>
          </Route>
        <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
        <Route path="/services">
            <Services></Services>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="*">
            <Notfound></Notfound>
          </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
