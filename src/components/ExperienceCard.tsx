import Image, { StaticImageData } from "next/image";

interface CardProps {
  photo: StaticImageData;
  company: string;
  position: string;
  dates: string;
  city: string;
  contributions: string[];
}
const ExperienceCard: React.FC<CardProps> = ({
  photo,
  company,
  position,
  dates,
  city,
  contributions,
}) => {
  return (
    <div className="grid grid-cols-12 pt-6">
      <Image
        src={photo}
        alt="company photo"
        className="col-span-3 w-20 md:col-span-1"
      />
      <div className="col-span-9 grid grid-rows-2 items-center pl-4 md:col-span-6 2xl:col-span-9">
        <p className="text-xl leading-none font-bold md:text-2xl">{company}</p>
        <p className="text-stanley-gray-200 text-md leading-none md:text-xl">
          {position}
        </p>
      </div>
      <div className="text-stanley-gray-200 col-span-12 hidden grid-rows-2 items-center justify-end pr-4 text-right md:col-span-5 md:grid 2xl:col-span-2">
        <p>{city}</p>
        <p>{dates}</p>
      </div>
      <p className="text-stanley-gray-200 col-span-12 pt-4 text-center md:hidden">
        {city} | {dates}
      </p>
      <div className="col-span-12 pt-4">
        {contributions.map((contribution, index) => (
          <p key={index} className="pb-1">
            {contribution}
          </p>
        ))}
      </div>
      <div className="border-stanley-gray-300 col-span-12 border-b-1 pb-6" />
    </div>
  );
};

export default ExperienceCard;
