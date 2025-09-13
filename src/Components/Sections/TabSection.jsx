import { useState } from "react";
import { tabsData } from "../../Data/TabsData";
import Modal from "../Common/Modal";
import YtVideoAutoPlay from "../Common/YtVideoAutoPlay";
import Tabs from "../Common/Tabs";

const TabSection = () => {
  const [tabData] = useState(tabsData);
  const [modal, setModal] = useState(false);
  const [activeTab, setActiveTab] = useState(tabData[0].title);

  const [tabs] = useState(tabData.map((item) => item.title));
  const activeData = tabsData.find((item) => item.title == activeTab);

  return (
    <div className="container mx-auto max-w-[1480px]">
      {modal && (
        <Modal setModal={setModal}>
          <div
            className="w-full md:w-1/2 aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <YtVideoAutoPlay url={activeData.content.video} />
          </div>
        </Modal>
      )}
      <h2 className="text-[32px] font-bold text-[#040033] mb-3">
        Level 3 IT Support apprenticeship
      </h2>
      <Tabs activeTab={activeTab} tabs={tabs} setActiveTab={setActiveTab} />
      {
        <div className="my-8 flex gap-6 flex-col md:flex-row">
          <div className="flex-1 relative">
            {activeData.content.video ? (
              <div
                onClick={() => setModal(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-25 h-25 rounded-full bg-white play cursor-pointer hover:bg-[#553982]"
              ></div>
            ) : null}
            <img src={activeData.content.image} alt={activeData.title} />
          </div>
          <div className="flex-1 flex gap-3 flex-col">
            <h2 className="text-[32px] font-bold text-[#040033]">
              {activeData.title}
            </h2>
            {activeData.content.duration && (
              <h2 className="text-[18px] font-bold text-[#040033]">
                Duration: {activeData.content.duration}
              </h2>
            )}
            {activeData.content.additional_info.split("\n").map((line, i) => (
              <p key={i} className="mb-2">
                {line}
              </p>
            ))}

            <button className="w-[fit-content] px-5 py-4 text-white font-bold bg-[#040033] rounded-xl mt-3 cursor-pointer  hover:bg-[tomato] hover:shadow-xl transition-all duration-300 ease-in-out">
              Download Programme Outline
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default TabSection;
