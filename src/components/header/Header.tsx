import Button from "../Button";
import SectionLink from "./Link";

const Header: React.FC<{}> = () => {
    return (
        <header className="w-screen h-10 text-center font-bold text-white text-sm bg-slate-900 fixed top-0 z-50 flex">
            <div className="m-auto flex">
                <SectionLink title="Home" />
                <SectionLink title="About" />
                <SectionLink title="Skills" />
                <SectionLink title="Projects" />
            </div>
            {/* absolute right-10 top-1 */}
            <Button title="Contact" customClass="h-8 m-auto right-10 top-1 sm:absolute" />
        </header>
    )
}
export default Header;