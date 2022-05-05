import Section from "../../components/Section";
import SkillIcon from "./components/SkillIcon";
import SkillSections, { Skill, SkillSection } from "./data/skillSections";
import skillsBlob from "../../assets/skills-blob.svg";

const Skills = () => {
    return (
        <Section title="Skills">
            <div className="flex flex-col items-center justify-center relative">
                <p className="text-xl sm:text-2xl mb-5">Top-level industry technologies to build your next awesome project.</p>
                {SkillSections.map((section: SkillSection, index) =>
                    <div className="mt-5">
                        <h3 className="text-xl font-bold">{section.title}</h3>
                        <div className="flex gap-4 mt-5" key={index}>
                            {section.skills.map((skill: Skill, index) =>
                                <SkillIcon title={skill.name} icon={skill.icon} />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </Section>
    )
}
export default Skills;