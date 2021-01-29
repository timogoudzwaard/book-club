type CardProps = {
  padding?: boolean;
  children: any;
  href?: string;
};

const Card = ({ padding, children, href }: CardProps) => {
  if (href) {
    return (
      <a
        className={`${
          padding && 'p-6'
        } pointer-cursor ring-1 ring-black ring-opacity-5 w-1/2 bg-white rounded-xl shadow-md items-start hover:bg-indigo-100 transition transform hover:scale-95 duration-500`}
      >
        {children}
      </a>
    );
  }
  return (
    <div
      className={`${
        padding && 'p-6'
      } ring-1 ring-black ring-opacity-5 w-1/2 bg-white rounded-xl shadow-md items-start`}
    >
      {children}
    </div>
  );
};

export default Card;
