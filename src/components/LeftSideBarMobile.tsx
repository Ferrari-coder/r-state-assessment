import { FC, useState } from "react";
import HistoryModal from "./HistoryModal";
import { FaHistory } from "react-icons/fa";

interface Props {
  sidebar?: boolean;
  setSideBar?: React.SetStateAction<boolean | any>;
}

const LeftSidebarMobile: FC<Props> = ({ sidebar, setSideBar }) => {
  // State for active navigation link (default: "Activity")
  const [activeLink, setActiveLink] = useState("Activity");
  // State for managing the visibility of the history modal
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Navigation links with corresponding icons
  const navLinks = [
    { name: "Home", icon: "/home.svg" },
    { name: "Activity", icon: "/bolt.svg" },
    { name: "Discover", icon: "/compass.svg" },
    { name: "Settings", icon: "/settings.svg" },
  ];

  // Function to close the sidebar
  const closeSidebar: any = () => {
    setSideBar(false);
  };

  return (
    <main
      className="w-[100%] h-[100%] fixed drop-shadow-[0_22px_40px_rgba(142,151,164,0.19)]  top-0 transition-opacity duration-500 ease-in-out z-10"
      onClick={closeSidebar}
    >
      <div
        className={` hide ${
          sidebar === true
            ? "xl:w-[15%] w-[300px] h-screen bg-white  fixed left-0 top-0 transition-all duration-700 ease-in z-20"
            : ""
        }`}
      >
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
        {/* History Button (Opens History Modal) */}{" "}
        <div
          className="flex items-center gap-4 my-5 absolute bottom-0 mx-15 bg-[#E9EBEC] text-[#404650] px-4 py-2 rounded-[11px] font-semibold"
          onClick={(e) => {
            e.stopPropagation(); // Prevent sidebar from closing
            setIsModalOpen(true);
          }}
        >
          <FaHistory />
          History{" "}
        </div>
      </div>

      {/* Render the HistoryModal if it is open */}
      {isModalOpen && (
        <HistoryModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </main>
  );
};

export default LeftSidebarMobile;
