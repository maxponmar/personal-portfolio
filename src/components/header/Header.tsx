import SectionLink from "./Link";

const Header: React.FC<{}> = () => {
    return (
        <header className="w-screen text-center font-bold text-white bg-slate-900 fixed top-0 z-50">
            <SectionLink title="Home" />
            <SectionLink title="About" />
            <SectionLink title="Skills" />
            <SectionLink title="Projects" />
            <SectionLink title="Contact" />
        </header>
    )
}
export default Header;