import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import Booking from './component/Booking/Booking';
import NotFound from './component/NotFound/NotFound';
import Header from './component/Header/Header';
import fakeData from './component/fakeData/fakeData';
function App() {
  return (
    <div>
      
      <Router>
      <Header></Header>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/booking/:id">
               <Booking fakeData={fakeData} />
        </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
