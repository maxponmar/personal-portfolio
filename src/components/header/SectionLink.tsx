import useScroll, { SectionId } from "./ScrollHook";

const SectionLink: React.FC<{ title: string, sectionId: SectionId }> = ({ title, sectionId }) => {
    const scrollToSection = useScroll();
    return (
        <p className="inline-block mx-2 py-1 cursor-pointer" onClick={() => {
            scrollToSection(sectionId);
        }}>{title}</p>
    )
}
export default SectionLink;