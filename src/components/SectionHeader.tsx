const SectionHeader = ({
  title,
  desc,
  detail,
}: {
  title: string;
  desc: string;
  detail: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-sans font-semibold tracking-widest bg-gradient-to-r from-emerald-300  to-sky-400 text-transparent bg-clip-text text-center text-lg">
          {title}
        </p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6  font-extrabold md:text-5xl">
        {desc}
      </h2>
      <p className="mt-4 font-sans font-semibold text-white/60 max-w-md mx-auto text-center">
        {detail}
      </p>
    </>
  );
};

export default SectionHeader;
