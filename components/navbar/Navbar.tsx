import SearchBar from "./Searchbar";
import AnnouncementsNavIcon from "./AnnouncementNavIcon";
import MessageNavIcon from "./MessageNavIcon";
import UserProfileNavIcon from "./UserProfileNavIcon";

export default function Navbar() {
  return (
    <div className="flex justify-end md:justify-between items-center p-3">
      {/* Search bar */}
      <SearchBar />
      <div className="flex gap-4 justify-center items-center">
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
