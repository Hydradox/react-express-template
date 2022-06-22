import { Outlet, Link } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation />

      <Outlet />
    </div>
  );
}

export default App;
