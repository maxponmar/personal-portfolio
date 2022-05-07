import SocialCardModel from "./SocialCard.model";

const SocialCard = ({ socialCard }: { socialCard: SocialCardModel }) => {
    return (
        <div className="w-5/6 sm:w-3/4 md:w-1/3 lg:w-1/3 px-5 py-1 my-2 lg:mx-2 text-sm bg-purple-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
            <h3>{socialCard.title}</h3>
            <a href={socialCard.href} target="_blank">
                <img className="h-7 lg:h-10 m-auto" src={socialCard.icon} />
            </a>
        </div>
    )
}
export default SocialCard;