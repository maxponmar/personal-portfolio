import Section from "../../components/Section";
import profile from "../../assets/profile.webp";
import SocialIcon from "../about/components/socialicon/SocialIcon";
import { emailSocialIcon, githubSocialIcon, linkedinSocialIcon } from "../about/data/socialIcons";

const Contact = () => {
  return (
    <Section title="Contact">
      <div className="mx-5 bg-purple-900 max-w-sm rounded-lg overflow-hidden shadow-lg p-5">
        <img className="rounded-full m-auto" src={profile} alt="Maximiliano Ponce Marquez" />
        <div className="px-6 py-4">
          <h3 className="font-bold text-2xl mb-2">Maximiliano Ponce Marquez</h3>
          <p className="text-base">
            Contact me
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex items-center justify-center">
          <SocialIcon socialIcon={linkedinSocialIcon} />
          <SocialIcon socialIcon={emailSocialIcon} />
          <SocialIcon socialIcon={githubSocialIcon} />
        </div>
      </div>
    </Section>
  )
}
export default Contact;