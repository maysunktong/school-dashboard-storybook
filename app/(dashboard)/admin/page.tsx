import PopulationRow from "@/components/dashboard/PopulationRow";

export default function AdminPage() {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 p-1 md:p-3">
      <div className="col-span-4 md:col-span-6">
        <PopulationRow />
      </div>
      <div>Calendar</div>
    </div>
  );
}
