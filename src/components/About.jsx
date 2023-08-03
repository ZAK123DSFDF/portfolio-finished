const About = () => {
  const Info = [
    { text: "Years experience", count: "01" },
    { text: "projects completed", count: "10" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className=" text-4xl font-semibold mt-8 flex justify-center gap-2">
        <h3>About</h3>
        <h3 className="text-cyan-600">Me</h3>
      </div>
      <p className="text-gray-400 text-center font-semibold ">
        My introduction
      </p>
      <div className="flex flex-col items-center md:gap-6 gap-12 max-w-6xl mx-auto text-gray-300 mt-5">
        <p className="text-justify leading-7 w-11/12 mx-auto ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          assumenda voluptatibus ipsam ducimus? Accusantium saepe iusto quo
          ullam, odit eum pariatur distinctio eligendi corporis animi autem
          molestias molestiae ab quia. In, quidem consequatur voluptatum
          aspernatur nihil at sequi illum error ab excepturi illo labore tempora
          consequuntur obcaecati quis quae? Cum eaque id quos fugiat quam
          reprehenderit mollitia sequi? Quam, dolorum! Beatae dolorem libero
          accusantium nisi nulla dicta tenetur molestias ad fugit architecto
          doloribus debitis amet itaque eligendi mollitia quam asperiores sint
          ipsa blanditiis, odit ex atque. Veniam fuga vero alias.
        </p>
        <ul className=" mt-10 flex items-center justify-center md:gap-48 gap-6">
          {Info?.map((content, i) => (
            <li key={i} className="flex md:flex-row md:gap-2 ">
              <div className="flex-col">
                <div className="flex">
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    {content.count}
                  </h3>
                  <h3 className="text-cyan-600 font-bold text-2xl">+</h3>
                </div>

                <h3 className="md:text-base text-xs">{content.text}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
