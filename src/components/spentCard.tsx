const SpentCard = () => {
  return (
    <div className=" text-black m-2 rounded-2xl bg-[#f3ebea] border-[#c7bab8] border-[1px]">
      <div className="flex items-center justify-between p-4">
        <div>
          <h1 className="text-sm text-[#6b6661]">Total Spent</h1>
          <p className="text-4xl font-bold mt-1">$0</p>
        </div>
      </div>
      <div className="flex justify-evenly p-2">
        <button
          style={{ boxShadow: "3px 2px 1px" }}
          className="border-[#2c3034] rounded-xl bg-[#fdbf1e] border-2 w-40 p-2"
        >
          Swap
        </button>
        <button
          style={{ boxShadow: "3px 2px 1px" }}
          className="border-[#2c3034] rounded-xl bg-[#fdbf1e] border-2 w-40"
        >
          Transfer
        </button>
      </div>
    </div>
  );
};

export default SpentCard;
