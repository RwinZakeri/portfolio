import Image, { StaticImageData } from "next/image";

const TechIcon = ({ component }: { component: StaticImageData }) => {
  return (
    <>
      <Image
        src={component}
        className="size-10"
        alt="tech icon"
        width={36}
        height={36}
      />
    </>
  );
};

export default TechIcon;
