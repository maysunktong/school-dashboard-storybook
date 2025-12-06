import Announcements from "@/components/dashboard/Announcements";
import EventCalendar from "@/components/dashboard/EventCalendar";

export default function StudentPage() {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 p-1 md:p-3 gap-2">
      {/* Left */}
      <div className="grid col-span-4 md:col-span-5 lg:col-span-6 gap-2">
        Big calendar
      </div>
      {/* Right */}
      <div className="w-full h-fit grid col-span-4 md:col-span-3 lg:col-span-2 gap-2">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
}
