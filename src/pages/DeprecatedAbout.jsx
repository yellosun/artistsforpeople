import clsx from "clsx";
import { Link } from "react-router-dom";

import violet from "../assets/poster.png";
import poster from "../assets/poster.png";

const matchLogo =
  "https://matchouston.org/sites/all/themes/match/images/match-logo.svg";
const applyPDF =
  "https://docs.google.com/forms/d/e/1FAIpQLSeOPrZ0qgmmp1cqn9_08WtkePqnL-YLSyBmpM1FSFtG89Uh2A/viewform";

export default function About() {
  return (
    <div className=" mb-10 flex flex-col items-center">
      <div className="flex items-center lg:flex-row flex-col">
        <div className="lg:text-6xl text-2xl mb-10 text-center font-bold lg:w-1/2 lg:-mt-10">
          Humanity Benefit Concert <br />
          For Gaza Supplies & Immigrant Aid in Houston
        </div>
        <div className="max-w-[300px] lg:w-1/2 lg:max-w-full">
          <img
            src={poster}
            className=""
            alt="first draft of marketing poster on brown parchment paper that says call to action"
          />
          <div className="italic text-xs mb-10 text-center">
            First draft of initial concert poster by David
          </div>
        </div>
      </div>
      <div className={border}></div>
      <div className="font-bold mb-4 text-center text-2xl">What is this?</div>
      <div className="flex lg:flex-row flex-col items-center">
        <div className="lg:w-1/2">
          <span className="italic">Artists For People</span> is a one-night
          community benefit concert that brings together local Houston artists
          in solidarity with global and local struggles for justice. Through
          live performance, resource-sharing, and fundraising, we aim to support
          children and families in Gaza impacted by genocide, as well as Houston
          neighbors affected by recent ICE raids and detentions. Our mission is
          to use art as a tool for collective action, resistance, and resource
          redistribution.
        </div>
        <div className="flex justify-center flex-wrap mt-6 lg:mt-0 lg:w-1/2">
          {contributors.map(({ name, color }) => {
            return (
              <div key={name} className={clsx(contributorStyle, color)}>
                {name}
              </div>
            );
          })}
        </div>
      </div>
      <div className={border}></div>
      <div className="font-bold mb-4 text-center text-2xl">How can I help?</div>
      <div>
        This is not being produced by an organization or institution—just a
        person hoping to unite folks upset by the current national and global
        socio/political climate and want to do something. If that sounds like
        you too, please don't hesitate to reach out to collaborate. If you'd
        like to join the above list of collaborators for our December 8th
        concert, please apply below!
      </div>
      <div className="w-full text-center my-10">
        <a
          href={applyPDF}
          target="_blank"
          rel="noreferrer"
          className="lg:text-2xl italic font-bold p-4 bg-red text-white rounded-lg shadow-md"
        >
          Join The Concert (by Aug 31)
        </a>
      </div>
      <div className={border}></div>
      <div className="font-bold mb-4 text-center text-2xl">Who are you?</div>
      <div className="flex lg:flex-row flex-col items-center mb-10 justify-center">
        <div className="lg:w-1/2 w-full lg:mr-10 mt-4 mb-10 lg:mb-0">
          <img
            src={violet}
            alt="violet moon portait"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 w-full">
          <span className="font-bold">Hi, I'm Violet Moon (they/them).</span>{" "}
          This project is an extension of my arts advocacy efforts and activism
          throughout Houston, Texas— now extending to our larger global human
          community. To reach out for anything benefit concert-related, I'm the
          one on the other side. If you'd like or need to know more info about
          myself, you can find that{" "}
          {/* <Link to="/about" className="underline">
            here
          </Link> */}
          .
        </div>
      </div>
    </div>
  );
}

const border = clsx("border border-dashed w-full my-10");
const contributorStyle = clsx(
  "mt-4 font-bold text-center uppercase text-xs leading-none tracking-wider p-2 h-[40px] w-[100px] mr-4 rounded-lg flex items-center justify-center"
);

const FracturedAtlasLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="logo-header-fa"
    className="logo-fa header-logo"
    role="img"
    viewBox="0 0 273.6 65.7"
    fill="#fff"
  >
    <title id="logo-header-fa">Fractured Atlas</title>
    <g>
      <path d="M24.3 43.3l-7.8-3.5-2.6 5.7zM31.1 65.7l7.2-16-11.7-5.4zM27.9 43.7l10.9 5 3.6-8zM0 31.1l16 7.2 5.3-11.7zM39.8 49.1l5.7 2.6-2.2-10.4zM22 27.9l-5 10.9 8 3.6zM25.9 16.5l-5.8-2.6 2.2 10.4zM37.8 21.9L26.9 17l-3.7 8zM34.6 0l-7.3 16 11.8 5.3zM41.3 22.3l7.8 3.6 2.7-5.8zM48.7 26.9l-8-3.7 3 14.6zM65.7 34.6l-16-7.3-5.3 11.8z"></path>
    </g>
    <g>
      <path d="M85.6 23.4v2.2h-6v6.8h6v2.2h-6v7.7h-2.2V23.4h8.2zM95.7 34.6c1.1 2.2 3 5.5 4.4 7.7h-2.5l-4.4-7.7H91v7.7h-2.2V23.4h5.7s5.7 0 5.7 5.7c.1 3.6-2.6 5-4.5 5.5zM91 32.4h3.6c.8 0 3.3-.5 3.3-3.6 0-3.6-3.6-3.6-3.6-3.6h-3.6l.3 7.2zM115.4 42.3h-2.2l-.8-3h-6.8l-.8 3h-2.2l4.9-18.9h3l4.9 18.9zm-3.6-5.2l-2.7-11.5h-.5l-2.7 11.5h5.9zM126.3 28.6s0-3-3.6-3-3.6 3.6-3.6 3.6v7.7s0 3.6 3.6 3.6 3.6-3 3.6-3h2.2s0 5.2-5.7 5.2-5.7-5.7-5.7-5.7v-7.7s0-5.7 5.7-5.7 5.7 5.2 5.7 5.2l-2.2-.2zM141.9 23.4v2.2h-4.7v16.7H135V25.6h-4.7v-2.2h11.6zM155.9 23.4v13.1s0 5.7-5.7 5.7-5.7-5.7-5.7-5.7V23.4h2.2v13.1s0 3.6 3.6 3.6 3.6-3.6 3.6-3.6V23.4h2zM166.8 34.6c1.1 2.2 3 5.5 4.4 7.7h-2.5l-4.4-7.7h-2.2v7.7H160V23.4h5.7s5.7 0 5.7 5.7c-.2 3.6-2.9 5-4.6 5.5zm-4.6-2.2h3.6c.8 0 3.3-.5 3.3-3.6 0-3.6-3.6-3.6-3.6-3.6h-3.6v7.1h.3v.1zM184.6 23.4v2.2H177v5.5h6v2.2h-6v6.8h7.7v2.2h-9.9V23.4h9.8zM199.4 28.9v7.7s0 5.7-5.7 5.7H188V23.4h5.7s5.7 0 5.7 5.5zm-2.2 0c0-3.6-3.6-3.6-3.6-3.6H190v14.5h3.6c3.6 0 3.6-3.6 3.6-3.6v-7.3zM223.8 42.3h-2.2l-.8-3H214l-.8 3H211l4.9-18.9h3l4.9 18.9zm-3.6-5.2l-2.7-11.5h-.5l-2.7 11.5h5.9zM234.7 23.4v2.2H230v16.7h-2.2V25.6h-4.7v-2.2h11.6zM239.7 23.4v16.7h6.3v2.2h-8.5V23.4h2.2zM260.8 42.3h-2.2l-.8-3H251l-.8 3H248l4.9-18.9h3l4.9 18.9zm-3.6-5.2l-2.7-11.5h-.5l-2.7 11.5h5.9zM273.6 37.6c0 3-2.5 4.7-5.7 4.7h-4.1v-2.2h4.1s3.3 0 3.3-2.7c0-3-8.8-4.9-8.8-9.6 0-3 2.5-4.7 5.7-4.7h4.1v2.5h-4.1s-3.3 0-3.3 2.5c.1 3.2 8.8 5.2 8.8 9.5z"></path>
    </g>
  </svg>
);

const contributors = [
  { name: <FracturedAtlasLogo />, color: "bg-[#573cc1]" },
  {
    name: <img src={matchLogo} alt="match Logo" className="w-full" />,
    color: "bg-[#fe721c]",
  },
  { name: "Caroline Duble", color: "bg-[brown]/50" },
  { name: "David", color: "bg-[blue]/10" },
  { name: "Mollie Miller", color: "bg-[purple]/80" },
  { name: "Ellie Chen", color: "bg-[lightblue]/80" },
  { name: "Persi Mey", color: "bg-[yellow]/80" },
  { name: "Eduardo Zavala", color: "bg-[green]/30" },
  { name: "Violet Moon", color: "bg-[hotpink]/80" },
  // add all performing artists
];
