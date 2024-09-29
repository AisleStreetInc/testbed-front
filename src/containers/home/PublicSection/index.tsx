import { Suspense } from "react";
import { useGetAllTutor } from "../../../queries/tutor/useTutorQueries";
import Card from "./Card";
import { ErrorBoundary } from "react-error-boundary";
import useModalStore from "../../../stores/modalStore";
import TutorAddForm from "../../../components/Form/Tutor/TutorAddForm";

const DataContainer = () => {
  // react-query
  const { data } = useGetAllTutor();
  // store
  const { setModal } = useModalStore();
  // funcs
  const handleOnAdd = () => {
    setModal({
      isOpen: true,
      title: "Add Tutor",
      component: <TutorAddForm />,
    });
  };
  return (
    <div className="flex flex-col items-center w-full h-full gap-3">
      {data.map((it) => (
        <Card
          key={`tutor-${it.id}-${it.name}`}
          ai_id={it.ai_id}
          id={it.id}
          name={it.name}
          description={it.description}
        />
      ))}
      <button
        className="flex px-3 py-3 font-bold border rounded-full shadow-md"
        type="button"
        onClick={handleOnAdd}
      >
        ADD
      </button>
    </div>
  );
};

const PublicSection = () => {
  return (
    <section className="w-full h-full py-4">
      <ErrorBoundary fallback={<div>error</div>}>
        <Suspense fallback={<div>...Loading</div>}>
          <DataContainer />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
};

export default PublicSection;
