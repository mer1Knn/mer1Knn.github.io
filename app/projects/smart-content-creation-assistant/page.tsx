import Image from "next/image";
import { Metadata } from "next";
import { Slide } from "../../animation/Slide";

const options = {
  title: "Smart Content Creation Assistant | Merouane",
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
    id: "smart-content-creation-assistant",
    "Project Name": "Smart Content Creation Assistant",
    Company: "Junction",
    url: "",
    "Company description":
      "Junction is the meeting place for like-minded developers, designers, and business professionals who have always wanted to explore new paths with over 1300 participants. It's a weekend-long experience, gathering tech enthusiasts from all over the world in Finland to create with the latest technology in a unique environment and atmosphere.",
    Overview:
      "SCCA is a web platform created to help content creators, influencers, business owners, advertisers to create quality content by one click such as generating short videos, creating posts, generating captions…etc",
    Description:
      "The SCCA project for Junction was a web platform designed to assist content creators, influencers, business owners, and advertisers in generating quality content with ease. The platform included tools for creating short videos, posts, generating captions, and streamlining content creation.",
    MyRole: [
      "I worked on this project as a part of the Bits n'Bites Team.",
      "For this peoject i was focusing on user experience and content generation algorithms.",
      "My responsibilities included front-end and back-end development, ensuring the platform's scalability and responsiveness.",
    ],
    Technologies: ["Next.js", "Python", "Flask"],
    KeyTakeaways: [
      "One of the top 5 prject of the Smartley.io Challenge on the junction 2022 Hackathons.",
      "This project allowed me to explore the creative aspects of web development and content generation.",
      " Key takeaways included the importance of user-friendly interfaces and tools in facilitating content creation.",
    ],
    images: ["/Projects/smart-content-creation-assistant/1.png"],
    logo: "/Achievements/junction.png",
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
