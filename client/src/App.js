import './App.css';
import NavBar from './Component/NavBar/nav';
import Footer from './Component/Footer/footer';
import Adoption from './Component/Adoption/adoption';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Adoption/>
      <Footer/>
    </div>
  );
}

export default App;
