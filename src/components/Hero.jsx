import hero from "../assets/images/hero.png";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
const Hero = () => {
  const social_media = [
    { icon: <FaInstagram /> },
    { icon: <FaFacebook /> },
    { icon: <FaLinkedin /> },
    { icon: <FaTwitter /> },
  ];
  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView();
    }
  };
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 gap-10 px-7 md:flex-row flex-col items-center"
    >
      <img
        src={hero}
        alt=""
        className="md:w-11/12 object-cover flex-1 flex items-center justify-center h-full"
      />

      <div className="flex-1 flex-col">
        <h1 className="text-cyan-600 md:text-6xl text-5xl">Hello!</h1>
        <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white fond-bold">
          My Name is VISUALS P
        </h1>
        <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
          FullStack Developer
        </h4>
        <a
          className="bg-cyan-600 px-6 py-3 inline-block mt-8 rounded-full cursor-pointer"
          onClick={handleContactClick}
        >
          Contact Me
        </a>
        <ul className="mt-8 text-3xl flex text-gray-600 gap-5">
          {social_media?.map((icon, i) => (
            <li key={i} className=" hover:text-white cursor-pointer">
              {icon?.icon}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
