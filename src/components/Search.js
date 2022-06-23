import { BiSearch, BiCaretDown, BiCheck } from "react-icons/bi";
import { useState } from "react";

const orderOptions = [
  { title: "PetName", value: "petName" },
  { title: "Owner Name", value: "ownerName" },
  { title: "Date", value: "aptDate" },
];

const DropDown = ({
  toggle,
  setToggle,
  orderBy,
  onOrderByChange,
  sortBy,
  onSortByChange,
}) => {
  if (!toggle) {
    return null;
  }
  return (
    <div
      className="origin-top-right absolute right-0 mt-2 w-44
      rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {orderOptions.map((option) => (
          <div
            key={option}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
            role="menuitem"
            onClick={() => {
              onSortByChange(`${option.value}`);
              setToggle();
            }}
          >
            {option.title}
            {sortBy === option.value && <BiCheck />}
          </div>
        ))}

        <div
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
          role="menuitem"
          onClick={() => {
            onOrderByChange("asc");
            setToggle();
          }}
        >
          Asc {orderBy === "asc" && <BiCheck />}
        </div>
        <div
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
          onClick={() => {
            onOrderByChange("desc");
            setToggle();
          }}
        >
          Desc {orderBy === "desc" && <BiCheck />}
        </div>
      </div>
    </div>
  );
};

const Search = ({
  query,
  onQueryChange,
  orderBy,
  onOrderByChange,
  sortBy,
  onSortByChange,
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="py-5">
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiSearch />
          <label htmlFor="query" className="sr-only" />
        </div>
        <input
          type="text"
          name="query"
          id="query"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="h-10 pl-8 rounded-md w-full sm:text-sm border-gray-100"
          placeholder="Search..."
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div>
            <button
              type="button"
              className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 hover:border-blue-700 focus:outline-none flex items-center"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              Sort By <BiCaretDown className="ml-2" />
            </button>
            <DropDown
              toggle={toggle}
              setToggle={() => {
                setToggle(!toggle);
              }}
              orderBy={orderBy}
              onOrderByChange={(myQuery) => onOrderByChange(myQuery)}
              sortBy={sortBy}
              onSortByChange={(myQuery) => onSortByChange(myQuery)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
