import { CiDollar } from "react-icons/ci";

const HistoryCard = (props: { records: Array<any> }) => {
  return (
    <div className="mt-3">
      <Datebar date={props.records[0].date} />
      {props.records.map((record, index) => {
        return (
          <Info
            key={index}
            amount={record.amount}
            tag={record.tag}
            date={record.date}
            reason={record.reason}
          />
        );
      })}
    </div>
  );
};

const Datebar = (props: { date: string }) => {
  const date = new Date(props.date);
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  return (
    <p className="text-sm stext-[#6b6661]">
      {month} {day}
    </p>
  );
};
const Info = (props: {
  amount: number;
  tag: string;
  date: string;
  reason: string;
}) => {
  const date = new Date(props.date);
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
  return (
    <div className="my-3 flex justify-between items-center ">
      <div className="flex space-x-3 items-center justify-center">
        <CiDollar size={35} />
        <div>
          <p>{props.reason}</p>
          <p className="text-sm text-[#6b6661]">{time}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-end">
        <p className="text-red-500">${props.amount}</p>
        <p className="text-sm text-[#6b6661]">{props.tag}</p>
      </div>
    </div>
  );
};

export default HistoryCard;
