import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import EmptyState from "../components/shared/EmptyState";
import { Slide } from "../animation/Slide";
import { promises as fs } from "fs";

const options = {
  title: "Projects | Merouane ",
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

const Project: React.FC = async () => {
  const ProjectsdataFile = await fs.readFile(
    process.cwd() + "/app/projects/projects.json",
    "utf8"
  );

  const Projectsdata = JSON.parse(ProjectsdataFile);

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <header className="max-w-2xl mb-16">
        <Slide>
          <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl mb-6 lg:leading-[3.7rem]">
            Projects
          </h1>
          <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            Explore a collection of diverse projects where I&apos;ve applied my
            skills and creativity. From customized web apps boosting digital
            visibility to cutting-edge technologies like IoT and computer
            vision, each project reflects a unique solution to real-world
            challenges. Dive into the details of my journey in innovation and
            problem-solving.
          </p>
        </Slide>
      </header>

      <Slide delay={0.1}>
        {Projectsdata.length > 0 ? (
          <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
            {Projectsdata.map((data: any) => (
              <Link href={`/projects/${data.slug}`} key={data._id}>
                <div className="flex items-center gap-x-4 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg">
                  <Image
                    src={data.logo}
                    width={60}
                    height={60}
                    alt={data.name}
                    className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2"
                  />
                  <div>
                    <h2 className="text-lg tracking-wide mb-1">{data.name}</h2>
                    <div className="text-sm dark:text-zinc-400 text-zinc-600">
                      {data.tagline}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        ) : (
          <EmptyState value="Projects" />
        )}
      </Slide>
    </main>
  );
};

export default Project;
