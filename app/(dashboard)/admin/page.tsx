import PopulationRow from "@/components/dashboard/PopulationRow";
import StudentCountRadialBarChart from "@/components/dashboard/StudentCountRadialBarChart";
import AttendanceBarChart from "@/components/dashboard/AttendanceBarChart";
import FinanceLineChart from "@/components/dashboard/FinanaceLineChart";
import EventCalendar from "@/components/dashboard/EventCalendar";
import Announcements from "../../../components/dashboard/Announcements";

export default function AdminPage() {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 p-1 md:p-3 gap-2">
      <div className="grid col-span-4 md:col-span-5 lg:col-span-6 gap-2">
        <PopulationRow />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="col-span-1">
            <StudentCountRadialBarChart />
          </div>
          <div className="col-span-1 md:col-span-2">
            <AttendanceBarChart />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <FinanceLineChart />
        </div>
      </div>
      <div className="w-full h-fit grid col-span-4 md:col-span-3 lg:col-span-2 gap-2">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
}
