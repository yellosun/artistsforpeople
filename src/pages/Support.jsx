import { motion } from "framer-motion";
import clsx from "clsx";

const fadeSlide = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const orgs = [
  {
    name: "Gaza Sunbirds",
    logo: "https://gazasunbirds.org/wp-content/uploads/2024/03/SunbirdsLogo.png",
    description:
      "A para-cycling team of amputee athletes in Gaza using sport, community, and advocacy to survive and resist ongoing violence.",
    link: "https://gazasunbirds.org/",
    bg: "bg-[#f6cc45] text-[black]",
  },
  {
    name: "Houston Immigration Legal Services Collaborative (HILSC)",
    logo: "https://houstonimmigration.org/wp-content/uploads/2023/12/HILSC_Logo_White-232x117.png",
    description:
      "A local coalition providing legal and direct services to immigrants and families targeted by ICE raids and unjust detainment.",
    link: "https://houstonimmigration.org/",
    bg: "bg-[#001d43] text-white",
  },
  // {
  //   name: "MATCH",
  //   logo: "https://matchouston.org/sites/all/themes/match/images/match-logo.svg",
  //   description:
  //     "MATCH Houston supports local artists and creative projects, ensuring resources and visibility for community-driven art.",
  //   link: "https://matchouston.org/",
  //   bg: "bg-[#fe721c]",
  // },
];

export default function Support() {
  return (
    <section className={container}>
      {/* Hero / Primary Donation */}
      <motion.div
        className="text-center flex flex-col items-center mb-16"
        initial="hidden"
        animate="visible"
        variants={fadeSlide}
      >
        <h1 className="text-4xl font-bold mb-4">Support Our Cause</h1>
        <p className="text-lg mb-6">
          Make a tax-deductible donation via Fractured Atlas <br />
          for HILSC and Gaza Sunbirds
        </p>
        <a
          href="https://fundraising.fracturedatlas.org/global-local-community-benefit-concert"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 font-semibold text-white rounded-xl bg-gradient-to-r from-red to-red/60 hover:opacity-90 transition"
        >
          Donate Now
        </a>
        <p className="text-xs italic mt-8 max-w-[500px] text-center text-gray-500">
          Note, you will be directed to our fiscal sponsors landing page. We
          recieve all funds donated through this platform and it allows us to
          offer you a tax-deductible reciept. After making a donation, you will
          be sent your receipt to your supplied email's inbox.
        </p>
      </motion.div>

      {/* Organizations */}
      <div className="grid gap-10 lg:grid-cols-2 mb-16">
        {orgs.map((org, i) => (
          <motion.a
            key={i}
            href={org.link}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "flex flex-col items-center justify-center text-center px-10 py-20 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300",
              org.bg
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <img
              src={org.logo}
              alt={`${org.name} logo`}
              className="h-24 w-auto mb-6"
            />
            <h3 className="font-bold text-lg mb-10">{org.name}</h3>
            <p className="text-sm">{org.description}</p>
          </motion.a>
        ))}
      </div>

      {/* Other Ways to Support */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6">Other Ways to Support</h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          We’re also looking for folks who want to contribute time, services, or
          resources. If you’re a tech helper, community organizer, livestream
          wizard, flyer-distributor, or just someone who wants to help,{" "}
          <a
            href="mailto:violetdanse@gmail.com"
            className="underline uppercase text-red font-bold hover:text-red/60"
          >
            reach out here!
          </a>
        </p>
      </motion.div>

      {/* Donation Receipts */}
      <motion.div
        className="border rounded-lg p-6 mb-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-bold text-2xl mb-4">Donation Receipts</h2>
        <p className="text-gray-700 text-lg">
          Total earnings from the Artists For People concert will be posted
          here, including exactly how all funds are divided between our partner
          organizations and internal spending for venue and marketing materials.
          Donation receipts from HILSC and Gaza Sunbirds will also be shared in
          full transparency by{" "}
          <span className="underline">December 22, 2025</span>.
        </p>
      </motion.div>
    </section>
  );
}

const container = clsx("max-w-6xl mx-auto px-6 text-gray-900");
