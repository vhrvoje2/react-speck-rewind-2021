import './App.css';
import { Route } from 'react-router-dom';
    
import Header from './components/Header/Header.js';

import Home from './pages/Home.js';
import Events from './pages/Events.js';
import Speakers from './pages/Speakers.js';
import ToDos from './pages/ToDos.js';

function App() {
  return (
    <>
      <Header />
      <Route exact path="/" component={ Home } />
      <Route path="/events" component={ Events } />
      <Route path="/speakers" component={ Speakers } />
      <Route path="/todos" component={ ToDos } />
    </>
  );
}

export default App;
