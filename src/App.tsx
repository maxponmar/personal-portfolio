import Header from "./components/header/Header";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Home from "./sections/home/Home";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";

const App = () => {
  return (
    <div className="bg-black text-white scroll-smooth">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;
