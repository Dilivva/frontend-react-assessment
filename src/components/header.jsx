export const HeaderComponent = ({ title, subtitle }) => {
  return (
    <div className=" mb-8 bg-black/5 rounded-sm p-3">
      <h1 className=" mb-4 text-black font-medium text-lg">{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};
