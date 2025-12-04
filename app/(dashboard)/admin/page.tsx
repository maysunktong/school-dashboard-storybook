import PopulationRow from "@/components/dashboard/PopulationRow";
import StudentCountRadialBarChart from "../../../components/dashboard/StudentCountRadialBarChart";
import AttendanceBarChart from "../../../components/dashboard/AttendanceBarChart";
import FinanceLineChart from "../../../components/dashboard/FinanaceLineChart";
import EventCalendar from "../../../components/dashboard/EventCalendar";
import EventStack from "../../../components/dashboard/EventStack";

export default function AdminPage() {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 p-1 md:p-3 gap-2">
      <div className="grid col-span-4 md:col-span-6 gap-2">
        <PopulationRow />
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="col-span-1">
            <StudentCountRadialBarChart />
          </div>
          <div className="col-span-1 md:col-span-2">
            <AttendanceBarChart />
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <FinanceLineChart />
        </div>
      </div>
      <div className="grid col-span-4 md:col-span-2">
        <EventCalendar />
        <EventStack />
      </div>
    </div>
  );
}
