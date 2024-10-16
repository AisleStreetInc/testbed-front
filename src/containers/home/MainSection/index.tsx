import { useState } from "react";
import PublicSection from "../PublicSection";

const MainSection = () => {
  const [selectedItem, setSelectedItem] = useState("Me");
  return (
    <section className="w-[70%] h-[calc(100dvh-4rem)] px-4 text-black relative overflow-y-scroll">
      <div className="sticky top-0 flex items-center justify-center w-full gap-2 py-4 bg-white">
        <button
          type="button"
          onClick={() => setSelectedItem("Me")}
          className={`${
            selectedItem === "Me" ? "text-blue-500" : "text-neutral-500"
          }`}
        >
          Me
        </button>
        <button
          type="button"
          onClick={() => setSelectedItem("Public")}
          className={`${
            selectedItem === "Public" ? "text-blue-500" : "text-neutral-500"
          }`}
        >
          Public
        </button>
      </div>
      <div className="w-full">
        {selectedItem === "Public" ? <PublicSection /> : null}
      </div>
    </section>
  );
};

export default MainSection;
