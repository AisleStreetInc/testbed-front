import { Suspense } from "react";
import { useGetAllAI } from "../../queries/ai/useAIQueries";
import { ErrorBoundary } from "react-error-boundary";
import useModalStore from "../../stores/modalStore";
import AIAddForm from "../Form/AI/AIAddForm";

const DataContainer = () => {
  // store
  const { setModal } = useModalStore();
  // react-query
  const { data } = useGetAllAI();
  // funcs
  const handleOnClick = () => {
    setModal({
      isOpen: true,
      title: "Add AI",
      component: <AIAddForm />,
    });
  };

  return (
    <ul>
      {data.map((it) => (
        <li
          className="text-lg font-bold cursor-pointer"
          key={`ai-${it.id}-${it.name}`}
        >
          {it.name}
        </li>
      ))}
      <li className="text-lg font-bold cursor-pointer" onClick={handleOnClick}>
        +
      </li>
    </ul>
  );
};

const NavigationBar = () => {
  return (
    <nav className="sticky top-16 left-0 w-[30%] h-[calc(100dvh-4rem)] bg-gray-200 pl-3 py-2 overflow-y-scroll">
      <ErrorBoundary fallback={<div>error</div>}>
        <Suspense fallback={<div>...Loading</div>}>
          <DataContainer />
        </Suspense>
      </ErrorBoundary>
    </nav>
  );
};

export default NavigationBar;
