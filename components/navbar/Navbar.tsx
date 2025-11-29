import Link from "next/link";
import SearchBar from "./Searchbar";

export default function Navbar() {
  return (
    <div>
      {/* Search bar */}
      <SearchBar />
      <div className="flex gap-3">
        {/* Messages */}
        <Link href="/">Message</Link>
        {/* Announcements */}
        <Link href="/">Announcements</Link>
        {/* Profile */}
        
      </div>
    </div>
  );
}
