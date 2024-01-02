import Image from "next/image";
import { Metadata } from "next";
import { Slide } from "../../animation/Slide";

const options = {
  title: "SeaWatch ‑ Computer Vision Based Water Safety System | Merouane",
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
    id: "seawatch",
    "Project Name": "SeaWatch ‑ Computer Vision Based Water Safety System",
    Company: "AI Hack Tunisia",
    url: "",
    "Company description":
      "AI ​​Hack Tunisia is the largest hackathon on AI and Machine Learning in the MEA region with over 1000 participants from more than 25 countries. hosted by InstaDeep and Google. It is open to developers of all profiles as well as tech entrepreneurs, researchers, students, Ph.D. holders, and startups to create innovative ideas and solve real challenges using Artificial Intelligence.",
    Overview:
      "SeaWatch is a cutting‐edge computer vision system that uses deep learning to identify drowning individuals in the water. It pairs with a mobile app to alert authorities, enhancing water safety.",
    Description:
      "The AI Hack Tunisia project was the largest hackathon on AI and Machine Learning in the MEA region, with over 1,000 participants from more than 25 countries. The project resulted in 'SeaWatch,' a cutting-edge computer vision system that used deep learning to identify drowning individuals in the water. This system paired with a mobile app to alert authorities, enhancing water safety.",
    MyRole: [
      "I worked on this project as a part of the Bits n'Bites Team.",
      "As a team member of the Bits and Bites Team.",
      "Brainstorming to find the winning ideas for the Hackathon.",
      "My responsibilities included helping the team on the computer vision system, creating the mobile app, and coordinating a the team of developers, data scientist, and designers.",
    ],
    Technologies: ["Next.js", "Python", "Mediapipe", "Flask"],
    KeyTakeaways: [
      "2ND PLCE WINNERS OF THE AI HACK TUNISIA 2022",
      "This project was a significant opportunity to apply machine learning in a real-world context, emphasizing the importance of technology in improving safety and saving lives.",
      "Key takeaways included the potential of AI in addressing critical challenges and the value of collaboration in such ambitious endeavors.",
    ],
    images: ["/Projects/seawatch/1.png"],
    logo: "/Achievements/aihack.png",
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
