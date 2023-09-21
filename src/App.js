import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import ContactForm from './Components/ContactForm/ContactForm';
import ProfileDetails from './Components/ProfileDetails/ProfileDetails';
import Footer from './Components/Footer/Footer';
import LoadingPage from './Components/LoadingPage/LoadingPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloader = async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    preloader();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <Navbar />
          <Banner />
          <About />
          <ProfileDetails />
          <Skills />
          <Projects />
          <ContactForm />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
