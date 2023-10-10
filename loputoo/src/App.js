import './App.css';
import Navbars from './components/Navbars.jsx';
import Tabs from './components/Tabs';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Carouselles from './components/Carouselles';
import Cards from './components/Cards';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navbars />
      <Tabs />
      <br /> <br />
      <Carouselles />
      <br /> <br />
      <Cards />
      < Footer />



    
      
    </div>
  );
}

export default App;
