import Image from "next/image";
import { Metadata } from "next";
import { Slide } from "../../animation/Slide";

const options = {
  title: "ShareQ ‑ Volunteer Matching App  | Merouane",
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
    id: "shareq",
    "Project Name": "ShareQ ‑ Volunteer Matching App ",
    Company: "Flutter Festival",
    url: "",
    "Company description":
      "Flutter festival and fast & hack with flutter hackathon is an online hackathon organized by GDG Algiers. where participants should bring an innovative idea that has a relation with Ramadhan and develop it using the Flutter SDK.",
    Overview:
      "ShareQ addresses the challenge of finding suitable volunteering opportunities during Ramadan. It offers a user‐friendly app to help users discover nearby and engaging volunteer experiences with ease.",
    Description:
      "Flutter Festival and the Fast & Hack with Flutter Hackathon focused on innovative ideas related to Ramadan developed using the Flutter SDK. The project resulted in 'ShareQ,' an app that helped users discover nearby and engaging volunteer opportunities during Ramadan.",
    MyRole: [
      "I worked on this project as a part of the AMA.",
      "As the developer, my responsibilities included designing and developing the ShareQ app, ensuring a user-friendly interface, and coordinating with my teammate to gather volunteering opportunities.",
    ],
    Technologies: ["Flutter", "Dart", "Firebase"],
    KeyTakeaways: [
      "2nd Place winners of the Flutter Festival Hackathon",
      "This project highlighted the power of technology in connecting people for a common cause and the significance of making volunteering opportunities more accessible.",
      " Key takeaways included the potential of mobile apps to promote community engagement and social impact during special occasions like Ramadan.",
    ],
    images: ["/Projects/shareq/1.png"],
    logo: "/Achievements/flutterfestival.png",
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
