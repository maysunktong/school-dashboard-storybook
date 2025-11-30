import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="hidden md:flex gap-2 justify-start items-center ring-1 rounded-3xl text-gray-400 border-gray-400 p-2">
      <Search className="w-4 h-4" />
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className="bg-transparent outline-none"
      />
    </div>
  );
}
