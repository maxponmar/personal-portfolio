import SocialIconModel from "./SocialIcon.model";

const SocialIcon: React.FC<{ socialIcon: SocialIconModel }> = ({ socialIcon }) => {
    return (
        <a className="mx-3" href={socialIcon.href} target="_blank">
            <img className="h-7 lg:h-10" src={socialIcon.icon} />
        </a>
    )
}
export default SocialIcon;