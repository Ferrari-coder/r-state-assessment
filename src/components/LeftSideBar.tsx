import { useState } from "react";

const LeftSidebar = () => {
  // State for active navigation link (default: "Activity")
  const [activeLink, setActiveLink] = useState("Activity");

  // Navigation links with corresponding icons
  const navLinks = [
    { name: "Home", icon: "/home.svg" },
    { name: "Activity", icon: "/bolt.svg" },
    { name: "Discover", icon: "/compass.svg" },
    { name: "Settings", icon: "/settings.svg" },
  ];

  return (
    <div className="xl:w-[15%] h-screen bg-white  fixed left-0 top-0 hidee">
      {/* Logo */}
      <div className="flex items-center justify-center">
        <img
          src="/logo.svg"
          alt="logo"
          className="w-[100px] h-[100px] mb-10"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col gap-12 justify-center items-center mr-20">
        {navLinks.map((link, index) => (
          <div key={index}>
            <a
              onClick={() => setActiveLink(link.name)}
              href="#"
              className={`flex items-center gap-4 text-[17px] font-semibold transition ${
                activeLink === link.name
                  ? "text-[#3579DC]" // Active state (blue)
                  : "text-[#8E97A4] hover:text-[#3579DC]" // Default & hover state
              }`}
            >
              <img src={link.icon} alt={link.name} className="w-[20px]" />
              <p>{link.name}</p>
            </a>
          </div>
        ))}
      </div>

      {/* Upgrade Banner */}
      <div className="mx-10 my-20  pt-15 bg-gradient-to-b from-[#3579DC] to-[#95D9FF] text-white p-4 rounded-lg">
        <p className="font-bold text-[16px]">GET more with PRO</p>
        <p className="text-[16px] leading-[22px] mt-[5px]">
          Upgrade to pro subscription for $9 / month
        </p>
      </div>
    </div>
  );
};

export default LeftSidebar;
