
import './App.css';
import Navigation from './components/Navigation.js'
import HomePage from './components/Home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <HomePage/>
    </BrowserRouter>
     {/* <Navigation/>   */}
    </div>
  );
}

export default App;
