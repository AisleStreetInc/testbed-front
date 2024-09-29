import { Suspense, useEffect } from "react";
import { useGetAllAI } from "../../../queries/ai/useAIQueries";
import BasicButton from "../../Button/BasicButton";
import useModalStore from "../../../stores/modalStore";
import { useCreateOneTutor } from "../../../queries/tutor/useTutorQueries";
import { CreateTutor } from "../../../queries/tutor/tutor.dto";

export interface TutorAddFormProps {}

const SelectContainer = () => {
  const { data } = useGetAllAI();

  return (
    <label
      className="block mb-2 text-sm font-medium text-gray-900"
      htmlFor="ai"
    >
      AI
      <select
        id="ai"
        name="ai"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        defaultValue="default"
        required
      >
        <option value="default" disabled>
          Choose an AI
        </option>
        {data.map((ai) => (
          <option key={`option-${ai.id}`} value={ai.id}>
            {ai.name}
          </option>
        ))}
      </select>
    </label>
  );
};

const TutorAddForm = ({}: TutorAddFormProps) => {
  // react-query
  const { mutate, isSuccess } = useCreateOneTutor();
  // store
  const { setModal, modal } = useModalStore();
  // funcs
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const body: CreateTutor = {
      name: data.name as string,
      ai: parseInt(data.ai as string),
      description: data.desc as string,
    };
    mutate(body);
  };

  useEffect(() => {
    if (isSuccess) {
      setModal({
        ...modal,
        isOpen: false,
      });
    }
  }, [isSuccess]);

  return (
    <form className="flex flex-col w-full gap-2" onSubmit={handleOnSubmit}>
      <label htmlFor="name">
        <p className="block mb-2 text-sm font-medium text-gray-900">Name</p>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          name="name"
          id="name"
          type="text"
          required
        />
      </label>
      <Suspense>
        <SelectContainer />
      </Suspense>
      <label htmlFor="desc">
        <p className="block mb-2 text-sm font-medium text-gray-900">
          Description
        </p>
        <textarea
          rows={5}
          name="desc"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </label>
      <div className="flex items-center justify-center w-full mt-4">
        <BasicButton type="submit">SAVE</BasicButton>
        <BasicButton
          onClick={() =>
            setModal({
              ...modal,
              isOpen: false,
            })
          }
          color="red"
        >
          CANCEL
        </BasicButton>
      </div>
    </form>
  );
};

export default TutorAddForm;
