import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { show1Artists, show2Artists } from "./constants";

const fadeSlide = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Lineup() {
  return (
    <section className={container}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeSlide}
        className="mb-16 mt-8 text-center"
      >
        <h1 className="lg:text-6xl text-4xl font-bold tracking-tight">
          Featured Performances
        </h1>
        <p className="lg:text-2xl text-lg text-red/80 tracking-widest uppercase mt-2">Performer Lineup</p>
      </motion.div>

      {/* Show One */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeSlide}
        className="mb-24"
      >
        <h2 className={showTitle}>Monday, Dec 8 · 7:30 PM</h2>
        <div className={performerGrid}>
          {show1Artists.map((performer, i) => (
            <PerformerCard key={i} performer={performer} />
          ))}
        </div>
      </motion.div>

      {/* Show Two */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeSlide}
      >
        <h2 className={showTitle}>Tuesday, Dec 9 · 7:30 PM</h2>
        <div className={performerGrid}>
          {show2Artists.map((performer, i) => (
            <PerformerCard key={i} performer={performer} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// --- Subcomponent for each performer card ---
function PerformerCard({ performer }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  const maxPreviewLength = 80;
  const isLongBio = performer.bio.length > maxPreviewLength;
  const displayBio =
    expanded || !isLongBio
      ? performer.bio
      : performer.bio.slice(0, maxPreviewLength) + "...";

  return (
    <motion.div variants={fadeSlide} className={performerCard}>
      <img
        src={performer.image}
        alt={performer.name}
        className={performerImg}
      />
      <h3 className="font-bold">{performer.name}</h3>
      <p className={bio}>
        {displayBio}
        {isLongBio && (
          <button
            onClick={toggleExpanded}
            className={readState}
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
      </p>
    </motion.div>
  );
}

// --- Styles ---
const container = clsx("max-w-6xl mx-auto px-6 pb-20 text-gray-900");
const showTitle = clsx("text-2xl px-4 lg:px-0 font-semibold mb-10 bg-red py-4 text-white -rotate-[2deg] text-center tracking-wide");
const performerGrid = clsx("grid gap-6 sm:grid-cols-2 md:grid-cols-3");
const readState = clsx("ml-1 text-red uppercase font-bold hover:text-red/80 transition-colors text-[11px] underline")
const performerCard = clsx(
  "flex flex-col items-center text-center space-y-2 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
);
const performerImg = clsx("w-full rounded-md h-40 object-cover mb-2");
const bio = clsx("text-xs text-gray-600");
