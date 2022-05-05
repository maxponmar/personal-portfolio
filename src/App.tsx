import Header from "./components/header/Header";
import About from "./sections/about/About";
import Home from "./sections/home/Home";
import Skills from "./sections/skills/Skills";

const App = () => {
  return (
    <div className="bg-black text-white scroll-smooth">
      <Header />
      <Home />
      <About />
      <Skills />
    </div>
  )
}

export default App;
