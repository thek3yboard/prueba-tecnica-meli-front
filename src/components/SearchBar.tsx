import SearchButton from "./SearchButton";

export default function SearchBar() {
  return (
    <span className="h-7 w-[30%] flex">
      <input className="bg-white rounded-l-xs pl-2 w-full" type="text" />
      <SearchButton />
    </span>
  );
}
