import { Slide } from "../animation/Slide";
import Image from "next/image";
import { Metadata } from "next";

// const images = [
//   {
//     id: "1",
//     src: "/jobs/djezzy.png",
//   },
//   {
//     id: "2",
//     src: "/jobs/djezzy.png",
//   },
//   {
//     id: "3",
//     src: "/jobs/djezzy.png",
//   },
// ];

export const metadata: Metadata = {
  title: "Photography | Merouane",
};

export default function Photos() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <div className="lg:max-w-2xl max-w-2xl">
        <Slide>
          <h1 className="font-incognito font-black tracking-tight text-3xl sm:text-5xl mb-3 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
            Photos
          </h1>
          <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            This page is still under construction...
          </p>
        </Slide>
      </div>
      {/* <figure className="my-6">
        <Slide delay={0.12} className="flex flex-wrap gap-2">
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt="playing guitar"
              width={350}
              height={800}
              className="dark:bg-primary-bg bg-secondary-bg"
            />
          ))}
        </Slide>
      </figure> */}
    </main>
  );
}
