import "./App.css";
import FaqItems from "./Components/Sections/FaqItems";
import TabSection from "./Components/Sections/TabSection";

function App() {
  return (
    <div className="px-[10px] sm:px-[60px] container mx-auto max-w-[1480px] my-10 flex flex-col gap-15">
      <TabSection />
      <FaqItems />
    </div>
  );
}

export default App;
