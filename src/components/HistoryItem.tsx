// HistoryItem Component: Displays an individual history event
// Props:
// - title (string): The title of the history event
// - date (string): The date and time of the event
// - icon (string): The icon representing the event
// - isHighlighted (boolean): Determines if the event should be highlighted

type Props = {
  title: string;
  date: string;
  icon: string;
  isHighlighted: boolean;
};

const HistoryItem = ({ title, date, icon, isHighlighted }: Props) => {
  return (
    <div className="flex  gap-4 relative">
      {/* Circle containing the event icon */}
      <div
        className={`w-7 h-7 flex items-center justify-center rounded-full ${
          isHighlighted ? "bg-[#3579DC]" : "bg-white border border-[#CDD2D4]"
        }`}
      >
        {/* Event Icon */}
        <img src={icon} alt={title} className="w-3" />
      </div>
      {/* Event Details (Title & Date) */}
      <div>
        <p
          className={`text-[16px] leading-[20px]  ${
            isHighlighted
              ? "text-[#3579DC] font-semibold"
              : "text-[#404650] font-normal"
          }`}
        >
          {title}
        </p>
        <p className="text-[#88909C] leading-[15px] text-[12px] font-light">
          {date}
        </p>
      </div>
    </div>
  );
};

export default HistoryItem;
