import Header from "./components/header/Header";
import About from "./sections/About";
import Home from "./sections/Home";

const App: React.FC<{}> = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <Home />
      <About />
    </div>
  )
}

export default App;
