import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopMenubar from './Components/Includes/TopMenubar';
import Footer from './Components/Includes/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Router>
        <TopMenubar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about-us" component={About}></Route>
          <Route path="/contact-us" component={Contact}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
