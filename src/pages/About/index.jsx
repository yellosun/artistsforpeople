import clsx from "clsx";
import { motion } from "framer-motion";
import { faLink, fadeSlide, contributors } from "./constants";

import violet from "../../assets/violet.jpg";
import firstDraftPoster from "../../assets/poster.png";
import finalPoster from "../../assets/a4p-poster.jpg";

export default function LandingPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 text-gray-900">
      {/* Hero Section */}

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeSlide}
        className="flex flex-col items-center mb-16 mt-4"
      >
        <div className="text-center flex flex-col items-center mb-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Humanity Benefit Concert
          </h1>
          <p className="text-lg lg:text-2xl lg:mb-10 mb-6">
            Supporting Gaza & Houston Immigrant Communities
          </p>
          <div className="text-gray-800 text-sm">
            <span className="italic lg:text-lg font-semibold">
              Artists For People
            </span>{" "}
            is a one-night community benefit concert that brings together
            Houston artists in solidarity with global and local struggles for
            justice. Through live performance, resource-sharing, and
            fundraising, we support children and families in Gaza affected by
            conflict, and neighbors in Houston impacted by ICE raids and
            detentions. Our mission is to use art as a tool for collective
            action, resistance, and resource redistribution.
          </div>
          <div className="mt-10">
            <a
              href={faLink}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:flex px-8 py-4 text-white font-bold bg-red text-2xl rounded-lg shadow-lg hover:opacity-90 transition"
            >
              Make A (Tax-Deductible) Donation Now
            </a>
            <a
              href={faLink}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 lg:hidden text-white font-bold bg-red rounded-lg shadow-lg hover:opacity-90 transition"
            >
              Donation Now
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mt-6">
          <div className="md:w-[45%] mb-4">
            <img
              src={finalPoster}
              alt="Final concert poster"
              className="shadow-md max-w-full"
            />
            <div className="text-xs mt-4 italic text-gray-500 text-center">
              Final poster design by Violet Moon
            </div>
          </div>
          <div className="md:w-[55%] md:ml-10">
            <img
              src={firstDraftPoster}
              alt="First draft concert poster"
              className="max-w-full"
            />
            <div className="text-xs italic  text-gray-500 text-center">
              First draft poster by David Olavarrieta-Cruz
            </div>
          </div>
        </div>
      </motion.section>

      {/* Volunteer Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeSlide}
        className="mb-20 text-center border-t border-gray-300 pt-20"
      >
        <h2 className="text-6xl font-bold mb-8">Volunteer</h2>
        <p className="text-gray-700 text-lg mb-10">
          You can still get involved! We’re looking for volunteers to help with
          technical support, community organizing, livestreaming, or general
          event assistance.
        </p>
        <a
          href="mailto:violetdanse@gmail.com"
          className="px-8 text-xl py-4 bg-blue-600 text-white rounded-lg font-bold italic shadow hover:opacity-90 transition"
        >
          Contact to Volunteer
        </a>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeSlide}
        className="flex flex-col lg:flex-row items-center mb-16 border-b border-gray-300 pb-20"
      >
        <div className="flex flex-wrap justify-center">
          {contributors.map(({ name, color }, i) => (
            <div
              key={i}
              className={clsx(
                "flex items-center justify-center p-2 w-[120px] md:rounded-md md:m-2 h-[40px] text-xs text-center",
                color
              )}
            >
              {name}
            </div>
          ))}
        </div>
      </motion.section>

      {/* About Violet */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeSlide}
        className="flex flex-col lg:flex-row items-center mb-16 gap-8"
      >
        <div className="lg:w-1/2 w-full">
          <img
            src={violet}
            alt="Violet Moon portrait"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        <div className="lg:w-1/2 w-full text-gray-800">
          <span className="font-bold">Hi, I'm Violet Moon (they/them).</span>{" "}
          This project extends my arts advocacy and activism in Houston to a
          larger global community. For any questions about the concert,
          donations, or volunteer opportunities, I'm the main contact.
        </div>
      </motion.section>
    </div>
  );
}
