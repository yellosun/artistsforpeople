import layout from "../assets/layout.png";
import seating from "../assets/seating.jpg";
import stage from "../assets/stage.jpg";
import dressing from "../assets/dressingroom.png";

export default function Performers() {
  return (
    <div className="mb-10">
      <div className="text-center mb-10 mt-4">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeOPrZ0qgmmp1cqn9_08WtkePqnL-YLSyBmpM1FSFtG89Uh2A/viewform"
          target="_blank"
          rel="noreferrer"
          className="lg:text-2xl italic mb-10 font-bold p-4 bg-red text-white rounded-lg shadow-md"
        >
          Apply by August 31, 2025
        </a>
      </div>
      <div className="font-bold mb-2">Background</div>
      <div>
        This is not being produced by an organization or institution—just a
        person hoping to unite folks upset by the current national and global
        socio/political climate and want to do something. This is fully
        self-run, community-sustained, and operating on limited tech and
        resources, so we’re asking that proposals remain as simple and
        self-sufficient as possible. The more streamlined the piece, the more
        likely we can include it. Minimal set-up, minimal props, and low-tech
        needs are ideal.
      </div>
      <div className="font-bold mt-10 mb-2">
        We are accepting the following types of proposals:
      </div>
      <div>
        - Dance or movement-based works (solo or group)
        <br />
        - Spoken word, poetry, or monologues
        <br /> - Short theatre pieces
        <br />- Live music or vocal performances (solo or group; instrumental or
        a cappella)
        <div className="font-bold mt-10 mb-2">Guidlines</div>
        - Pieces must be between 3 and 7 minutes in length.
        <br />- Music/vocal performances must be self-amplified (e.g.,
        battery-powered amps). We are unable to provide a full sound system.
        <br />- Each artist or group will receive one lighting cue during their
        piece. Please plan your tech needs accordingly.
        <br />- This is an unpaid performance, as all funds raised will be
        donated to support humanitarian efforts.{" "}
        <span className="font-bold">
          However, we have been able to offer photo and video documentation
          generously donated by fellow local artist,
          <a
            href="https://www.instagram.com/ez.photo/"
            target="_blank"
            rel="noreferrer"
            className="underline ml-2 mt-2 mb-8"
          >
            Eduardo Zavala
          </a>
          .
        </span>{" "}
        We will also have a{" "}
        <span className="underline">livestream option available</span> that we
        will be able to provide after produiction to performers for live
        documention.
        <div className="font-bold mt-10 mb-2">Event Information</div>
        Event Timing:{" "}
        <span className="font-bold">December 8th, 2025 at 7:30PM</span>
        <div>
          Event Address:{" "}
          <a
            href="https://matchouston.org/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            MATCH, Match Box 1
          </a>
        </div>
        For questions or clarification,
        <a
          href="mailto:violetdanse@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="underline italic ml-2 mt-2 mb-8"
        >
          contact the event coordinator (Violet Moon).
        </a>
        <div className="font-bold mt-10 mb-2">
          Technical Specs
          <a
            href="https://matchouston.org/technical-specifications"
            target="_blank"
            rel="noreferrer"
            className="underline font-normal text-sm italic ml-2 mt-2 mb-8"
          >
            Provided by MATCH
          </a>
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="mr-4 mt-4">
            <div className="italic text-sm">
              Confirmed layout for the performance
            </div>
            <img
              src={layout}
              alt="drawing from above of match box 1 seating layout"
              className="w-[300px] rounded-lg"
            />
          </div>
          <div className="mr-4 mt-4">
            <div className="italic text-sm">View of seating for audience</div>
            <img
              src={seating}
              alt="rows of chairs"
              className="w-[300px] rounded-lg"
            />
          </div>
          <div className="mr-4 mt-4">
            <div className="italic text-sm">
              Stage view (*this is NOT our seating layout*)
            </div>
            <img
              src={stage}
              alt="full stage view from corner of audience with piano in the center and chairs in a U-shape"
              className="w-[300px] rounded-lg"
            />
          </div>
          <div className="mr-4 mt-4">
            <div className="italic text-sm">
              Building layout (*we are using Stage A*)
            </div>
            <img
              src={dressing}
              alt="full drawn layout of match building"
              className="w-[300px] rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="w-full text-center lg:my-20 my-10">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeOPrZ0qgmmp1cqn9_08WtkePqnL-YLSyBmpM1FSFtG89Uh2A/viewform"
          target="_blank"
          rel="noreferrer"
          className="lg:text-2xl italic font-bold p-4 bg-red text-white rounded-lg shadow-md"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
