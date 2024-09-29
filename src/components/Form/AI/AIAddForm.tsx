import { useEffect } from "react";
import { CreateAI } from "../../../queries/ai/ai.dto";
import { useCreateOneAI } from "../../../queries/ai/useAIQueries";
import useModalStore from "../../../stores/modalStore";
import BasicButton from "../../Button/BasicButton";

interface AIAddFormProps {}

const AIAddForm = ({}: AIAddFormProps) => {
  // store
  const { setModal, modal } = useModalStore();
  // react-query
  const { mutate, isSuccess } = useCreateOneAI();
  // funcs
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const body: CreateAI = {
      name: data.name as string,
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
      <label htmlFor="desc">
        <p className="block mb-2 text-sm font-medium text-gray-900">
          Description
        </p>
        <textarea
          rows={5}
          id="desc"
          name="desc"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </label>
      <div className="flex items-center justify-center w-full mt-4">
        <BasicButton type="submit">SAVE</BasicButton>
        <BasicButton
          color="red"
          onClick={() =>
            setModal({
              ...modal,
              isOpen: false,
            })
          }
        >
          CANCEL
        </BasicButton>
      </div>
    </form>
  );
};

export default AIAddForm;
