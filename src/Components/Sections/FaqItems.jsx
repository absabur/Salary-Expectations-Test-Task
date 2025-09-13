import { useState } from "react";
import FaqItem from "../Common/FaqItem";
import { faqsData } from "../../Data/Courses";

const FaqItems = () => {
  const [courses, setCourses] = useState(faqsData);

  const closeOthers = (id, status) => {
    const data = courses.map((course) =>
      course.id === id
        ? { ...course, active: status }
        : { ...course, active: false }
    );

    setCourses(data);
  };

  return (
    <div className="w-full">
      <div className="my-3 w-full md:w-[41.6666666667%]">
        <h2 className="text-[32px] font-bold text-[#040033] mb-[.5em]">
          TECHNICAL TRAINING
        </h2>
        <p className="text-[16px] font-normal text-[#2c2c32]">
          The technical training component of our Level 3 IT Support
          apprenticeship is split into six practice-led courses. Each
          practice-led course is then split into two parts.
        </p>
      </div>

      <div className="relative py-7">
        {courses.map((course, idx) => (
          <div key={course?.id} className="flex relative">
            <div className="hidden sm:flex flex-3 text-black text-lg font-bold leading-[26px]">
              COURSE {idx + 1}
            </div>

            <div className="hidden sm:inline-block flex-1 mt-3 relative">
              <div
                className={`w-[25px] h-[25px] rounded-full border-2 z-10 ${
                  course?.active
                    ? "bg-[#553982] border-[#553982]"
                    : "bg-white border-[#553982]"
                }`}
              ></div>
              {idx !== courses.length - 1 && (
                <div className="absolute left-[11px] h-full w-[3px] bg-[#553982]"></div>
              )}
            </div>

            <div className="flex-6 sm:pl-6 pl-0">
              <FaqItem course={course} closeOthers={closeOthers} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqItems;
