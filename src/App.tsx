import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import { Suspense } from 'react'
import Technologies from './components/Technology/Technologies';

const fetchTechnologies = async () => {
    const res = await fetch('./Technologies.json');

    if (!res.ok){
      throw new Error("Could not load technologies.json");
    }
    const data = await res.json();
    return data
  
};

const technologiesPromise = fetchTechnologies();

function App() {

  return (
    <>
      <NavBar />
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
    </>
  )
}

export default App
