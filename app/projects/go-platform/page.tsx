import Image from "next/image";
import { Metadata } from "next";
import { Slide } from "../../animation/Slide";

const options = {
  title: "Global Opportunities | Merouane",
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
    id: "go-platform",
    "Project Name": "GO Platform",
    Company: "Global Opportunities",
    url: "https://go-platform.com/",
    "Company description":
      "GO PLATFORM is a Talent Acquisition marketplace built for Tech companies to take the pain of digital talent shortage. We are bringing a better way to source, screen, and recruit digital skills in Africa. We secure diversified, cheaper, and qualitative talents compared to the overpriced first-world talent.",
    Overview:
      "GO PLATFORM is a Talent Acquisition marketplace built for Tech companies to take the pain of digital talent shortage. We are bringing a better way to source, screen, and recruit digital skills in Africa. We secure diversified, cheaper, and qualitative talents compared to the overpriced first-world talent.",
    Description:
      "The GO PLATFORM project aimed to address the digital talent shortage in Africa by creating a Talent Acquisition marketplace for tech companies. The platform sourced, screened, and recruited digital skills in a cost-effective and diversified manner compared to first-world talent.",
    MyRole: [
      "As the lead developer of a team of 4 developers.",
      "Communicating with the executive board to decide which features to implement.",
      "Developing the platform’s backend and integrating the backend with the front end.",
      "Continuously integrating and deploying the new features that we have implemented, while the platform is working with 20,000 users.",
    ],
    Technologies: [
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "Bootstrap",
      "Passport.js",
    ],
    KeyTakeaways: [
      "This project highlighted the potential for technology to bridge talent gaps and provide access to diverse and high-quality skills.",
      "Key takeaways included the importance of cost-effective solutions for tech companies and the value of a more global and inclusive approach to talent acquisition in the tech industry.",
    ],
    images: ["/Projects/go-platform/1.png"],
    logo: "/Projects/go-platform/logo.png",
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

          {/* <div className="relative w-full h-40 pt-[52.5%] ">
            <Image
              className="rounded-xl border dark:border-zinc-800 border-zinc-100 object-cover"
              layout="fill"
              src={project.images[0]}
              alt={"project.coverImage?.alt" || "project.name"}
              quality={100}
              placeholder={"project.coverImage?.lqip" ? `blur` : "empty"}
              blurDataURL={"project.coverImage?.lqip" || ""}
            />
          </div> */}

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
