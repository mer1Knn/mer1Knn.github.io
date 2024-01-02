import Image from "next/image";
import { Metadata } from "next";
import { Slide } from "../../animation/Slide";

const options = {
  title: "Ornidex: Optimized Client-Profile Matching | Merouane",
  description:
    "As a software engineer, my specialization lies in crafting cutting-edge digital solutions  for a diverse range of clients, including startups and large enterprises. My primary goal  is to engineer innovative products that drive business expansion.",
  keywords:
    "Merouane, Merouane Kanoune, Software Engineer, Full Stack Developer, AI Hack Tunisia, Hackathons, Winner, data science, cloud computing",
};

export const metadata: Metadata = {
  title: options.title,
  description: options.description,
  keywords: options.keywords,
};

export default async function Project() {
  const project = {
    id: "ornidex-optimized-client-profile-matching",
    "Project Name": "Ornidex: Optimized Client-Profile Matching",
    Company: "Ornidex",
    url: "",
    "Company description":
      "Ornidex is a company specializing in customer relationship management and Salesforce integration. They provide customized CRM solutions based on Salesforce to help businesses better understand and engage with their customers. As a Salesforce integrator, Ornidex tailors the platform to meet specific client needs and supports them throughout their project, from needs analysis to implementation and technical support. The company focuses on delivering innovative and effective solutions to enhance customer relationships and achieve business goals.",
    Overview:
      "A powerful web application featuring a matching algorithm. This project simplifies the process of connecting client needs with available profiles in ornidex'S database, enhancing efficiency and client satisfaction.",
    Description:
      "The Ornidex project aimed to streamline customer relationship management and Salesforce integration. The web application included a matching algorithm to connect client needs with available profiles in their database, optimizing the client onboarding process.",
    MyRole: [
      "I was the lead developer for this project.",
      "Conducted a comprehensive analysis of the prevailing business challenges to gain a profound understanding of the issues at hand.",
      " Formulated the functional and technical design parameters for the proposed solution.",
      "Create the web application while simultaneously developing the associated matching algorithm.",
      "Executed testing and validation procedures to ensure the effectiveness and accuracy of the solution, guaranteeing a seamless user experience.",
    ],
    Technologies: [
      "Next.js",
      "Prisma",
      "PostgresSQL",
      "Tailwindcss",
      "Typescript",
      "Recharts",
      "NextAuth",
    ],
    KeyTakeaways: [
      "The project served as the End of my Studies Project to obtain my Master's degree .",
      "This project allowed me to leverage my data science and development skills to create a highly functional and efficient system.",
      "The success of this project was measured by increased client satisfaction and the ability to tailor CRM solutions to meet unique business goals.",
      "It reinforced the importance of data-driven decision-making in customer relationship management.",
    ],
    images: ["/Projects/ornidex-optimized-client-profile-matching/1.png"],
    logo: "/Projects/ornidex-optimized-client-profile-matching/logo.png",
  };
  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <Slide>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start justify-between mb-4">
            <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl mb-4 ">
              {project["Project Name"]}
            </h1>

            <a
              href={project.url}
              rel="noreferrer noopener"
              target="_blank"
              className={`dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-4 py-2 ${
                !project.url
                  ? "cursor-not-allowed opacity-80"
                  : "cursor-pointer hover:border-zinc-700"
              }`}
            >
              {project.url ? "Explore" : "Coming Soon"}
            </a>
          </div>

          <div className="relative w-full h-40 pt-[52.5%] ">
            <Image
              className="rounded-xl border dark:border-zinc-800 border-zinc-100 object-cover"
              layout="fill"
              src={project.images[0]}
              alt={"project.coverImage?.alt" || "project.name"}
              quality={100}
              placeholder={"project.coverImage?.lqip" ? `blur` : "empty"}
              blurDataURL={"project.coverImage?.lqip" || ""}
            />
          </div>

          <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl my-6 ">
            {project["Company"]}
          </h1>
          <div className=" h-40">
            <img
              className="h-40 w-auto m-auto "
              loading="lazy"
              src={project.logo}
              alt={project["Company description"]}
            />
          </div>

          <div className="mt-8 dark:text-zinc-400 text-zinc-600 leading-relaxed">
            {project["Company description"]}
          </div>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-500 border-0 rounded md:my-10 dark:bg-gray-100" />
          <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl my-6 ">
            Project Description
          </h1>
          <div className="mt-8 dark:text-zinc-400 text-zinc-600 leading-relaxed">
            {project["Description"]}
          </div>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-500 border-0 rounded md:my-10 dark:bg-gray-100" />
          <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl my-6 ">
            My contribution
          </h1>
          <div className="mt-8 dark:text-zinc-400 text-zinc-600 leading-relaxed">
            <ul className="list-disc ">
              {project.MyRole.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
          </div>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-500 border-0 rounded md:my-10 dark:bg-gray-100" />
          <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl my-6 ">
            Skills and Technologies
          </h1>
          <div className="mt-8 dark:text-zinc-400 text-zinc-600 leading-relaxed">
            <div className="text-center">
              {project.Technologies.map((skill, index) => (
                <span
                  key={index}
                  className="text-lg m-1 rounded-full inline-block px-2.5 py-0.5 border dark:bg-green-900 dark:text-green-300  dark:border-green-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-500 border-0 rounded md:my-10 dark:bg-gray-100" />
          <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl my-6 ">
            Key Takeaways
          </h1>
          <div className="mt-8 dark:text-zinc-400 text-zinc-600 leading-relaxed">
            <ul className="list-disc ">
              {project.KeyTakeaways.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
          </div>
        </div>
      </Slide>
    </main>
  );
}
