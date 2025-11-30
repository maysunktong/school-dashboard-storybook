import SearchBar from "./Searchbar";
import AnnouncementsNavIcon from "./AnnouncementNavIcon";
import MessageNavIcon from "./MessageNavIcon";
import UserProfileNavIcon from "./UserProfileNavIcon";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-3">
      {/* Search bar */}
      <SearchBar />
      <div className="flex gap-4">
        {/* Messages */}
        <MessageNavIcon />
        {/* Announcements */}
        <AnnouncementsNavIcon />
        {/* Profile */}
        <UserProfileNavIcon />
      </div>
    </div>
  );
}
