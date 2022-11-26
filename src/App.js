import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Home></Home>
        <Footer></Footer>
    </div>
  );
}

export default App;
