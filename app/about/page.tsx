import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import fcBarcelona from "@/public/fcbarcelona.svg";

import {
  BiEnvelope,
  BiLinkExternal,
  BiGlobe,
  BiFootball,
} from "react-icons/bi";
import { Slide } from "../animation/Slide";
import Volunteering from "../components/pages/Volunteering";
import Education from "../components/pages/Education";
import OnlineLearning from "../components/pages/OnlineLearning";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const profile = [
  {
    _id: 1,
    fullName: "Merouane Kanoune",
    location: "Algeria",

    profileImage: {
      image: "/Merouane.jpg",
      alt: "Merouane Kanoune",
      lqip: "data:image/png;base64,iVBORw0KG...",
    },
    resumeURL: "https://www.linkedin.com/in/merouanekanoune/",
    email: "Kanounemerouane@gmail.com",
  },
];

const options = {
  title: "About | Merouane",
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

export default function About() {
  return (
    <main className="relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <section className="relative grid lg:grid-cols-custom grid-cols-1 gap-x-6 justify-items-center">
              <div className="order-2 lg:order-none">
                <Slide>
                  <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl lg:leading-tight basis-1/2 mb-8">
                    I&apos;m {data.fullName}. a Software Engineer from{" "}
                    {data.location}.
                  </h1>

                  <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed">
                    I am a results-driven <b>Software Engineer</b> with a focus
                    on crafting exceptional <b>Web applications</b> , delving
                    into <b>Data Science</b> , and harnessing the power of{" "}
                    <b>Cloud Computing</b> .
                    <br />
                    Holding a <b>
                      Master&apos;s in Information Technology
                    </b>{" "}
                    from <b>M&apos;Hamed Bougara University of Boumerdes</b>, my
                    academic foundation aligns seamlessly with my practical
                    expertise.
                    <br />
                    <br />
                    With <b>over 4 years of professional experience</b> , I have
                    successfully developed streamlined web applications at
                    Ornidex, played a pivotal role in constructing a B2B sales
                    tool at Djezzy, and led a dynamic team at GO Platform.
                    <br />
                    Additionally, I have undertaken various freelancing
                    projects, showcasing my versatility and adaptability.
                    Proficient in modern technologies, I bring a wealth of
                    expertise to the table.
                    <br />
                    <br />
                    What sets me apart is not just my technical proficiency but
                    also my collaborative and proactive approach to teamwork,
                    problem-solving, and innovation. I thrive in dynamic
                    environments, driving projects forward with a strategic
                    mindset and a commitment to excellence.
                    <br />
                    Furthermore, my achievements extend beyond the workplace, as
                    evidenced by{" "}
                    <b>
                      winning awards in prestigious hackathons such as Junction
                      in Helsinki, HackUPC in Barcelona and AI Hack Tunisia in
                      Tunis, where I competed against over 1200 participants.
                    </b>
                    <br /> <br />
                    Beyond my technical proficiency, I am passionate about
                    <b> volunteering</b>. I actively participate as a speaker,
                    coach or mentor in Tech events, witnessing the
                    transformative journey of aspiring developers. <br />
                    Volunteering not only enriches my professional life but also
                    reinforces my belief in the social impact technology can
                    have. It&apos;s a commitment to using our skills for
                    positive change, creating a more inclusive and equitable
                    future.
                    <br />
                    <br />
                    These accolades underscore my creativity and technical
                    prowess, reflecting my dedication to pushing the boundaries
                    of what is possible in the ever-evolving landscape of
                    technology.
                  </div>
                </Slide>
              </div>

              <aside className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                <Slide delay={0.1}>
                  <div className="sticky top-10">
                    <Image
                      className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top"
                      src={data.profileImage.image}
                      width={400}
                      height={400}
                      quality={100}
                      alt={data.profileImage.alt}
                      placeholder="blur"
                      blurDataURL={data.profileImage.lqip}
                      priority
                    />
                    <div className="flex items-center gap-x-3">
                      <a
                        href={`${data.resumeURL}`}
                        rel="noreferrer noopener"
                        target="_blank"
                        className="flex items-center justify-center text-center gap-x-2 basis-full dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 text-lg font-incognito font-semibold"
                      >
                        Check my linkedin{" "}
                        <BiLinkExternal className="text-base" />
                      </a>
                    </div>
                    <a
                      href={`mailto:${data.email}`}
                      className="flex items-center m-4  text-center gap-x-2 hover:text-primary-color"
                    >
                      <BiEnvelope className="text-lg" />
                      {data.email}
                    </a>
                    <hr />
                    <div className=" mt-4">
                      <h2 className="text-xl  flex items-center">
                        <BiGlobe className="mr-2 " /> My Global Travels
                      </h2>
                      <hr className="my-2" />

                      <div className="grid grid-cols-2">
                        <div>
                          <span className="fi fi-fi inline-block"></span>
                          <p className="ml-2 inline-block">Finland</p>
                          <hr className="my-2" />
                        </div>

                        <div>
                          <span className="fi fi-ee inline-block"></span>
                          <p className="ml-2 inline-block">Estonia</p>
                          <hr className="my-2" />
                        </div>

                        <div>
                          <span className="fi fi-fr inline-block"></span>
                          <p className="ml-2 inline-block">France</p>
                          <hr className="my-2" />
                        </div>

                        <div>
                          <span className="fi fi-es inline-block"></span>
                          <p className="ml-2 inline-block">Spain</p>
                          <hr className="my-2" />
                        </div>

                        <div>
                          <span className="fi fi-dz inline-block"></span>
                          <p className="ml-2 inline-block">Algeria</p>
                          <hr className="my-2" />
                        </div>

                        <div>
                          <span className="fi fi-tn inline-block"></span>
                          <p className="ml-2 inline-block">Tunisia</p>
                          <hr className="my-2" />
                        </div>
                      </div>
                    </div>
                    <div className=" mt-4">
                      <h2 className="text-xl  flex items-center">
                        <BiFootball className="mr-2 " /> My Favorite Football
                        Team
                      </h2>
                      <hr className="my-2" />
                      <div>
                        <Image
                          src={fcBarcelona}
                          width={30}
                          height={30}
                          alt="Fc Barcelona logo"
                          className="inline-block"
                        />{" "}
                        <p className="ml-2 inline-block"> FC Barcelona</p>
                        <hr className="my-2" />
                      </div>
                    </div>
                  </div>
                </Slide>
              </aside>
            </section>
          </div>
        ))}
      <Education />
      <OnlineLearning />
      <Volunteering />
    </main>
  );
}
