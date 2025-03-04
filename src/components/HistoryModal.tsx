import { FC } from "react";
import { IoClose } from "react-icons/io5";
import Model from "react-modal";
import HistoryItem from "./HistoryItem";
import { historyData } from "../data";

// Define the props for the HistoryModal component
type Props = {
  isModalOpen: boolean; // Controls whether the modal is open or not
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>; // Function to update modal state
};

const HistoryModal: FC<Props> = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Model
      isOpen={isModalOpen}
      onRequestClose={() => {
        setIsModalOpen(false);
      }}
      style={{
        overlay: {
          background: "rgba(0, 0, 0, 0.4)",
        },
      }}
      className="modal"
    >
      <div className="flex items-center justify-between gap-2 p-7 border-b border-dashed border-[#f1f1fa]">
        <h1 className="text-[20px] font-semibold">History</h1>
        {/* Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent sidebar from closing
            setIsModalOpen(false);
          }}
        >
          <IoClose className="text-[20px] font-semibold" />
        </button>
      </div>
      <div className="flex flex-col gap-18 relative z-10 mt-8.5">
        {/* Dotted Line */}
        <div className="absolute left-[12.5px] top-5 bottom-5 w-[1px] bg-[#CDD2D4] z-0"></div>
        {/* Render each history item */}
        {historyData.map((item, index) => (
          <HistoryItem key={index} {...item} />
        ))}
      </div>
    </Model>
  );
};

export default HistoryModal;
