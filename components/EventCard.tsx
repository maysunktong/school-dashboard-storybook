type EventCardProps = {
  title: string;
  time?: string;
  content?: string;
  className?: string;
};

export default function EventCard({ title, time, content, className, ...props }: EventCardProps) {
  const baseStyle = 'rounded-md  py-2 px-4 border border-gray-300 shadow">'
  return (
    <div className={`${baseStyle} ${className}`} {...props}>
      <div className="flex flex-col-reverse justify-center items-start md:flex-row md:justify-between md:items-center">
        <p className="font-bold">{title}</p>
        <p className="text-xs text-gray-400">{time}</p>
      </div>
      <p className="font-thin text-sm text-gray-500">{content}</p>
    </div>
  );
}
