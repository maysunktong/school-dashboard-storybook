import { EllipsisVertical } from "lucide-react";
import Badge from "../Badge";

type PopulationCardType = {
  type: string;
};

export function PopulationCard({ type }: PopulationCardType) {
  return (
    <div className="w-full relative rounded-2xl px-5 py-3 bg-purple-200 odd:bg-yellow-200">
      <EllipsisVertical className="absolute top-2 right-2 text-white cursor-grabbing" />
      <Badge text="2025" />
      <p className="text-lg md:text-4xl font-bold text-foreground py-4">
        1,234
      </p>
      <p className="font-thin text-gray-500 pb-2">{type}</p>
    </div>
  );
}

export default function PopulationRow() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      <PopulationCard type="students" />
      <PopulationCard type="teachers" />
      <PopulationCard type="parents" />
      <PopulationCard type="admin" />
    </div>
  );
}
