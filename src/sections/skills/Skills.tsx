import Section from "../../components/Section";
import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/css.svg";
import jsIcon from "../../assets/javascript.svg";
import reactIcon from "../../assets/react.svg";
import SkillIcon from "./SkillIcon";

const Skills: React.FC<{}> = () => {
    return (
        <Section title="Skils">
            <div className="flex gap-4">
                <SkillIcon title="HTML" icon={htmlIcon} />
                <SkillIcon title="CSS" icon={cssIcon} />
                <SkillIcon title="JavaScript" icon={jsIcon} />
                <SkillIcon title="ReactJS" icon={reactIcon} />
            </div>
        </Section>
    )
}
export default Skills;