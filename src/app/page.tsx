import BottomNav from "@/components/bottonNav";
import SpentCard from "@/components/spentCard";
import History from "@/components/history";
import Topbar from "@/components/topBar";
const data = [
  [
    {
      date: "2024-03-17T15:34",
      reason: "Buy shoes",
      amount: 30,
      tag: "Clothes",
    },
    {
      date: "2024-03-17T16:20",
      reason: "Buy groceries",
      amount: 50,
      tag: "Food",
    },
  ],
  [
    {
      date: "2024-03-18T10:20",
      reason: "Pay bills",
      amount: 120,
      tag: "Bills",
    },
    {
      date: "2024-03-18T14:00",
      reason: "Buy books",
      amount: 45,
      tag: "Education",
    },
  ],
];
export default function Home() {
  return (
    <div>
      <Topbar></Topbar>
      <SpentCard></SpentCard>
      <BottomNav></BottomNav>
      <pre className="mx-4 mt-4 mb-3">History</pre>
      <History data={data}></History>
    </div>
  );
}
