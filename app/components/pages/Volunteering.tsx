import React from "react";
import Image from "next/image";
import { formatDate } from "../../utils/date";
import EmptyState from "../shared/EmptyState";
import { Slide } from "../../animation/Slide";

const VolunteeringExp = [
  {
    _id: 1,
    logo: "/Volunteering/gdsc.jpeg",
    name: "GDSC UMBB",
    tagline: "Community Lead",
    startDate: "2022-11",
    endDate: "2023-07",
  },
  {
    _id: 2,
    logo: "/Volunteering/gdg.png",
    name: "GDG Algiers",
    tagline: "Co-Organizer",
    startDate: "2021-02",
    endDate: "2023-07",
  },
  {
    _id: 3,
    logo: "/Volunteering/aiesec.png",
    name: "AIESEC In Algeria",
    tagline: "B2C Departement Team Member",
    startDate: "2019-02",
    endDate: "2019-07",
  },
  {
    _id: 4,
    logo: "/Volunteering/alphabit.jpeg",
    name: "Alphabit Club",
    tagline: "Activities Team Member",
    startDate: "2017-09",
    endDate: "2019-07",
  },
];

const Volunteering: React.FC = () => {
  return (
    <main>
      <header className="mb-16">
        <Slide delay={0.16}>
          <div className="mb-16">
            <h2 className="font-incognito text-4xl mt-20 font-bold tracking-tight">
              Volunteering
            </h2>
          </div>
          <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            Throughout my journey, I&apos;ve actively contributed to various
            communities, volunteering my time and skills to create a positive
            impact. Here are some of my notable experiences, where I&apos;ve
            served as a community lead, co-organizer, and team member, fostering
            collaboration and growth.
          </p>
        </Slide>
      </header>

      <Slide delay={0.1}>
        {VolunteeringExp.length > 0 ? (
          <section className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
            {VolunteeringExp.map((achievement) => (
              <div
                key={achievement._id}
                className="items-center gap-x-4 text-center dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg"
              >
                <Image
                  src={achievement.logo}
                  width={80}
                  height={80}
                  alt={achievement.name}
                  className="dark:bg-zinc-800 m-auto bg-zinc-100 mb-5 rounded-md p-2"
                />
                <div>
                  <h2 className="text-lg tracking-wide mb-1">
                    {achievement.name}
                  </h2>
                  <div className="text-sm dark:text-zinc-400 text-zinc-600">
                    {achievement.tagline}
                  </div>
                  <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                    {formatDate(achievement.startDate)} -{" "}
                    {achievement.endDate ? (
                      formatDate(achievement.endDate)
                    ) : (
                      <span className="dark:text-primary-color text-tertiary-color">
                        Present
                      </span>
                    )}
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

export default Volunteering;
