import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex gap-2 justify-start items-center">
      <Search className="w-4 h-4" />
      <input type="text" name="search" placeholder="Search..." />
    </div>
  );
}
