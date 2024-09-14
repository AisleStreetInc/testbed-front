import { useState } from "react";

const MainSection = () => {
  const [selectedItem, setSelectedItem] = useState("Me");
  return (
    <section className="w-[70%] px-4 text-black pt-4 relative">
      <div className="sticky top-0 flex items-center justify-center w-full gap-2">
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
    </section>
  );
};

export default MainSection;
