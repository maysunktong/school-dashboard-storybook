import Card from "../Card";
import EventCard from "../EventCard";

const events = [
  { id: 1, title: "title", content: "lorem ipsum body", time: "9:00 -12:00" },
  { id: 2, title: "title", content: "lorem ipsum body", time: "9:00 -12:00" },
  { id: 3, title: "title", content: "lorem ipsum body", time: "9:00 -12:00" },
];

export default function EventStack() {
  return (
    <Card title="Events" className="bg-white pb-4">
      <div className="flex flex-col gap-3">
        {events.map((item) => (
          <EventCard
            key={item.id}
            title={item.title}
            content={item.content}
            time={item.time}
            className="border-t-3 border-t-blue-300 even:border-t-orange-300"
          />
        ))}
      </div>
    </Card>
  );
}
