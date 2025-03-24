import { experiences } from "@/data/experiences";
import ExperienceCard from "./ExperienceCard";
const Experiences = () => {
  return (
    <div className="mx-[15%]">
      <p className="bg-gradient-to-r bg-clip-text text-transparent from-stanley-black-100 to-stanley-gray-100 pb-4 text-5xl font-semibold size-max">
        Experiences
      </p>
      <div className="border-b-1 border-stanley-gray-300"/>
      {experiences.map(({ photo, company, position, dates, city }, index) => (
            <ExperienceCard photo={photo} company={company} position={position} dates={dates} city={city} key={index}/>
          ))}
    </div>
  );
};

export default Experiences;
