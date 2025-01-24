import { FadeLoader } from 'react-spinners'

const Loader = () => {
  return (
      <div className="w-full h-full fixed justify-center z-[300]">
        <FadeLoader
          color="#CFE939"
          height={20}
          width={10}
          radius={2}
          margin={2}
        />
      </div>
  );
};

export default Loader;