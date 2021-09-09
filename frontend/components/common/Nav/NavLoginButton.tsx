const NavLoginButton = ({ id, name }: { id: string; name: string }) => {
  return (
    <button
      id={id || "nav action"}
      className={`
      hover:underline transparent text-cyan 
      font-bold rounded-full border-cyan-accent border-4 py-4 px-8 shadow 
      opacity-75 focus:outline-none focus:shadow-outline 
      transform transition hover:scale-105 duration-300 ease-in-out
      `}
    >
      {name}
    </button>
  );
};

export default NavLoginButton;
