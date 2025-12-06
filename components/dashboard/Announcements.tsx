import Card from "../Card";
import EventCard from "../EventCard";

const announcements = [
  { id: 1, title: "title", content: "lorem ipsum body", time: "9:00 -12:00" },
  { id: 2, title: "title", content: "lorem ipsum body", time: "9:00 -12:00" },
  { id: 3, title: "title", content: "lorem ipsum body", time: "9:00 -12:00" },
];

export default function Announcements() {
  return (
    <Card title="Announcements" className="bg-white pb-4">
      <div className="flex flex-col gap-3">
        {announcements.map((item) => (
          <EventCard
            key={item.id}
            title={item.title}
            content={item.content}
            time={item.time}
            className="bg-purple-100 odd:bg-yellow-100 border-0"
          />
        ))}
      </div>
    </Card>
  );
}
