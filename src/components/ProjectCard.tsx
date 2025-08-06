import Image, { StaticImageData } from "next/image";
import { ElementType } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Link from "next/link";
interface ProjectCardProps {
  image: StaticImageData;
  name: string;
  description: string;
  icons: ElementType[];
  github: string;
  website?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  name,
  description,
  icons,
  github,
  website,
}) => {
  return (
    <div className="grid grid-cols-1 pt-6 md:grid-cols-3">
      <Image
        src={image}
        alt="project image"
        className="col-span-3 pb-4 md:col-span-1 md:pb-0"
      />
      <div className="col-span-2 md:pl-8">
        <div className="grid grid-cols-5 font-semibold">
          <p className="col-span-3 text-xl md:col-span-4 md:text-4xl">{name}</p>
          <div className="col-span-2 flex items-center justify-end md:col-span-1">
            <Link href={github} className="pr-4 text-4xl">
              <FaGithub />
            </Link>
            {website && (
              <Link href={website} className="text-4xl">
                <FaGlobe />
              </Link>
            )}
          </div>
        </div>
        <p className="pt-6 text-xl">{description}</p>
        <div className="text-stanley-black-100 flex gap-4 pt-6 text-3xl">
          {icons.map((Icon, index) => (
            <Icon key={index} />
          ))}
        </div>
      </div>
      <div className="border-stanley-gray-300 col-span-3 border-b-1 pb-6" />
    </div>
  );
};

export default ProjectCard;
