import Link from "next/link";
import { Megaphone } from "lucide-react";

export default function AnnouncementsNavIcon() {
  return (
    <Link href="/" className="flex relative">
      <Megaphone />
      <p className="absolute -top-3 -right-2 bg-purple-600 w-4 h-4 flex justify-center items-center rounded-full font-bold text-white text-xs">
        1
      </p>
    </Link>
  );
}
