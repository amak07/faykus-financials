import { MenuAlt2Icon } from "@heroicons/react/solid";

type Props = {
  renderLinks: () => React.ReactNode;
  renderCTA: () => React.ReactNode;
};

const NavMobileBar: React.FC<Props> = ({ renderLinks, renderCTA }) => {
  return (
    <div
      className={`
      h-20 bg-white border-gray-400 
      border-b border-t border-l border-r
      flex-row flex sm:hidden
    `}
    >
      <div className="flex justify-center items-center w-1/2 border-r-2">
        <div className="dropdown dropdown-right">
          <div tabIndex={0} className="m-1 bg-white">
            <MenuAlt2Icon className="h-12 w-12 text-cyan"></MenuAlt2Icon>
          </div>
          {renderLinks()}
        </div>
      </div>

      <div className="flex justify-center items-center w-1/2">
        {renderCTA()}
      </div>
    </div>
  );
};

export default NavMobileBar;
