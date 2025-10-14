import clsx from "clsx";
import { motion } from "framer-motion";

export default function Tabs(props) {
  const pathname = window.location.pathname;

  return (
    <div className={parent}>
      <div className={tabContainer}>
        {props.tabs?.map((tab) => {
          const selected = pathname === tab.id;
          const selectedTabStyle = selected ? "font-bold" : "text-black/50";

          return (
            <a
              key={tab.id}
              href={`${tab.id}`} // optional anchor link
              className={clsx(selectedTabStyle, tabStyle)}
            >
              {tab.display}
              {selected && (
                <motion.div
                  className={underline}
                  layoutId={props.id}
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 50,
                  }}
                />
              )}
            </a>
          );
        })}
      </div>
      <div className={border} />
    </div>
  );
}

const parent = clsx("flex flex-col mt-10 lg:w-full");
const border = clsx("-mt-[1px] h-[1px] w-full bg-[gray]/20");
const underline = clsx("mt-2 h-[2px] rounded-full w-full bg-[black]");
const tabContainer = clsx("flex w-full z-10 lg:justify-around lg:text-lg");
const tabStyle = clsx(
  "cursor-pointer text-sm uppercase tracking-widest px-2 lg:px-0 overflow-x-hidden"
);
