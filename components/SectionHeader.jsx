const SectionHeader = ({ span, h2, p }) => {
  return (
    <div className="flex items-center flex-col gap-1 text-center ">
      <span className="font-bold text-sm uppercase">{span}</span>
      <h2 className="text-2xl font-medium">{h2}</h2>
      <p className="max-w-4xl text-gray-700">{p}</p>
    </div>
  );
};

export default SectionHeader;
