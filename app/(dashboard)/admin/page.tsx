import PopulationCard from "../../../components/dashboard/PopulationCard";

export default function AdminPage() {
  return (
    <div className="">
      <div>
        L
        <div className="flex flex-wrap gap-2">
          <PopulationCard type="students" />
          <PopulationCard type="teachers"/>
          <PopulationCard type="parents" />
          <PopulationCard type="admin" />
        </div>
      </div>
      <div>R</div>
    </div>
  );
}
