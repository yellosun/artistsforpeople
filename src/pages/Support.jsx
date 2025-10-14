// import { DonateCodes } from "../components";

const sunbirdsLogo =
  "https://gazasunbirds.org/wp-content/uploads/2024/03/SunbirdsLogo.png";
const hilscLogo =
  "https://houstonimmigration.org/wp-content/uploads/2023/12/HILSC_Logo_White-232x117.png";
const matchLogo =
  "https://matchouston.org/sites/all/themes/match/images/match-logo.svg";

export default function Support() {
  return (
    <div className="h-full w-[inherit]">
      <div>
        All proceeds from <span className="italic">Artists For People</span>{" "}
        will be donated to support both global and local communities
        experiencing violence and displacement. Your contributions directly fund
        the Gaza Sunbirds and Houston Immigration Legal Services Collaborative
        (HILSC).
      </div>
      <div className="flex lg:flex-row flex-col items-center mt-10">
        <a
          href="https://gazasunbirds.org/"
          target="_blank"
          rel="noreferrer"
          className="underline italic lg:w-1/2 w-full h-[200px] lg:mr-10 rounded-lg flex items-center justify-center bg-[#f6cc45]"
        >
          <img
            src={sunbirdsLogo}
            alt="Gaza Sunbirds Logo"
            className="max-w-[100px] h-auto"
          />
        </a>

        <div className="mt-4 mb-10 lg:w-1/2 ">
          <span className="font-bold">Gaza Sunbirds</span> is a para-cycling
          team of amputee athletes in Gaza using sport, community, and advocacy
          to survive and resist the continued genocide.
          <div className="mt-4">
            <a
              href="https://gazasunbirds.org/"
              target="_blank"
              rel="noreferrer"
              className="underline italic p-2 rounded-lg border "
            >
              gazasunbirds.org
            </a>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col items-center">
        <a
          href="https://houstonimmigration.org/"
          target="_blank"
          rel="noreferrer"
          className="underline italic lg:w-1/2 w-full h-[200px] lg:mr-10 rounded-lg flex items-center justify-center bg-[#001d43]"
        >
          <img src={hilscLogo} alt="HILSC Logo" className="h-[100px] w-auto" />
        </a>

        <div className="my-10 lg:w-1/2">
          <span className="font-bold">
            Houston Immigration Legal Services Collaborative (HILSC)
          </span>{" "}
          is a local coalition providing legal and direct services to immigrants
          and families targeted by ICE raids and unjust detainment.
          <div className="my-4">
            <a
              href="https://houstonimmigration.org/"
              target="_blank"
              rel="noreferrer"
              className="underline italic p-2 rounded-lg border "
            >
              houstonimmigration.org
            </a>
          </div>
        </div>
      </div>

      <div className="w-full text-center lg:my-16 border rounded-lg">
        <div className="mt-10 lg:text-4xl text-2xl font-bold">How To Donate</div>
        <div className="lg:py-4 lg:px-10">
        {/* <DonateCodes /> */}
        </div>
        <div className="italic p-4 bg-red text-white font-bold rounded-b-lg -mt-10 lg:mt-auto">
          In the note, please write "Artists For People"— along with{" "}
          <span className="underline">your email</span> if you would like a
          one-time final donation receipt sent to your inbox at the end of the
          performance.
        </div>
      </div>

      <div className="w-full border border-dashed mt-10 lg:mt-0"></div>

      <div className="font-bold my-10 text-4xl text-center">
        Other Ways to Support
      </div>
      <div>
        We’re also looking for folks who want to contribute time, services, or
        resources. If you’re a tech helper, community organizer, livestream
        wizard, flyer-distributor, or just someone who wants to help,{" "}
        <a
          href="mailto:violetdanse@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="underline italic"
        >
          reach out here!
        </a>
      </div>
      <div className="flex justify-center flex-wrap mt-10">
        <a
          href="https://gazasunbirds.org/"
          target="_blank"
          rel="noreferrer"
          className="underline italic p-2 h-[80px] w-[100px] lg:mr-10 mr-4 mt-4 lg:mt-0 rounded-lg flex items-center justify-center bg-[#f6cc45]"
        >
          <img
            src={sunbirdsLogo}
            alt="Gaza Sunbirds Logo"
            className=" h-full"
          />
        </a>
        <a
          href="https://houstonimmigration.org/"
          target="_blank"
          rel="noreferrer"
          className="underline italic p-2 h-[80px] w-[100px] lg:mr-10 mr-4 mt-4 lg:mt-0 rounded-lg flex items-center justify-center bg-[#001d43]"
        >
          <img src={hilscLogo} alt="HILSC Logo" className="w-full" />
        </a>
        <a
          href="https://matchouston.org/"
          target="_blank"
          rel="noreferrer"
          className="underline italic p-2 h-[80px] w-[100px] lg:mr-10 mr-4 mt-4 lg:mt-0 rounded-lg flex items-center justify-center bg-[#fe721c]"
        >
          <img src={matchLogo} alt="HILSC Logo" className="w-full" />
        </a>
        <a
          href="https://matchouston.org/"
          target="_blank"
          rel="noreferrer"
          className="underline italic p-2 h-[80px] w-[100px] lg:mr-10 mr-4 mt-4 lg:mt-0 rounded-lg flex items-center justify-center bg-[#573cc1]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="logo-header-fa"
            className="logo-fa header-logo"
            role="img"
            viewBox="0 0 273.6 65.7"
            fill="white"
          >
            <title id="logo-header-fa">Fractured Atlas</title>
            <g>
              <path d="M24.3 43.3l-7.8-3.5-2.6 5.7zM31.1 65.7l7.2-16-11.7-5.4zM27.9 43.7l10.9 5 3.6-8zM0 31.1l16 7.2 5.3-11.7zM39.8 49.1l5.7 2.6-2.2-10.4zM22 27.9l-5 10.9 8 3.6zM25.9 16.5l-5.8-2.6 2.2 10.4zM37.8 21.9L26.9 17l-3.7 8zM34.6 0l-7.3 16 11.8 5.3zM41.3 22.3l7.8 3.6 2.7-5.8zM48.7 26.9l-8-3.7 3 14.6zM65.7 34.6l-16-7.3-5.3 11.8z"></path>
            </g>
            <g>
              <path d="M85.6 23.4v2.2h-6v6.8h6v2.2h-6v7.7h-2.2V23.4h8.2zM95.7 34.6c1.1 2.2 3 5.5 4.4 7.7h-2.5l-4.4-7.7H91v7.7h-2.2V23.4h5.7s5.7 0 5.7 5.7c.1 3.6-2.6 5-4.5 5.5zM91 32.4h3.6c.8 0 3.3-.5 3.3-3.6 0-3.6-3.6-3.6-3.6-3.6h-3.6l.3 7.2zM115.4 42.3h-2.2l-.8-3h-6.8l-.8 3h-2.2l4.9-18.9h3l4.9 18.9zm-3.6-5.2l-2.7-11.5h-.5l-2.7 11.5h5.9zM126.3 28.6s0-3-3.6-3-3.6 3.6-3.6 3.6v7.7s0 3.6 3.6 3.6 3.6-3 3.6-3h2.2s0 5.2-5.7 5.2-5.7-5.7-5.7-5.7v-7.7s0-5.7 5.7-5.7 5.7 5.2 5.7 5.2l-2.2-.2zM141.9 23.4v2.2h-4.7v16.7H135V25.6h-4.7v-2.2h11.6zM155.9 23.4v13.1s0 5.7-5.7 5.7-5.7-5.7-5.7-5.7V23.4h2.2v13.1s0 3.6 3.6 3.6 3.6-3.6 3.6-3.6V23.4h2zM166.8 34.6c1.1 2.2 3 5.5 4.4 7.7h-2.5l-4.4-7.7h-2.2v7.7H160V23.4h5.7s5.7 0 5.7 5.7c-.2 3.6-2.9 5-4.6 5.5zm-4.6-2.2h3.6c.8 0 3.3-.5 3.3-3.6 0-3.6-3.6-3.6-3.6-3.6h-3.6v7.1h.3v.1zM184.6 23.4v2.2H177v5.5h6v2.2h-6v6.8h7.7v2.2h-9.9V23.4h9.8zM199.4 28.9v7.7s0 5.7-5.7 5.7H188V23.4h5.7s5.7 0 5.7 5.5zm-2.2 0c0-3.6-3.6-3.6-3.6-3.6H190v14.5h3.6c3.6 0 3.6-3.6 3.6-3.6v-7.3zM223.8 42.3h-2.2l-.8-3H214l-.8 3H211l4.9-18.9h3l4.9 18.9zm-3.6-5.2l-2.7-11.5h-.5l-2.7 11.5h5.9zM234.7 23.4v2.2H230v16.7h-2.2V25.6h-4.7v-2.2h11.6zM239.7 23.4v16.7h6.3v2.2h-8.5V23.4h2.2zM260.8 42.3h-2.2l-.8-3H251l-.8 3H248l4.9-18.9h3l4.9 18.9zm-3.6-5.2l-2.7-11.5h-.5l-2.7 11.5h5.9zM273.6 37.6c0 3-2.5 4.7-5.7 4.7h-4.1v-2.2h4.1s3.3 0 3.3-2.7c0-3-8.8-4.9-8.8-9.6 0-3 2.5-4.7 5.7-4.7h4.1v2.5h-4.1s-3.3 0-3.3 2.5c.1 3.2 8.8 5.2 8.8 9.5z"></path>
            </g>
          </svg>
        </a>
      </div>
      <div className="w-full border border-dashed mt-10"></div>

      <div className="font-bold my-10 text-4xl text-center">
        Donation Receipts
      </div>
      <div className="p-4 mb-20 border rounded-lg">
        All donations— made anonymously, transparently, and through ticket
        sales— will be shared here in this section along with all donation
        receipts two weeks following the performance date. Please check back to
        this section no later than{" "}
        <span className="underline">December 22, 2025</span> to view in full
        transparency all financial records and receipts.
      </div>
    </div>
  );
}
