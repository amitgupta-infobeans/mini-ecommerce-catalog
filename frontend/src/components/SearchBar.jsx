const SearchBar = () => (
    <div className="relative mt-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                viewBox="0 0 20 20"
            >
                <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
            </svg>
        </div>
        <input
            type="text"
            className="block w-[400px] p-2 pl-10 text-sm text-gray-900 bg-gray-50"
            placeholder="Search for a product..."
        />
    </div>
);

export default SearchBar;