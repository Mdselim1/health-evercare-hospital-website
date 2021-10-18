import { BrowserRouter , Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Notfound from './Pages/Notfound/Notfound';

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
        <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
