import React from "react";
import Image from "next/image";
import { formatDate } from "../../utils/date";
import EmptyState from "../shared/EmptyState";
import { Slide } from "../../animation/Slide";

const Achievement = [
  {
    _id: 1,
    logo: "/Achievements/hackupc.png",
    name: "HackUPC Hackathon",
    tagline: "Participant With Travel Grant",
    date: "2023-05",
    location: "Barcelona, Spain",
  },
  {
    _id: 2,
    logo: "/Achievements/junction.png",
    name: "Junction Hackathon",
    tagline: "Participant With Travel Grant",
    date: "2022-01",
    location: "Helsinki, Finland",
  },
  {
    _id: 3,
    logo: "/Achievements/nasa.png",
    name: "NASA Space App Challenge",
    tagline: "1st Prize Winner",
    date: "2022-10",
    location: "Algiers, Algeria",
  },
  {
    _id: 4,
    logo: "/Achievements/aihack.png",
    name: "AI Hack Tunisia Hackathon",
    tagline: "2nd Prize Winner",
    date: "2022-08",
    location: "Tunis, Tunisia",
  },
  {
    _id: 5,
    logo: "/Achievements/hackit.png",
    name: "Hack !T Hackathon",
    tagline: "Terra Challenge Winner",
    date: "2022-05",
    location: "Algiers, Algeria",
  },
  {
    _id: 6,
    logo: "/Achievements/flutterfestival.png",
    name: "Flutter Festival Hackathon",
    tagline: "2nd Prize Winner",
    date: "2022-04",
    location: "Algiers, Algeria",
  },
  {
    _id: 7,
    logo: "/Achievements/junction.png",
    name: "JunctionX Algiers Hackathon",
    tagline: "1st Prize Winner",
    date: "2022-12",
    location: "Algiers, Algeria",
  },
];

const Achievements: React.FC = () => {
  return (
    <main>
      <header className="mb-16">
        <Slide delay={0.16}>
          <div className="mb-16">
            <h2 className="font-incognito text-4xl mt-20 font-bold tracking-tight">
              Achievements
            </h2>
          </div>
          <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            As a passionate Software Engineer, I&apos;ve had the privilege of
            participating in various hackathons, showcasing my creativity and
            technical expertise agianst over 1200 partispant in each Hackathon.
            Here are some notable achievements from my journey, where I&apos;ve
            contributed to innovative projects and emerged successfully in
            competitive environments.
          </p>
        </Slide>
      </header>

      <Slide delay={0.1}>
        {Achievement.length > 0 ? (
          <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
            {Achievement.map((achievement) => (
              <div
                key={achievement._id}
                className="flex items-center gap-x-4 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg"
              >
                <Image
                  src={achievement.logo}
                  width={60}
                  height={60}
                  alt={achievement.name}
                  className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2"
                />
                <div>
                  <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                    {achievement.location} - {formatDate(achievement.date)}
                  </time>
                  <h2 className="text-lg tracking-wide mb-1">
                    {achievement.name}
                  </h2>
                  <div className="text-sm dark:text-zinc-400 text-zinc-600">
                    {achievement.tagline}
                  </div>
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

export default Achievements;
