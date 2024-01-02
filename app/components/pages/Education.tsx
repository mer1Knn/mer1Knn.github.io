import Image from "next/image";
import { formatDate } from "../../utils/date";
import { Slide } from "../../animation/Slide";

const educationData = [
  {
    _id: 1,
    name: "M'hamed Bougara University - Boumerdes",
    jobTitle: "M.Sc. I.T - Master of Science, Information Technology",
    startDate: "2021-11",
    endDate: "2023-07",
    logo: "/Education/umbb.png",
  },
  {
    _id: 2,
    name: "M'hamed Bougara University - Boumerdes",
    jobTitle: "B.Sc. I.T - Bachelor of Science, Computer Science",
    startDate: "2021-09",
    endDate: "2019-12",
    logo: "/Education/umbb.png",
  },
  {
    _id: 3,
    name: "Higher School of Computer Science - Sidi Bel Abbes",
    jobTitle: "Preparatory Class, Computer Science",
    startDate: "2019-12",
    endDate: "2017-07",
    logo: "/Education/esi-sba.png",
  },
];

const Education = () => {
  return (
    <section className="mt-32">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Education
          </h2>
        </div>
      </Slide>

      <Slide delay={0.18}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
          {educationData.map((data) => (
            <div
              key={data._id}
              className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200"
            >
              <div className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative">
                <Image
                  src={data.logo}
                  className="object-cover duration-300"
                  alt={`${data.name} logo`}
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold">{data.name}</h3>
                <p>{data.jobTitle}</p>
                <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                  {formatDate(data.startDate)} -{" "}
                  {data.endDate ? (
                    formatDate(data.endDate)
                  ) : (
                    <span className="dark:text-primary-color text-tertiary-color">
                      Present
                    </span>
                  )}
                </time>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
};

export default Education;
