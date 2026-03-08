
import Ap from "./components/Greeting";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
 export default function App(){
  return (
    <>
    
    <div className="min-h-screen bg-blue-50 text-slate-900   dark:bg-slate-800 ">
    {/* <Ap /> */}
    < Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
    </>
  )
 }