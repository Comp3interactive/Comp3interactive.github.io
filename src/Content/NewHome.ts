import * as Brands from "@fortawesome/free-brands-svg-icons";
import { Links } from "../Utils/ExternalLinks";

export const Content = {
    consoleMessage: "Why are you checking my console logs?\nYou should be subscribing to us on YouTube if you have this kind of free time!\n\n- Mike, Comp-3 Interactive",

    H1:{
        aboutComp3: 'About Comp-3 Interactive',
        upcoming: 'Upcoming Events',
        recommended: 'Recommended Series',
        findUs: 'Find Us Here',
        freeStuff: 'Free Stuff',
        play: 'Play',
    },

    mainCardText: [
        "We are Comp-3 Interactive. We provide useful hints, tips and tutorials on the Unity3D game engine over multiple social media platforms. Started in 2019 with one goal, to provide the tutorials we wish we had ourselves when we started to learn game development.",
        "Over the past year we have grown a nice little following over on Facebook and Instagram of developers eager to learn new things, we then branched into YouTube to be able to give a more in-depth experience.",
        "Not only that, we also offer a selection of free and paid assets which are available to download via out Itch.io page and also via GitHub for code snippets and utilities.",
        "Check out the links below to learn more about the services we offer and find links to where you can find us, or if you're in a hurry to get learning you can click here to be taken directly to our YouTube page! Just don't forget to like, comment and subscribe!",
    ],

    upcomingEventText:[
        "There are currently no upcoming events, check back soon for game jams and competitions!"
    ],

    recommendedText: [
        'One of our most popular series with beginners is our Lets Make: Invaders From Outerspace series.',
        'A 20 episode series where we show you, in detail, how to create your own mobile version of Space Invaders from scratch!',
        'All assets used within the project are available to download from our Itch.io page and are completely free to use in any capacity.'
    ],

    findUsContent: [{
        header: 'Learning',
        links: [
            {
                header: 'YouTube',
                body: 'Over 100 tutorials and counting!',
                icon: Brands.faYoutube,
                href: Links.youtube
            },
            {
                header: 'Facebook',
                body: 'Keep up to date with the latest Comp-3 news!',
                icon: Brands.faFacebook,
                href: Links.facebook
            },
            {
                header: 'Instagram',
                body: 'Code snippets and some general hints and tips!',
                icon: Brands.faInstagram,
                href: Links.instagram
            },
            {
                header: 'Twitter',
                body: 'I tweet occasionally',
                icon: Brands.faTwitter,
                href: Links.twitter
            }
        ]
    },
    {
        header: 'Community',
        links: [
            {
                header: 'Discord',
                body: 'Join our discord community!',
                icon: Brands.faDiscord,
                href: Links.discord
            }
        ]
    },
    {
        header: 'Downloads',
        links: [
            {
                header: 'GitHub',
                body: 'Free code snippets and utilities',
                icon: Brands.faGithub,
                href: Links.github
            },
            {
                header: 'Itch.io',
                body: 'Free and premium game assets',
                icon: Brands.faItchIo,
                href: Links.itch
            }
        ]
    },
    {
        header: 'Our Games',
        links: [
            {
                header: 'Android Games',
                body: 'We do make games too!',
                icon: Brands.faGooglePlay,
                href: Links.googleplay
            }
        ]
    },
    {
        header: 'Support Us',
        links: [
            {
                header: 'Patreon Support',
                body: 'Help us keep the lights on!',
                icon: Brands.faPatreon,
                href: Links.patreon
            }
        ]
    }
]
}