import { Links } from "../Utils/ExternalLinks";

export const Content = {
  headerSubtext: "Subscribe.Follow.Learn()",
  consoleMessage:
    "Why are you checking my console logs?\nYou should be subscribing to us on YouTube if you have this kind of free time!\n\n- Mike, Comp-3 Interactive",

  welcomeBar: {
    header: "Who we are and what we do...",
    date: "",
    body: [
      "We are currently performing a complete overhaul on our website, this may take a little time so please bare with us! It's going to look GREAT when we're finished!",
      "",
      "",
      "",
      "We are Comp-3 Interactive. We provide useful hints, tips and tutorials on the Unity3D game engine over multiple social media platforms. Started in 2019 with one goal, to provide the tutorials we wish we had ourselves when we started to learn game development.",
      "Over the past year we have grown a nice little following over on Facebook and Instagram of developers eager to learn new things, we then branched into YouTube to be able to give a more in-depth experience.",
      "Not only that, we also offer a selection of free and paid assets which are available to download via out Itch.io page and also via GitHub for code snippets and utilities.",
      "Check out the links below to learn more about the services we offer and find links to where you can find us, or if you're in a hurry to get learning you can click here to be taken directly to our YouTube page! Just don't forget to like, comment and subscribe!",
    ],
  },
  latestSeries: {
    header: "Invaders From Outerspace - Our Latest Series",
    date: "",
    body: [
      "Our latest major release was a full 20 episode series named 'Let's Make: Invaders from Outerspace' where we go through the development of a recreation of a well loved arcade classic... Space Invaders!",
      "We take you through the entire development process from start to finish, this includes the initial project set up, sprite optimisation, mobile controls, saving and loading data, a shop interface for ship upgrades all the way to building the project and uploading it to the Google Play Store.",
      "This series comes complete with the asset pack used in the tutorial completly free! So if you aren't an art and design kind of person, no need to worry! All those assets are waiting for you! Just check out the links below to get started.",
    ],
    imgUrl: "./Images/InvadersFromOuterspace.png",
  },
  // devlogBar: {
  //   header: "We also make games occasionally",
  //   date: "",
  //   body: [
  //     "When we have a spare minute here and there we do still like to make games ourselves! Check out the link below to follow our dev logs but bare in mind... This may be empty at the moment as we aren't currently working on a game!",
  //   ],
  // },
  cards: {
    tutorials: {
      header: "YouTube",
      subheader: "Unity3D, pixel art, general coding",
      body: [
        "Primarily we bring quality YouTube tutorials revolving mainly around the Unity3D game engine. These tutorials can range from general hints and tips to utilities to full game creation series! Just like out latest Let's Make series... Let's Make: Invaders from Outerspace! Where we recreate the classic arcade game Space Invaders!",
        "Occasionally we also put some relaxing pixel art speed paintings on our channel or even some pixel art tips to help your 2D retro game workflow.",
      ],
      cardImageURL: "./Images/Illustrations/youtube.png",
      href: Links.youtube,
      footerText: "Learn More →",
    },
    facebook: {
      header: "Facebook",
      subheader: "A place to ask questions",
      body: [
        "Facebook is one of the places Comp-3 Interactive began. We started small and offered up some bite-sized tips for common Unity related issues and questions.",
        "Since growing and expanding, we now use Facebook to request feedback from the community, what kind of videos you enjoy watching, what are the pro's and con's of covering specific topics... We even take reccomendations as to what kinds of things you'd like us to cover in future videos!",
      ],
      cardImageURL: "./Images/Illustrations/facebook.png",
      href: Links.facebook,
      footerText: "Learn More →",
    },
    instagram: {
      header: "Instagram",
      subheader: "A picture paints a thousand words",
      body: [
        "Another starting point for Comp-3 Interactive. This is where the first tip was posted all those months ago! We still post hints and tips over on Instagram, the occasional peek into my own personal life through the stories and maybe even a meme or two!",
      ],
      cardImageURL: "./Images/Illustrations/instagram.png",
      href: Links.instagram,
      footerText: "Learn More →",
    },
    discord: {
      header: "Discord",
      subheader: "A place for the community",
      body: [
        "Want to chill out and have a chat with fellow devs? Head on over to our Discord server! There's a lot of extremely helpful people over there if you're having trouble, we also have showcase channels to show off your current projects or maybe you just want to chat and share memes? We don't care what you do in there, just be nice!",
      ],
      cardImageURL: "./Images/Illustrations/discord.png",
      href: Links.discord,
      footerText: "Join Us →",
    },
    assets: {
      header: "Dev Assets",
      subheader: "Free and paid game assets",
      body: [
        "Check out our latest collections of free and paid game development assets. Sprites and UI assets are over on our Itch.io page whereas code snippets and utilities are on our GitHub page.",
      ],
      cardImageURL: "./Images/Illustrations/assets.png",
      href: "/#/Assets",
      footerText: "Download →",
    },
    support: {
      header: "Support Us",
      subheader: "Help us Obi-Wan Kenobi, you're our only hope",
      body: [
        "Check out how you can help us grow and expand to bring you even more quality content!",
      ],
      cardImageURL: "./Images/Illustrations/support.png",
      href: "/#/SupportUs",
      footerText: "Support Us →",
    },
  },
};
