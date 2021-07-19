
import './styles/index.css';
import './styles/font.scss';
import Landing from './sections/Landing';
import Shop from './sections/Shop';
import Clients from './sections/Clients';
import AboutUs from './sections/AboutUs';
import Hairstyles from './sections/HairStyles';
import Artists from './sections/Artists';
import Footer from './sections/Footer';

const App = () => {
  return <div>
    <Landing />
    <AboutUs />
    <Shop />
    <Hairstyles />
    <Clients />
    <Artists />
    <Footer />
  </div>
}


export default App;
