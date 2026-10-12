import NavBar from './components/NavBar'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
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

function Loading(){

  return (
    <div className="flex flex-col items-center gap-3 py-24">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-pink-600" />
      <p className="text-sm text-slate-400">Loading technologies...</p>
    </div>
  );
}

function App() {

  return (
    <>
      <NavBar />
      <HeroSection />
      <Suspense fallback={<Loading />}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App
