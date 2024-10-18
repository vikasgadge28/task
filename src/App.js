import './App.css';
import Navbar from './Componets/Navbar';
import HeroSection from './Componets/HeroSection';
import FormSection from './Componets/FormSection';
import Testimonials from './Componets/Testimonials';
import Footer from './Componets/Footer';

function App() {
  return (
    
    <div className="App bg-[#F8F8F8]">
     <Navbar/>
     <HeroSection/>
     <FormSection/>
     <Testimonials/>
     <Footer/>
    </div>
  );
}

export default App;
