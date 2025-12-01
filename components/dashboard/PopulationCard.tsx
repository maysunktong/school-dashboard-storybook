import Badge from "../Badge";

type PopulationCardType = {
  type: string;
};

export default function PopulationCard({ type }: PopulationCardType) {
  return (
    <div className="rounded-2xl p-3">
      <Badge text="2025" />
      <Badge text="2025" variant="secondary" />
      <Badge text="2025" variant="success" />
      <Badge text="2025" variant="warning" />
      <Badge text="2025" variant="destructive" />
      <Badge text="2025" variant="outline" />
      <Badge text="2025" variant="verified" />
      <Badge text="2025" variant="reminder" />
      <Badge />
      <Badge variant="secondary">My button</Badge>
      <p>1,234</p>
      {type}
    </div>
  );
}
