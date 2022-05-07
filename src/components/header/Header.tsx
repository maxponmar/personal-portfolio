import Button from "../Button";
import useScroll, { SectionId } from "../../hooks/ScrollHook";
import SectionLink from "./SectionLink";

const Header = () => {
    const scrollToSection = useScroll();
    return (
        <header className="w-screen h-10 text-center font-bold text-white text-sm bg-slate-900 fixed top-0 z-50 flex">
            <div className="m-auto flex">
                <SectionLink title="Home" sectionId={SectionId.Home} />
                <SectionLink title="About" sectionId={SectionId.About} />
                <SectionLink title="Skills" sectionId={SectionId.Skills} />
                <SectionLink title="Projects" sectionId={SectionId.Projects} />
            </div>
            <Button title="Contact" customClass="h-8 m-auto right-10 top-1 sm:absolute" onClick={() => {
                scrollToSection(SectionId.Contact);
            }} />
        </header>
    )
}
export default Header;