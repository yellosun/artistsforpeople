import { useState } from "react";
import clsx from "clsx";
import { Tabs } from "./components";
import logo from "./assets/artists4-logo.png";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const tabs = [
  { id: "/", display: "About" },
  { id: "/lineup", display: "Concert Lineup" },
  { id: "/support", display: "Support" },
];

export default function ArtistsForProple() {
  const [selectedTab, setTab] = useState(tabs[0]);
  const tabsProps = {
    tabs,
    selectedTab: selectedTab.id,
    setTab,
    id: "events",
  };
  return (
    <div className={parentContainer}>
      <div className="lg:w-[800px] flex-col flex justify-center items-center">
        <div className={logoContainer}>
          <div className="z-[5] bg-red h-40 w-40 rounded-full absolute"></div>
          <img
            src={logo}
            alt="text that says artists for people (logo)"
            className="z-[10] absolute"
          />
        </div>
        <Tabs {...tabsProps} />
        <div className={wrapper}>
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
}

const parentContainer = clsx(
  "h-full flex flex-col items-center bg-[#fffbf5] w-full"
);
const logoContainer = clsx(
  "w-[300px] h-[150px] mt-10 relative justify-center flex items-center"
);
const wrapper = clsx(
  "flex flex-wrap w-full justify-around items-start mt-10 px-10 lg:px-0"
);
