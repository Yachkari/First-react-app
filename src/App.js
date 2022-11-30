import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Employees from './Employees';


function App() {
  return (
    <>
    <Header/>
    <Employees/>
    <Footer/>
    
    </>
  );
}

export default App;
