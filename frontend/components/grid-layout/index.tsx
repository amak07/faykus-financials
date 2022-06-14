export interface GridItem {
  name: string;
  icon: string;
  desc: string;
}

type Props = {
  items: GridItem[];
};

const GridLayout: React.FC<Props> = ({ items }) => (
  <div className="flex flex-wrap">
    {items.map((item) => (
      <div
        key={item.name}
        className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="600"
        data-aos-easing="ease-in"
        data-aos-once="true"
      >
        <div className="m-4">
          <span className="icon text-3xl text-gold">
            <i className={item.icon}></i>
          </span>
          <div>
            <h3 className="text-2xl text-gold font-medium">{item.name}</h3>
            <p className="text-slate-600 font-GillSansMTPro-Book text-lg">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default GridLayout;
