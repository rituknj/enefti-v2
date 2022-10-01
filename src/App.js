import logo from './logo.svg';
import './App.css';
import Headernav from './Components/Headernav';
import Navbar from './Components/Navbar';
import Magician from './Components/Magician';
import Purpose from './Components/Purpose';
import Numbers from './Components/Numbers';
import Holders from './Components/Holders';
// import Main from './Components/Main';
import Faq from './Components/Faq';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Headernav/>
      <Navbar/>
      {/* <Main/> */}
      <Magician/>
      <Purpose/>
      <Numbers/>
      <Holders/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
