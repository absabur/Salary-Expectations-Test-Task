import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FaqItem = ({ course, closeOthers, tabsKey }) => {
  const isActive = course?.active;

  return (
    <div className="relative bg-[#f6f6f6] rounded-lg p-[15px_30px] transition-all mb-5">
      <h4 className="text-[#2c2c32] font-sans text-base font-bold leading-[22px] pb-3 uppercase">
        {course?.heading}
      </h4>

      <div
        className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
          isActive ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <p className="mb-5 text-[#040033] text-base leading-[22px] font-normal">
          {course?.description}
        </p>
      </div>

      <button
        className="flex items-center gap-2 text-[#040033] font-bold mt-2"
        onClick={() => closeOthers(course?.id, tabsKey, !isActive)}
      >
        Discover More {isActive ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
    </div>
  );
};

export default FaqItem;
