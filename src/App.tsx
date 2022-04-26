import { Animator, batch, Fade, FadeIn, Move, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import Header from "./components/header/Header";
import About from "./sections/about/About";
import Home from "./sections/home/Home";
import Skills from "./sections/skills/Skills";

const App: React.FC<{}> = () => {
  return (
    <div className="bg-black text-white scroll-smooth">
      <Header />
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -500))}>
            <Home />
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={batch(Fade(), Move(), Sticky())}>
            <About />
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={batch(Fade(), Move(0, 800), Sticky())}>
            <Skills />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  )
}

export default App;
