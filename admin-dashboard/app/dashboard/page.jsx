import Card from "@/components/ui/dashboard/Card";
import Chart from "@/components/ui/dashboard/Chart";
import Rightbar from "@/components/ui/dashboard/Rightbar";
import Transaction from "@/components/ui/dashboard/Transaction";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex gap-5 mt-5">
      {/* MAIN SECTION */}
      <div className="flex w-[75%] flex-col gap-5">
        {/* CARD SECTION */}
        <div className="flex gap-5 justify-between">
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>
      {/* RIGHTBAR SECTION */}
      <div className="">
        <Rightbar />
      </div>
    </div>
  );
};

export default DashboardPage;
