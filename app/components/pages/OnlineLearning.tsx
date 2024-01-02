import React from "react";
import Image from "next/image";
import { formatDate } from "../../utils/date";
import EmptyState from "../shared/EmptyState";
import { Slide } from "../../animation/Slide";

const OnlineLearningData = [
  {
    _id: 1,
    name: "Meta Back-End Developer Professional Certificate",
    logo: "/Certifications/coursera/Meta-Back-End-Developer.png",
    tagline: "Coursera",
    date: "October 2023",
  },
  {
    _id: 2,
    name: "Meta Front-End Developer Professional Certificate",
    logo: "/Certifications/coursera/Meta-Front-End-Developer.png",
    tagline: "Coursera",
    date: "October 2023",
  },
  {
    _id: 3,
    name: "Machine Learning Specialization by Andrew NG",
    logo: "/Certifications/coursera/Machine-Learning.png",
    tagline: "Coursera",
    date: "January 2023",
  },
  {
    _id: 4,
    name: "Kickstart your Career in Tech",
    logo: "/Certifications/cloud-academy.png",
    tagline: "BambooGeeks",
    date: "December 2022",
  },
  {
    _id: 5,
    name: "The Cloud Academy",
    logo: "/Certifications/kickstart.png",
    tagline: "BambooGeeks",
    date: "December 2022",
  },
  {
    _id: 6,
    name: "Programming for Data Science",
    logo: "/Certifications/udacity-Programming-for-Data-Science.png",
    location: "Udacity",
    date: "August 2021",
  },
  {
    _id: 7,
    name: "Advance Your Skills in Graphic Design",
    logo: "/Certifications/LinkedIn/Become-a-Graphic-Designer.png",
    tagline: "LinkedIn Learning",
    date: "February 2021",
  },
  {
    _id: 8,
    name: "Getting Started as a Project Manager",
    logo: "/Certifications/LinkedIn/Become-a-Project-Manager.png",
    tagline: "LinkedIn Learning",
    date: "February 2021",
  },
  {
    _id: 9,
    name: "Advance as a Digital Marketing Specialist",
    logo: "/Certifications/LinkedIn/Become-a-Digital-Marketing-Specialist.png",
    tagline: "LinkedIn Learning",
    date: "February 2021",
  },
  {
    _id: 10,
    name: "Become a Software Developer",
    logo: "/Certifications/LinkedIn/Become-a-Software-Developer.png",
    tagline: "LinkedIn Learning",
    date: "December 2020",
  },
  {
    _id: 11,
    name: "Master In Demand Professional Soft Skills",
    logo: "/Certifications/LinkedIn/Master-In-Demand-Professional-Soft-Skills.png",
    tagline: "LinkedIn Learning",
    date: "December 2020",
  },
  {
    _id: 12,
    name: "Succeeding in Web Development: Full Stack and Front End",
    logo: "/Certifications/LinkedIn/Succeeding-in-Web-Development.png",
    tagline: "LinkedIn Learning",
    date: "November 2020",
  },
  {
    _id: 13,
    name: "Web Design for Everybody: Basics of Web Development Specialization",
    logo: "/Certifications/coursera/Web-Design-for-Everybody.png",
    tagline: "Coursera",
    date: "April 2020",
  },
];

const OnlineLearning: React.FC = () => {
  return (
    <main>
      <header className="mb-16">
        <Slide delay={0.16}>
          <div className="mb-16">
            <h2 className="font-incognito text-4xl mt-20 font-bold tracking-tight">
              Online Learning
            </h2>
          </div>
          <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            Continual learning has been a cornerstone of my professional
            development. I&apos;ve completed a diverse range of online courses
            and certifications to stay abreast of the latest industry trends and
            enhance my skill set. Explore some of the notable programs I&apos;ve
            completed to expand my knowledge and expertise.
          </p>
        </Slide>
      </header>

      <Slide delay={0.1}>
        {OnlineLearningData.length > 0 ? (
          <section className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
            {OnlineLearningData.map((data) => (
              <div
                key={data._id}
                className="items-center gap-x-4 text-center dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg"
              >
                <Image
                  src={data.logo}
                  width={250}
                  height={250}
                  alt={data.name}
                  className="dark:bg-zinc-800 m-auto bg-zinc-100 mb-5 rounded-md p-2"
                />
                <div>
                  <h2 className="text-lg tracking-wide mb-1">{data.name}</h2>
                  <div className="text-sm dark:text-zinc-400 text-zinc-600">
                    {data.tagline}
                  </div>
                  <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                    {formatDate(data.date)}
                  </time>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <EmptyState value="Projects" />
        )}
      </Slide>
    </main>
  );
};

export default OnlineLearning;
