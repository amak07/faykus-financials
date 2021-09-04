type Props = {
  renderLogo: () => React.ReactNode;
  renderLinks: () => React.ReactNode;
  renderCTA: () => React.ReactNode;
};

const NavDesktopBar: React.FC<Props> = ({
  renderLogo,
  renderLinks,
  renderCTA,
}) => {
  return (
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      <div className="pl-4 flex items-center">{renderLogo()}</div>

      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
        id="nav-content"
      >
        {renderLinks()}

        {renderCTA()}
      </div>
    </div>
  );
};

export default NavDesktopBar;
