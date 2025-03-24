import { experiences } from "@/data/experiences";
import ExperienceCard from "./ExperienceCard";
const Experiences = () => {
  return (
    <div className="mx-[10%] md:mx-[15%]" id="experiences">
      <p className="from-stanley-black-100 to-stanley-gray-100 size-max bg-gradient-to-r bg-clip-text pb-4 text-3xl font-semibold text-transparent md:text-5xl">
        Experiences
      </p>
      <div className="border-stanley-gray-300 border-b-1" />
      {experiences.map(({ photo, company, position, dates, city }, index) => (
        <ExperienceCard
          photo={photo}
          company={company}
          position={position}
          dates={dates}
          city={city}
          key={index}
        />
      ))}
    </div>
  );
};

export default Experiences;
