import { ReactNode } from "react";

export interface ModalLayoutProps {
  children: ReactNode;
  title: string;
}

const ModalLayout = ({ children, title }: ModalLayoutProps) => {
  return (
    <div className="flex flex-col w-full h-full px-2 py-2">
      <h1 className="mb-2 text-xl font-bold">{title}</h1>
      <div className="w-full overflow-y-scroll">{children}</div>
    </div>
  );
};

export default ModalLayout;
