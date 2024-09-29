interface CardProps {
  id: number;
  ai_id: number;
  name: string;
  description: string;
}

const Card = ({ id, ai_id, name, description }: CardProps) => {
  return (
    <div className="flex w-full gap-2">
      <div className="h-40 rounded-sm w-36 bg-zinc-500"></div>
      <div className="flex flex-col w-full h-full">
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
