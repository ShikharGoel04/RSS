import logo from './logo.svg';
import './App.css';
import {Navbar,NavbarBrand} from 'reactstrap';
import {BrowserRouter} from 'react-router-dom';
import Main from './component/MainComponent';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Main />
    </div>
    </BrowserRouter>
  );
}

export default App;
