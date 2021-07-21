
import './styles/index.css';
import './styles/font.scss';
import Landing from './sections/Landing';
import Shop from './sections/Shop';
import Clients from './sections/Clients';
import AboutUs from './sections/AboutUs';
import Artists from './sections/Artists';
import Footer from './sections/Footer';

const App = () => {
  return <div>
    <Landing />
    <AboutUs />
    <Shop />
    <Clients />
    <Artists />
    <Footer />
  </div>
}


export default App;
