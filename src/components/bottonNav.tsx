"use client";
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { FiPlus } from "react-icons/fi";
import { Button } from "./ui/button";
const BottomNav = () => {
  const [clicked, setClicked] = React.useState(false);
  const [amount, setAmount] = React.useState(0);

  // Get current date and time
  const now = new Date();
  const formattedDatetime = `${now.getFullYear()}-${String(
    now.getMonth() + 1
  ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}T${String(
    now.getHours()
  ).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  const [datetime, setDatetime] = React.useState(formattedDatetime);
  const [reason, setReason] = React.useState("");

  return (
    <div className="fixed inset-x-0 bottom-0 bg-[#f3ebea] shadow-lg">
      <Drawer>
        <DrawerContent className="rounded-2xl border-2 border-[#2c3034] pb-2">
          <DrawerHeader>
            <DrawerTitle>Add Expense</DrawerTitle>
            <DrawerDescription>Add your expenses here</DrawerDescription>
          </DrawerHeader>
          <div className={"rounded-2xl p-2"}>
            <form className="">
              <div className="flex space-x-4">
                <div className="flex-1 text-black">
                  <label
                    htmlFor="amount"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Amount:
                  </label>
                  <input
                    onChange={(e) => setAmount(Number(e.target.value))}
                    value={amount}
                    type="number"
                    id="amount"
                    name="amount"
                    className="mt-1 block w-full py-2 px-3 border-[#2c3034] rounded-md shadow-sm focus:outline-none focus:ring-[#2c3034] focus:border-[#fdbf1e] border-2 sm:text-sm"
                  />
                </div>
                <div className="flex-1 text-black">
                  <label
                    htmlFor="datetime"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date and Time:
                  </label>
                  <input
                    value={datetime.toLocaleString()}
                    onChange={(e) => setDatetime(e.target.value)}
                    type="Datetime-local"
                    id="datetime"
                    name="datetime"
                    className="mt-1 block w-full py-2 px-3 border-2  border-[#2c3034]  rounded-md shadow-sm focus:outline-none focus:ring-[#2c3034] focus:border-[#fdbf1e]  sm:text-sm"
                  />
                </div>
              </div>
              <div className="text-black">
                <label
                  htmlFor="reason"
                  className="block text-sm font-medium text-gray-700"
                >
                  Reason:
                </label>
                <input
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  type="text"
                  id="reason"
                  name="reason"
                  className="mt-1 block w-full py-2 px-3 border-2  border-[#2c3034]  rounded-md shadow-sm focus:outline-none focus:ring-[#2c3034] focus:border-[#fdbf1e] sm:text-sm"
                />
              </div>
              <DrawerFooter className="grid grid-cols-2 gap-8">
                <DrawerClose>
                  <div
                    style={{ boxShadow: "3px 2px 1px #2c3034" }}
                    className=" border-[#2c3034] rounded-xl bg-[#fdbf1e] border-2 "
                  >
                    <p className="text-center text-black bg-[#fdbf1e] p-2 rounded-xl">
                      Cancel
                    </p>
                  </div>
                </DrawerClose>
                <button
                  type="submit"
                  style={{ boxShadow: "3px 2px 1px #2c3034" }}
                  className=" border-[#2c3034] rounded-xl bg-[#fdbf1e] border-2 "
                >
                  <p className="text-center text-black bg-[#fdbf1e] p-2 rounded-xl">
                    Add
                  </p>
                </button>
              </DrawerFooter>
            </form>
          </div>
        </DrawerContent>
        <nav
          className={
            "flex items-center justify-center border-[#2c3034] rounded-2xl border-2 pb-2"
          }
        >
          <DrawerTrigger>
            <div className="bg-[#FDBF1E] w-14 h-14 rounded-full transform -translate-y-1/3 border-2 border-[#2c3034] flex items-center justify-center">
              <FiPlus className="text-black" size={50} />
            </div>
          </DrawerTrigger>
        </nav>
      </Drawer>
    </div>
  );
};

export default BottomNav;
