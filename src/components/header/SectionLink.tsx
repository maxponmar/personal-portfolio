import useScroll, { SectionId } from "../../hooks/ScrollHook";

const SectionLink = ({ title, sectionId }: { title: string, sectionId: SectionId }) => {
    const scrollToSection = useScroll();
    return (
        <p className="inline-block mx-2 py-1 cursor-pointer" onClick={() => {
            scrollToSection(sectionId);
        }}>{title}</p>
    )
}
export default SectionLink;