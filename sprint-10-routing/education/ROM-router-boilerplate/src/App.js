
import './App.css';
import Home from './Home';
import Users from './Users';
import About from './About';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
     
      <header className="App-header">
          Learn React
      </header>
      <nav className='App-nav'>
        <ul>
          <li> <a href="\">Home</a></li>
          <li> <a href="#">About</a></li>
          <li> <a href="#">Users</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
