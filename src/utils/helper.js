import nubbies from "../assets/images/webp/nubbies.webp"
import nekozuma from "../assets/images/webp/nekozuma.webp"
import galactium from "../assets/images/webp/galactium.webp"
import frenz from "../assets/images/webp/frenz.webp"
import { Consultation, Contract, Media, Nft, Services, WebServices } from "./icons"

export const HEADER_LIST = [
    {
        title: "Home",
        link: "#home",
    },
    {
        title: "Services",
        link: "#services",
    },
    {
        title: "Projects",
        link: "#projects",
    },
    {
        title: "About",
        link: "#about",
    },
]

export const PROJECTS_LIST = [
    {
        image: nubbies,
        imgAlt:"nubbies",
        heroName: "Nubbies",
        company: "NFT",
    },
    {
        image: nekozuma,
        imgAlt: "nekozuma",
        heroName: "Nekozuma",
        company: "NFT",
    },
    {
        image: galactium,
        imgAlt: "galactium",
        heroName: "Galactium",
        company: "NFT",
    },
    {
        image: frenz,
        imgAlt: "frenz",
        heroName: "Frenz",
        company: "NFT",
    },
]

export const SERVICES_LIST = [
    {
        icon: <Contract />,
        title: "Smart Contract",
        description:"Tailored smart contracts to fit your needs, no matter the size. No idea is too big, too small, or too degen... "
    },
    {
        icon: <WebServices />,
        title: "Web3 Services",
        description:"Tailored smart contracts to fit your needs, no matter the size. No idea is too big, too small, or too degen... "
    },
    {
        icon: <Media />,
        title: "Marketing / Media",
        description:"We have worked with some of the spaces most reputable figures to drive audiences."
    },
    {
        icon: <Consultation />,
        title: "Consultation",
        description:"Have an idea but not sure where to start? Hop on a call with us and we will help you to put plans into action."
    },
    {
        icon: <Nft />,
        title: "NFT Services",
        description:"NFT solutions from start to finish. From Initial Concept to Secondary market listings, we will guide you every step of the way to ensure your project is a successfully and seemlessly delivered come mint day."
    },
]

