const Tabs = ({ tabs, setActiveTab, activeTab }) => {
  return (
    <>
      {/* Tabs for medium+ screens */}
      <div className="hidden md:flex flex-wrap items-center border-b md:border-black">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab px-4 mr-6 py-2 cursor-pointer relative ${
              activeTab === tab
                ? "font-bold text-gray-900 bg-pink-50"
                : "text-gray-700"
            }`}
          >
            {tab}

            {/* underline animation */}
            <div
              className={`
          absolute bottom-[-2px] left-0 h-[5px] rounded
          bg-pink-600
          transition-all duration-300 ease-in-out
          w-0
          ${activeTab === tab && "w-full"}
        `}
            ></div>
            <div className="absolute bottom-[-2px] left-0 h-[5px] rounded bg-pink-600 transition-all duration-300 ease-in-out w-0 hover-effect"></div>
          </div>
        ))}
      </div>

      {/* Select dropdown for small screens */}
      <div className="md:hidden border border-gray-100 mt-4 rounded-sm">
        <select
          className="w-full px-2 py-1 text-gray-700"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
        >
          {tabs.map((tab) => (
            <option key={tab} value={tab}>
              {tab}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Tabs;
