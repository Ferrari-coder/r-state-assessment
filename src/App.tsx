import LeftSidebar from "./components/LeftSideBar";
import RightSidebar from "./components/RightSideBar";
import TrendingTopics from "./components/TrendingTopics";
import BalanceCard from "./components/BalanceCard";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import LeftSidebarMobile from "./components/LeftSideBarMobile";

const Dashboard = () => {
  // State to manage mobile sidebar visibility
  const [sidebar, setSideBar] = useState<boolean>(false);

  // Function to open the mobile sidebar
  const showSidebar = () => {
    setSideBar(true);
  };

  //close mobile sidebar if opened at width>= 1280px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setSideBar(false);
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Check on component mount
    handleResize();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      <div className="flex bg-[#fafafa] h-screen ">
        {/* Left Sidebar (Visible on large screens, hidden on mobile) */}

        <div className="xl:w-[18%] hidee">
          <LeftSidebar />
        </div>

        {/* Main Content */}
        <div className="xl:w-[55%] w-full  xl:mx-0 my-12 mx-4 md:mx-10 ">
          <div className="flex items-center gap-4">
            <RxHamburgerMenu
              className="text-[30px] noshow"
              onClick={showSidebar}
            />

            {/* Trending Topics Section */}

            <h2 className="text-[#404650] text-[20px] font-semibold">
              Trending topics
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mt-8 ">
            <TrendingTopics />
            <TrendingTopics />
          </div>

          <div className="flex gap-20 my-12">
            <img
              src="/src/assets/scratching-head.svg"
              alt="girl"
              className="w-40 hidden md:block"
            />
            <BalanceCard />
          </div>
        </div>

        {/* Right Sidebar (Visible on large screens, hidden on mobile) */}
        <div className="xl:w-[25%] hidee">
          <RightSidebar />
        </div>
      </div>

      {/* Mobile Sidebar (Only appears when sidebar state is true) */}
      {sidebar && (
        <LeftSidebarMobile sidebar={sidebar} setSideBar={setSideBar} />
      )}
    </main>
  );
};

export default Dashboard;
