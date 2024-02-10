import { WavePrimary } from "../../data/Icons";

const Wave = () => {
  return (
    <div className="relative bg-light_highlight dark:bg-dark_highlight transition-all duration-200 ease-in-out">
      <span className="block w-full h-2 absolute -top-1 bg-light_background dark:bg-dark_background transition-all duration-200 ease-in-out"></span>
      <WavePrimary />
      <span className="block w-full h-2 absolute -bottom-1 bg-light_highlight dark:bg-dark_highlight transition-all duration-200 ease-in-out"></span>
    </div>
  );
};

export default Wave;
