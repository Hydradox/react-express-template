import { Outlet } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Output of the router */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
