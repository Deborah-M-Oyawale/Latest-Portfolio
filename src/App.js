import './App.css';
import TopNav from './components/TopNav';
import MainContent from './components/MainContent';
import RightBar from './components/RightBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LeftBar from './components/LeftBar';

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav/>
        <LeftBar />
        <MainContent/>
        <RightBar/>
        <Switch>
          {/* <Route exact path="/">
            <Home/> 
          </Route> */}
          <Route path="/instagram">
            <instagram/> 
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}


export default App;
