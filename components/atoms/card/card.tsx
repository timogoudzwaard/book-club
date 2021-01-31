type CardProps = {
  defaultPadding?: boolean;
  children: any;
  href?: string;
};

const Card = ({ defaultPadding, children, href }: CardProps) => {
  if (href) {
    return (
      <a
        className={`${
          defaultPadding && 'p-4'
        } pointer-cursor ring-1 ring-black ring-opacity-5 bg-white rounded-xl shadow-md items-start hover:bg-indigo-100 transition transform hover:scale-95 duration-500`}
      >
        {children}
      </a>
    );
  }
  return (
    <div
      className={`${
        defaultPadding && 'p-4'
      } ring-1 ring-black ring-opacity-5 bg-white rounded-xl shadow-md items-start`}
    >
      {children}
    </div>
  );
};

export default Card;
