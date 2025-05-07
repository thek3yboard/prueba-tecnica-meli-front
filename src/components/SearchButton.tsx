import { Search } from "lucide-react";

export default function SearchButton() {
  return (
    <button className="cursor-pointer bg-gray-300 px-2 rounded-r-xs">
      <Search size={18} />
    </button>
  );
}
