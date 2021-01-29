type CardProps = {
  padding?: boolean;
  children: any;
};

const Card = ({ padding, children }: CardProps) => {
  return (
    <a
      href="#"
      className={`${
        padding && 'p-6'
      } pointer-cursor ring-1 ring-black ring-opacity-5 w-1/2 bg-white rounded-xl shadow-md items-start hover:bg-indigo-100 transition`}
    >
      {children}
    </a>
  );
};

export default Card;
