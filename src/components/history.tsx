import React from "react";
import HistoryCard from "./historyCard";

const History = (props: { data: Array<any> }) => {
  return (
    <div className=" text-black m-2 rounded-2xl bg-[#f3ebea] border-[#c7bab8] border-[1px] p-4">
      <div>
        {props.data.map((records, index) => {
          return <HistoryCard key={index} records={records} />;
        })}
      </div>
    </div>
  );
};

export default History;
