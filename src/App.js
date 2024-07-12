import './App.css'; 
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Header } from './components/Assets/Header';
import { Home } from './components/Assets/Home';
import { About } from './components/Assets/About';
import { MyService } from './components/Assets/MyService';
import { MySkill } from './components/Assets/MySkill';
import MyWork from './components/Assets/MyWork';
import ContactMe from './components/Assets/ContactMe';
import Footer from './components/Assets/Footer';
import PreLoader from './components/Assets/preLoader';
import { useEffect,  } from 'react';

function App() {

  useEffect(() => {
    AOS.init({duration: 1500})
  }, [])

  return (
    <>
      <PreLoader/>

      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#2B0945] text-white" >
        <Header/>
        <Home/>
        <About/>
        <MyService/>
        <MySkill/>
        <MyWork/>
        <ContactMe/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
