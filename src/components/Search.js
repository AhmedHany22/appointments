import { BiSearch, BiCaretDown, BiCheck } from "react-icons/bi";

const orderBy = ["PetName", "Owner Name", "Date"];

const DropDown = () => {
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
        {orderBy.map((option) => (
          <div
            key={option}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
            role="menuitem"
          >
            {option} <BiCheck />
          </div>
        ))}

        <div
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
          role="menuitem"
        >
          Asc <BiCheck />
        </div>
        <div
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Desc <BiCheck />
        </div>
      </div>
    </div>
  );
};

const Search = () => {
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
          value=""
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
            >
              Sort By <BiCaretDown className="ml-2" />
            </button>
            <DropDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
