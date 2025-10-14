import { show1Artists, show2Artists } from "../Lineup/constants";

export const fadeSlide = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const matchLogo =
  "https://matchouston.org/sites/all/themes/match/images/match-logo.svg";

const faLogo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="logo-header-fa"
    class="logo-fa header-logo"
    role="img"
    fill="white"
    viewBox="0 0 273.6 65.7"
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
export const faLink =
  "https://fundraising.fracturedatlas.org/global-local-community-benefit-concert";

const colors = [
  "bg-red/10",
  "bg-red/20",
  "bg-red/30",
  "bg-red/40",
  "bg-red/50",
  "bg-red/60",
  "bg-red/70",
  "bg-red/80",
  "bg-red/90",
];
export const contributors = [
  { name: "Violet Moon", color: "bg-red text-white" },
  { name: "Caroline Duble", color: "bg-red text-white" },
  { name: "Stacy Jones", color: "bg-red text-white" },
  { name: faLogo, color: "bg-[#573cc1] text-white" },
  {
    name: <img src={matchLogo} alt="MATCH Logo" className="w-full p-6" />,
    color: "bg-[#fe721c]",
  },
  ...show1Artists.map((a, idx) => ({
    name: a.name,
    color: `${colors[idx % colors.length]} text-gray-800`,
  })),
  ...show2Artists.map((a, idx) => ({
    name: a.name,
    color: `${colors[idx % colors.length]} text-gray-800`,
  })),
  { name: "... You?", color: "border border-black border-dashed" },
];
