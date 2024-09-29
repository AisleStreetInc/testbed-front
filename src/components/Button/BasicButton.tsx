import { FormEvent, ReactNode, useMemo } from "react";

export interface BasicButtonProps {
  children: ReactNode;
  onClick?: () => void;
  onSubmit?: (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => void;
  color?: "white" | "blue" | "red";
  type?: "submit" | "reset" | "button" | undefined;
}

const BasicButton = ({
  children,
  type = "button",
  color = "white",
  onClick = () => {},
  onSubmit = () => {},
}: BasicButtonProps) => {
  const getClassName = useMemo(() => {
    if (color === "blue") {
      return "text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2";
    } else if (color === "red") {
      return "text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2";
    } else {
      return "py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700";
    }
  }, [color]);
  return (
    <button
      className={getClassName}
      type={type}
      onClick={onClick}
      onSubmit={(e) => onSubmit(e)}
    >
      {children}
    </button>
  );
};

export default BasicButton;
