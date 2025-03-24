import Image, { StaticImageData } from "next/image";

interface CardProps {
  photo: StaticImageData;
  company: string;
  position: string;
  dates: string;
  city: string;
}
const ExperienceCard: React.FC<CardProps> = ({
  photo,
  company,
  position,
  dates,
  city,
}) => {
  return (
    <div className="grid grid-cols-4 pt-6 md:grid-cols-9 2xl:grid-cols-12">
      <Image src={photo} alt="company photo" className="md:size-auto" />
      <div className="col-span-3 grid grid-rows-2 items-center md:col-span-6 2xl:col-span-9">
        <p className="text-2xl font-bold">{company}</p>
        <p className="text-stanley-gray-200 text-xl">{position}</p>
      </div>
      <div className="text-stanley-gray-200 col-span-5 grid grid-rows-2 items-center justify-end pr-4 text-right md:col-span-2">
        <p>{city}</p>
        <p>{dates}</p>
      </div>
      <div className="border-stanley-gray-300 col-span-12 border-b-1 pb-6" />
    </div>
  );
};

export default ExperienceCard;
