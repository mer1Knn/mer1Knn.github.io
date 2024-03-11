import HeroSvg from "./icons/HeroSvg";
import Job from "./components/pages/Job";
import Social from "./components/shared/Social";
import { Slide } from "./animation/Slide";
import Achievements from "./components/pages/Achievements";

const Home: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16">
        <div className="lg:max-w-2xl max-w-2xl">
          <Slide>
            <h1 className="font-incognito font-black tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
              Software Engineer, Full Stack Development, Data Science, Cloud
              Computing.
            </h1>
            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
              Hello! I am <b>Merouane</b> a Full Stack Software Engineer with
              over 4 years of Full‐Stack Expertise. I hold a Master’s in
              Software Engineering. <br />
              I Lead project lifecycles as a Freelancer, achieving over 5,000
              users in the first week. Developed innovative web applications for
              large companies. Led a team of developers at startup, impacting
              +20,000 users. <br />
              Active in the tech community, as a speaker, coach, and a former
              lead of a Google developers student club community of +400
              members, Global Hackathons winner in the largest hackathons in the
              world such as NASA Space App Challenge, AI Hack Tunisia, and
              Junction competing against over +1200 participants.
            </p>
          </Slide>
          <Slide delay={0.1}>
            <Social type="social" />
          </Slide>
        </div>

        <Slide delay={0.14}>
          <HeroSvg />
        </Slide>
      </section>
      <Job />
      <Achievements />
    </main>
  );
};

export default Home;
