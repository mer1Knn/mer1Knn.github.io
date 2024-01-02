import Image from "next/image";
import { formatDate } from "../../utils/date";
import { Slide } from "../../animation/Slide";

const jobData = [
  {
    _id: 1,
    name: "Ornidex",
    jobTitle: "Software Engineer",
    startDate: "2023-02",
    endDate: "2023-07",
    description: [
      "Ornidex, a Salesforce integrator. As part of Ornidex's development, the company wishes to implement a web application to retrieve leads and define a matching algorithm to automate the connection between customer needs and the profiles available in the database.",
      "• Conducted a comprehensive analysis of the prevailing business challenges to gain a profound understanding of the issues at hand.",
      "• Formulated the functional and technical design parameters for the proposed solution.",
      "• Created the web application while simultaneously developing the associated matching algorithm.",
      "• Executed testing and validation procedures to ensure the effectiveness and accuracy of the solution, guaranteeing a seamless user experience.",
    ],
    logo: "/Jobs/ornidex.jpg",
    url: "https://ornidex.com/",
  },
  {
    _id: 2,
    name: "Djezzy",
    jobTitle: "Software Engineer",
    startDate: "2022-07",
    endDate: "2023-02",
    description: [
      "Worked with the Direct sales team to build a B2B Tool. This tool is a solution that meets the need to implement a B2B sales and portfolio management tool, which manages sales forecasts, organizes the salesperson/client relationship, and improves team productivity by streamlining all stages of the sale, from managing opportunities to contract signing, as well as monitoring existing client portfolios.",
      "• Selected as one of the top candidates from a pool of over 500 highly qualified applicants, demonstrating exceptional talent and expertise.",
      "• Conducting an in‑depth analysis of the direct sales team’s domain expertise while meticulously gathering all pertinent information.",
      "• Crafting a user experience/user interface (UX/UI) design for the application tailored to the specific requirements.",
      "• Formulating the technical architecture for the solution as well as the structure of a relational database.",
      "• Developing the solutions (Mobile application, front end, and back end for the web dashboard).",
      "• Testing and deploying the solution once all the tests are passed and validated.",
    ],
    logo: "/Jobs/djezzy.png",
    url: "https://www.djezzy.dz/",
  },
  {
    _id: 3,
    name: "Atlas Marketspace",
    jobTitle: "Frontend Developer",
    startDate: "2022-03",
    endDate: "2023-06",
    description: [
      "Atlas Marketspace, a platform designed to revolutionize e-commerce. It offers a suite of tools enabling individuals and businesses to easily create, manage, and grow online stores without coding skills.",
      "• Executed the implementation of front-end components and page designs.",
      "• Collaborated with a team of 4 developers to build the project from scratch.",
    ],
    logo: "/Jobs/atlas.png",
    url: "https://www.atlas-marketspace.com/",
  },
  {
    _id: 4,
    name: "Software Engineer",
    jobTitle: "UX Designer",
    startDate: "2021-05",
    endDate: "2021-07",
    description: [
      "In the position, I worked on building a website to present the company and to help them share their updates in order to make the company more visible on the internet as well as acquire new customers.",
      "• Analysing the needs of the company and defining the website’s features and functionalities.",
      "• Identifying the website’s technical requirements, such as the platform, programming languages, and databases to be used.",
      "• Developing the front‑end and back‑end components of the website, as well as integrating third‑party tools and services.",
      "• Testing the website to ensure that it meets the business and user requirements.",
      "• Deploying the website to a production environment, configuring the server, and testing the website again to ensure that it is working properly.",
    ],
    logo: "/Jobs/gica.png",
    url: "https://cetim-dz.com/",
  },
  {
    _id: 5,
    name: "GO Platfrom",
    jobTitle: "Software Engineer",
    startDate: "2021-02",
    endDate: "2022-07",
    description: [
      "GO PLATFORM is a Talent Acquisition marketplace built for Tech companies to take the pain of digital talent shortage. We are bringing a better way to source, screen, and recruit digital skills in Africa. We secure diversified, cheaper, and qualitative talents compared to the overpriced first-world talent.",
      "• Executed the implementation of front-end components and page designs.",
      "• Collaborated with a team of 4 developers to build the new version of the platform from scratch.",
      "• Communicating with the executive board to decide which features to implement.",
      "• Developing the platform’s backend and integrating the backend with the front end.",
      "• Continuously integrating and deploying the new features that we have implemented, while the platform is working with 20,000 users.",
    ],
    logo: "/Jobs/goplatform.png",
    url: "https://go-platform.com/",
  },
];

const Job = () => {
  return (
    <section className="mt-32">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Work Experience
          </h2>
        </div>
      </Slide>

      <Slide delay={0.18}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
          {jobData.map((data) => (
            <div
              key={data._id}
              className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200"
            >
              <a
                href={data.url}
                rel="noreferrer noopener"
                target="_blank"
                className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative"
              >
                <Image
                  src={data.logo}
                  className="object-cover duration-300"
                  alt={`${data.name} logo`}
                  width={50}
                  height={50}
                />
              </a>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold">{data.name}</h3>
                <p>{data.jobTitle}</p>
                <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                  {formatDate(data.startDate)} -{" "}
                  {data.endDate ? (
                    formatDate(data.endDate)
                  ) : (
                    <span className="dark:text-primary-color text-tertiary-color">
                      Present
                    </span>
                  )}
                </time>
                {data.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="tracking-tight dark:text-zinc-400 text-zinc-600 my-2"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
};

export default Job;
