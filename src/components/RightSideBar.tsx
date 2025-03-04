import { historyData } from "../data";
import HistoryItem from "./HistoryItem";

const RightSidebar = () => {
  return (
    <div className="xl:w-[25%] h-screen bg-white fixed right-0 top-0 drop-shadow-[17px_0px_68px_rgba(0,0,0,0.16)] px-10 py-12">
      <h2 className="text-[#404650] text-[20px] font-semibold mb-4">History</h2>
      <div className="flex flex-col gap-18 relative z-10 mt-8.5">
        {/* Dotted Line */}
        <div className="absolute left-[12.5px] top-5 bottom-5 w-[1px] bg-[#CDD2D4] z-0"></div>
        {/* Mapping through historyData to render each HistoryItem */}
        {historyData.map((item, index) => (
          <HistoryItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
