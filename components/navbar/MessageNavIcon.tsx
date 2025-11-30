import Link from "next/link";
import { MessageSquareMore } from "lucide-react";

export default function MessageNavIcon() {
  return (
    <Link href="/">
      <MessageSquareMore />
    </Link>
  );
}
