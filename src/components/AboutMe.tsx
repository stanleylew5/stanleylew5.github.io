import Image from "next/image";
import casual from "../../public/casual.png";
import online from "../../public/online.svg";
import { FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";
import Link from "next/link";
const AboutMe = () => {
  return (
    <div className="mx-[15%]">
      <div className="grid grid-cols-1 md:grid-cols-4 py-[5%]">
        <div className="relative size-fit">
          <Image src={casual} alt="casual" className="w-[15vw]" />
          <Image
            src={online}
            alt="online"
            className="absolute right-0 bottom-[0%] w-18"
          />
        </div>
        <div className="md:col-span-3 flex flex-col items-start justify-center">
          <p className="from-stanley-black-100 to-stanley-gray-100 bg-gradient-to-r bg-clip-text pb-4 text-7xl font-semibold text-transparent">
            Stanley Lew
          </p>
          <p className="text-stanley-gray-200 pb-4 text-3xl">
            Student, Software Engineer
          </p>
          <p className="text-stanley-gray-200 pb-4 text-lg">
            Hello! I&apos;m Stanley Lew, a second year CS at the University of
            California, Riverside. Currently, I am pursuing a BS in Computer
            Science and a minor in Informational Systems.
          </p>
          <div className="flex gap-4 text-4xl">
            <Link
              href="https://www.instagram.com/stanleylew5/"
              className="hover:-translate-y-0.5 hover:opacity-60"
              target="_blank"
              rel="referrer"
            >
              <FaInstagramSquare />
            </Link>
            <Link
              href="https://github.com/stanleylew5"
              className="hover:-translate-y-0.5 hover:opacity-60"
              target="_blank"
              rel="referrer"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/stanleylew5/"
              className="hover:-translate-y-0.5 hover:opacity-60"
              target="_blank"
              rel="referrer"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="/resume.pdf"
              className="hover:-translate-y-0.5 hover:opacity-60"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoIosDocument />
            </Link>

            <Link
              href="mailto:stanley43595@gmail.com"
              className="hover:-translate-y-0.5 hover:opacity-60"
              target="_blank"
              rel="referrer"
            >
              <MdEmail />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
