export enum SectionId {
    Home = 0,
    About = 1,
    Skills = 2,
    Projects = 3,
    Contact = 4,
}

const useScroll = () => {
    const scrollToSection = (sectionId: SectionId) => {
        scroll({
            top: window.innerHeight * sectionId,
            left: 0,
            behavior: 'smooth'
        })
    };

    return scrollToSection;
}

export default useScroll;