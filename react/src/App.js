import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);


  const getUsers = async () => {
    fetch('/api/test')
      .then(res => res.json())
      .then(data => setUsers(data.users));
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/api/test"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={getUsers}>Get users</button>

        <p id="test">
          Usuarios: {users.length}
          {users.map(user => {
            return (
              <div key={user.name}>
                {user.name} - {user.age}
              </div>
            );
          })}
        </p>
      </header>
    </div>
  );
}

export default App;
