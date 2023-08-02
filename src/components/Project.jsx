import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Multi Page App",
      github_link: "https://github.com",
      live_link: "www.google.com",
    },
    {
      img: project2,
      name: "Dental App",
      github_link: "https://github.com",
      live_link: "www.google.com",
    },
    {
      img: project3,
      name: "Crypto App",
      github_link: "https://github.com",
      live_link: "www.google.com",
    },
    {
      img: project4,
      name: "Admin Dashboard",
      github_link: "https://github.com",
      live_link: "www.google.com",
    },
  ];
  return (
    <section id="projects">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome work</p>
      </div>
      <br />
      <div className="flex max-w-3xl gap-6 px-5 mx-auto items-center justify-center lg:w-2/3 w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{ 768: { slidesPerView: 2 } }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          modules={[Pagination, Autoplay]}
        >
          {projects?.map((projects, i) => (
            <SwiperSlide
              key={i}
              className="h-fit w-full p-4 bg-slate-700 rounded-xl"
            >
              <img src={projects.img} alt="" className="rounded-lg" />
              <h3 className="text-xl my-4">{projects.name}</h3>
              <div className="flex md:flex-row flex-col items-center justify-center gap-3">
                <a
                  href={projects.github_link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-600 bg-gray-800 rounded-full px-2 py-1 flex w-32 justify-center"
                >
                  Github
                </a>
                <a
                  href={projects.live_link}
                  rel="noreferrer"
                  target="_blank"
                  className="text-cyan-600 flex rounded-full bg-gray-800 px-2 py-1 w-32 justify-center"
                >
                  Live Demo
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
