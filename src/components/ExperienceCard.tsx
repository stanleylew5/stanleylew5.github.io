import Image, { StaticImageData } from "next/image";

interface CardProps{
    photo: StaticImageData;
    company: string;
    position: string;
    dates: string;
    city: string;
}
const ExperienceCard: React.FC<CardProps> = ({photo, company, position, dates, city}) => {
  return (
    <div className="pt-6 grid grid-cols-9 2xl:grid-cols-12">
      <Image src={photo} alt="company photo"/>
      <div className="col-span-6 2xl:col-span-9 grid grid-rows-2 items-center">
        <p className="font-bold text-2xl">{company}</p>
        <p className="text-stanley-gray-200 text-xl">{position}</p>
      </div>
      <div className="col-span-2 grid grid-rows-2 justify-end text-right pr-4 items-center">
        <p>{city}</p>
        <p>{dates}</p>
      </div>
      <div className="border-b-1 border-stanley-gray-300 col-span-12 pb-6"/>
    </div>
  )
}

export default ExperienceCard
