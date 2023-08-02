const About = () => {
  const Info = [
    { text: "Years experience", count: "01" },
    { text: "projects completed", count: "10" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
      </div>
      <div className="flex flex-col items-center md:gap-6 gap-12 p-2 max-w-6xl mx-auto text-gray-300 my-3">
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
        <ul className="flex mt-10 items-center justify-center md:gap-48 gap-6">
          {Info?.map((content, i) => (
            <li key={i}>
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                {content.count} <span className="text-cyan-600">+</span>
                {""}
              </h3>
              <span className="md:text-base text-xs">{content.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
