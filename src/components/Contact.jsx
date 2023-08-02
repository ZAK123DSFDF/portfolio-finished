import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillEnvironment,
} from "react-icons/ai";
const Contact = () => {
  const contact_info = [
    { icon: <AiOutlineMail />, text: "yourname@gmail.com" },
    { icon: <AiOutlinePhone />, text: "1233455" },
    { icon: <AiFillEnvironment />, text: "yourlocation" },
  ];
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-600 rounded-md border-none"
            />
            <input
              type="Email"
              placeholder="Your Email Address"
              className="bg-gray-600 rounded-md border-none"
            />
            <textarea
              placeholder="Your Message"
              className="bg-gray-600 rounded-md border-none"
              rows={10}
            ></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <ul className="flex flex-col gap-7 list-none">
            {contact_info?.map((contact, i) => (
              <li
                key={i}
                className="flex flex-row text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  {contact.icon}
                </div>
                <div className="md:text-base text-sm break-words">
                  {contact.text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
