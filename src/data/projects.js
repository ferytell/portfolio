// Replace this placeholder content with your own projects.
// Each project can hold multiple images and/or gifs in `media`.
// type accepts "image" or "gif", both render the same way, a gif
// just keeps animating in the card and in the lightbox.

const projects = [
  {
    id: "flappish",
    title: "Flappish",
    tags: ["React", "D3", "WebSocket"],
    description: "A lighthearted game created using Python..",
    github: "https://github.com/ferytell/Flappish",
    demo: "https://ferytell.github.io/Flappish",
    media: [
      {
        src: "https://github.com/ferytell/Flappish/raw/master/assets/image.png",
        type: "image",
        alt: "Pixel Dashboard overview screen",
      },
    ],
  },
  {
    id: "spacers",
    title: "Spacers",
    tags: ["Python", "Game"],
    description: "Simple space shooter, write with python.",
    github: "https://github.com/ferytell/Flappish",
    media: [
      {
        src: "https://raw.githubusercontent.com/ferytell/spacer/master/demo-spacer.gif",
        //type: "image",
        alt: "Cartridge Notes library view",
      },
    ],
  },
  {
    id: "flashcard",
    title: "FlashCard",
    tags: ["React", "Java", "Postgresql"],
    description:
      "Web application for creating and studying flashcards, create with React, Java and Postgresql.",
    github: "https://github.com/ferytell/Flappish",
    media: [
      {
        src: "https://raw.githubusercontent.com/ferytell/dataKull/main/flashcard1.PNG",
        alt: "Cartridge Notes library view",
      },
      {
        src: "https://raw.githubusercontent.com/ferytell/dataKull/main/flashcardlogin.PNG",
        alt: "Cartridge Notes library view",
      },
    ],
  },
  {
    id: "mygram",
    title: "Project MyGram",
    tags: ["Node.js", "Postgres", "Socket.io"],
    description:
      "Developed as the final project for Hactiv8 Golang Class. MyGram is a CRUD Rest API for a social media platform focused on photo sharing, liking, and commenting.",
    media: [
      {
        src: "https://github.com/ferytell/go-jwt/raw/master/docs/image.png",
        type: "image",
        alt: "Arcade Leaderboard standings screen",
      },
    ],
  },
  {
    id: "anemoia-esp32",
    title: "Anemoia-ESP32",
    tags: ["Esp32", "DIY", "C++"],
    github: "https://github.com/ferytell/Anemoia-ESP32",
    description: "NES emulator running directly on the ESP32.",
    media: [
      {
        src: "https://raw.githubusercontent.com/ferytell/dataKull/main/IMG_20260517_160733.jpg",
        type: "image",
        alt: "Anemoia-ESP32 1",
      },
      {
        src: "https://raw.githubusercontent.com/ferytell/dataKull/main/IMG_20260517_160948.jpg",
        type: "image",
        alt: "Anemoia-ESP32 2",
      },
      {
        src: "https://raw.githubusercontent.com/ferytell/dataKull/main/IMG_20260517_161209.jpg",
        type: "image",
        alt: "Anemoia-ESP32 3",
      },
    ],
  },
  {
    id: "ubuntu-server",
    title: "Ubuntu Server",
    tags: ["Ubuntu", "Server", "DIY"],

    description: "NES emulator running directly on the ESP32.",
    media: [
      {
        src: "https://raw.githubusercontent.com/ferytell/dataKull/main/IMG_20251009_212512.jpg",
        type: "image",
        alt: "Ubuntu Server 1",
      },
      {
        src: "https://raw.githubusercontent.com/ferytell/dataKull/main/IMG_20251009_212553.jpg",
        type: "image",
        alt: "Ubuntu Server 2",
      },
      {
        src: "https://raw.githubusercontent.com/ferytell/dataKull/main/IMG_20251009_212820.jpg",
        type: "image",
        alt: "Ubuntu Server 3",
      },
    ],
  },
];

export default projects;
