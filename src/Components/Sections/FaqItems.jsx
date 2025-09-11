import { useState } from "react";
import FaqItem from "../Common/FaqItem";
import { faqsData } from "../../Data/Courses";

const FaqItems = () => {
  const [courses, setCourses] = useState(faqsData);
  const [activeTab, setActiveTab] = useState(Object.keys(faqsData)[0]);

  const closeOthers = (id, tabsKey, status) => {
    const data = courses[tabsKey].map((course) =>
      course.id === id
        ? { ...course, active: status }
        : { ...course, active: false }
    );

    setCourses((prev) => ({
      ...prev,
      [tabsKey]: data,
    }));
  };

  const tabs = Object.keys(courses);

  return (
    <div className="px-[60px] container mx-auto max-w-[1480px] mb-100">
      <div className="flex items-center border-b border-pink-600">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 cursor-pointer relative ${
              activeTab === tab
                ? "font-bold text-gray-900 bg-pink-50"
                : "text-gray-700"
            }`}
          >
            {tab.replace("_", " ")}

            <div
              className={`
          absolute bottom-0 left-0 h-[3px] rounded-t
          bg-pink-600
          transition-all duration-300 ease-in-out
          ${activeTab === tab ? "w-full" : "w-0 hover:w-[70%]"}
        `}
            ></div>
          </div>
        ))}
      </div>

      <div className="relative py-7">
        {courses[activeTab].map((course, idx) => (
          <div key={course?.id} className="flex relative">
            <div className="flex-3 text-black text-lg font-bold leading-[26px]">
              COURSE {idx + 1}
            </div>

            <div className="flex-1 mt-3 relative">
              <div
                className={`w-[25px] h-[25px] rounded-full border-2 z-10 ${
                  course?.active
                    ? "bg-[#553982] border-[#553982]"
                    : "bg-white border-[#553982]"
                }`}
              ></div>
              {idx !== courses[activeTab].length - 1 && (
                <div className="absolute left-[11px] h-full w-[3px] bg-[#553982]"></div>
              )}
            </div>

            <div className="flex-6 pl-6">
              <FaqItem
                course={course}
                tabsKey={activeTab}
                closeOthers={closeOthers}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqItems;
