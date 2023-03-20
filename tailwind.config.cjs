/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-desktop": "url(./assets/home/background-home-desktop.jpg)",
        "home-mobile": "url(./assets/home/background-home-mobile.jpg)",
        "home-tablet": "url(./assets/home/background-home-tablet.jpg)",
        "destination-desktop":
          "url(./assets/destination/background-destination-desktop.jpg)",
        "destination-mobile":
          "url(./assets/destination/background-destination-mobile.jpg)",
        "destination-tablet":
          "url(./assets/destination/background-destination-tablet.jpg)",
        "crew-desktop": "url(./assets/crew/background-crew-desktop.jpg)",
        "crew-mobile": "url(./assets/crew/background-crew-mobile.jpg)",
        "crew-tablet": "url(./assets/crew/background-crew-tablet.jpg)",
        "technology-desktop":
          "url(./assets/technology/background-technology-desktop.jpg)",
        "technology-mobile":
          "url(./assets/technology/background-technology-mobile.jpg)",
        "technology-tablet":
          "url(./assets/technology/background-technology-tablet.jpg)",
      },
      colors: {
        primary: "#0B0D17",
        secondary: "#D0D6F9",
        outline: "rgba(151, 151, 151, .7)",
      },
      fontFamily: {
        belle: "Bellefair",
        barlow: "Barlow Condensed",
      },
    },
  },
  plugins: [],
};
