import aboutImage from "../../assets/about.webp";
import Section from "../../components/Section";
import SocialIcon from "./components/socialicon/SocialIcon";
import { emailSocialIcon, githubSocialIcon, linkedinSocialIcon } from "./data/socialIcons";

const About: React.FC<{}> = () => {
    return (
        <Section title="About">
            <div className="flex flex-col justify-center items-center">
                <img className="rounded-md w-full max-w-lg md:w-10/12 lg:w-2/3 mt-5 lg:mt-0" src={aboutImage} />
                <div className="m-2 text-xl lg:text-2xl lg:my-10 sm:w-2/3">
                    <span className="text-cyan-900 font-bold">Mechatronic Engineer &#128104;&#8205;&#127891;
                    </span> from <a className="underline underline-offset-2" href="http://www.itnogales.edu.mx/" target="_blank">Tecnológico Nacional de México - Campus Nogales</a> and <span className="text-cyan-900 font-bold">Software Developer &#10084;&#65039;
                    </span> by heart.
                </div>

                <div className="w-full flex justify-center items-center lg:flex-row lg:w-5/6">
                    <SocialIcon socialIcon={linkedinSocialIcon} />
                    <SocialIcon socialIcon={emailSocialIcon} />
                    <SocialIcon socialIcon={githubSocialIcon} />
                </div>
            </div>
        </Section>
    )
}
export default About;