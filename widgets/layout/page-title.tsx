import { Typography } from "@material-tailwind/react";

interface Props {
  heading: string;
  children: React.ReactNode;
}

const PageTitle: React.FC<Props> = ({ heading, children }) => {
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      <Typography variant="h2" color="blue-gray" className="mb-3">
        {heading}
      </Typography>
      <Typography variant="lead" className="text-blue-gray-500">
        {children}
      </Typography>
    </div>
  );
};

// PageTitle.propTypes = {
//   heading: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };

// PageTitle.displayName = "/src/widgets/layout/page-title.jsx";

export default PageTitle;
