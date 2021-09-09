const Button = ({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      id={id || "nav action"}
      className={`
      bg-ochre font-bold rounded-full py-4 px-12 shadow 
      opacity-75 transform transition-all hover:bg-ochre-text
      duration-300 ease-in-out
      `}
    >
      {children}
    </button>
  );
};

export default Button;
