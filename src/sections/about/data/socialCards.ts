import SocialCardModel from "../components/socialcard/SocialCard.model"
import linkedinIcon from "../../assets/linkedin.svg";
import outlookIcon from "../../assets/outlook.svg";
import githubIcon from "../../assets/github.svg";

export const linkedinCard: SocialCardModel = {
    title: "Maximiliano Ponce Marquez",
    href: "https://www.linkedin.com/in/maximiliano-ponce-marquez-a6094b216/",
    icon: linkedinIcon
}

export const emailCard: SocialCardModel = {
    title: "maxponce.marquez@outlook.com",
    href: "mailto:maxponce.marquez@outlook.com?subject=Contact from portfolio&body=Hello, Maximiliano Ponce Marquez",
    icon: outlookIcon
}

export const githubCard: SocialCardModel = {
    title: "maxponmar",
    href: "https://github.com/maxponmar",
    icon: githubIcon
}