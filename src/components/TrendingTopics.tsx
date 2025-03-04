//Trending topic component
const TrendingTopics = () => {
  return (
    <div className="w-full bg-white drop-shadow-[0_22px_40px_rgba(142,151,164,0.19)] rounded-[11px] px-4 py-7 flex items-center gap-6">
      <div className="w-12 h-12 bg-[#E9EBEC] flex items-center justify-center rounded-[5px]">
        <img src="/home2.svg" alt="icon" className="w-6" />
      </div>
      <div>
        <p className="text-[#404650] text-[18px] font-semibold">Hashtag research</p>
        <p className="text-[#404650] text-[16px] mt-1">Upgrade to pro subscription for  $9 / month</p>
      </div>
    </div>
  );
};

export default TrendingTopics;
