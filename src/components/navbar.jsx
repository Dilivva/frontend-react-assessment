import { useState } from "react";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
  const [showSideBar, setSideBar] = useState(false);
  const location = useLocation();

  const linksData = [
    { id: 0, linkName: "home", linkUrl: "/" },
    {
      id: 1,
      linkName: "leagueDetails",
      linkUrl: "/league-details",
    },
  ];

  return (
    <nav className=" mb-6">
      <div className=" flex justify-between">
        {/* logo */}
        <p className=" font-bold text-lg">
          Sports<span className=" text-red-500">Hub</span>
        </p>
      </div>
    </nav>
  );
};
