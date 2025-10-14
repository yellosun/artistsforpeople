import { motion } from "framer-motion";
import clsx from "clsx";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className={footerContainer}
    >
      <div className="flex justify-center items-center md:items-end flex-col">
        <div className="uppercase font-bold text-lg tracking-widest">
          Connect
        </div>

        <a
          href="https://www.instagram.com/artistsforpeople"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:text-white/60 transition-colors lg:mb-8 mb-4"
        >
          @artistsforpeople
        </a>
        <div className="uppercase font-bold text-lg tracking-widest">
          Contact
        </div>
        <a
          href="mailto:violetdanse@gmail.com"
          className="text-sm hover:text-white/60 transition-colors"
        >
          violetdanse@gmail.com
        </a>
      </div>

      <p className="text-xs text-white/30 mt-4 lg:mt-0 lg:text-left space-y-2">
        © 2025 Violet Moon. <br/>All rights reserved.
      </p>
    </motion.footer>
  );
}

const footerContainer = clsx(
  "w-full py-10 lg:py-32 lg:px-20 mt-16 border-t bg-red text-center text-white/80 flex lg:flex-row-reverse flex-col justify-between items-center"
);
