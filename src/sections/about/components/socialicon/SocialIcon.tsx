import SocialIconModel from "./SocialIcon.model";

const SocialIcon = ({ socialIcon }: { socialIcon: SocialIconModel }) => {
    return (
        <a className="mx-3" href={socialIcon.href} target="_blank">
            <img className="w-10" src={socialIcon.icon} />
        </a>
    )
}
export default SocialIcon;