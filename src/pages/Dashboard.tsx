import React from "react";
import KpiCard from "../components/KpiCard";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import ActivityFeed from "../components/ActivityFeed";
import CheckTable from "../components/CheckTable";
import DailyTrafficChart from "../components/DailyTrafficChart";
import ComplexTable from "../components/ComplexTable";
import Tasks from "../components/Tasks";
import Calendar from "../components/Calendar";
import LessonCard from "../components/LessonCard";
import TeamMembers from "../components/TeamMembers";
import CardSecurity from "../components/CardSecurity";
import StarbucksPromo from "../components/StarbucksPromo";

import {
  BarChart2,
  DollarSign,
  FileText,
  Zap,
  TrendingUp,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="bg-[#0b1437] min-h-screen px-6 py-6 text-white space-y-6">
      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        <KpiCard title="Earnings" value="$350.4" icon={<TrendingUp />} />
        <KpiCard title="Spend this Month" value="$682.5" icon={<DollarSign />} />
        <KpiCard
          title="Sales"
          value="$574.34"
          subtitle="since last month"
          percentage="+23%"
          percentageColor="text-green-400"
          icon={<BarChart2 />}
        />
        <KpiCard title="Your Balance" value="$1,000" icon={<span>🇺🇸</span>} />
        <KpiCard title="New Tasks" value="154" icon={<Zap />} />
        <KpiCard title="Total Projects" value="2935" icon={<FileText />} />
      </div>

      {/* Line Chart + Bar Chart */}
      <div className="grid gap-4 xl:grid-cols-3 md:grid-cols-1">
        <div className="col-span-2 bg-[#1b254b] p-6 rounded-xl">
          <div className="text-sm text-white mb-2 px-2 py-1 inline-block bg-[#141e3c] rounded">This month</div>
          <h3 className="text-2xl font-bold mb-1">$37.5K</h3>
          <p className="text-xs text-green-400 mb-2">+2.45% <span className="text-gray-400">Total Spent</span></p>
          <LineChart />
        </div>
        <div className="bg-[#1b254b] p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Weekly Revenue</h3>
          <BarChart />
        </div>
      </div>

      {/* Check Table + Daily Traffic + Pie Chart */}
      <div className="grid gap-4 xl:grid-cols-3 md:grid-cols-1">
        <div className="bg-[#1b254b] p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Check Table</h3>
          <CheckTable />
        </div>
        <div className="bg-[#1b254b] p-6 rounded-xl">
          <DailyTrafficChart />
        </div>
        <div className="bg-[#1b254b] p-6 rounded-xl">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Your Pie Chart</h3>
            <span className="text-xs text-gray-400">Monthly</span>
          </div>
          <PieChart />
        </div>
      </div>

      {/* Complex Table + Tasks + Calendar */}
      <div className="grid gap-4 xl:grid-cols-3 md:grid-cols-1">
        <div className="bg-[#1b254b] p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Complex Table</h3>
          <ComplexTable />
        </div>
        <div className="bg-[#1b254b] p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Tasks</h3>
          <Tasks />
        </div>
        <div className="bg-[#1b254b] p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Calendar</h3>
          <Calendar />
        </div>
      </div>

      {/* Bottom Widgets: 4-in-a-row */}
      <div className="grid gap-4 xl:grid-cols-4 md:grid-cols-2">
        <LessonCard />
        <TeamMembers />
        <CardSecurity />
        <StarbucksPromo />
      </div>
    </div>
  );
};

export default Dashboard;
