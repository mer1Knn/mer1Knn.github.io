import Image from "next/image";

type imageProp = {
  value: {
    alt: string;
    caption: string;
  };
};

export default function SampleImageComponent({ value }: imageProp) {
  return (
    <figure className="my-10 relative">
      <Image
        className="rounded-sm object-contain object-left-top aspect-auto"
        src="{urlFor(value).url()}"
        alt={value.alt || ""}
        loading="lazy"
        width={900}
        height={900}
        placeholder="blur"
        quality={100}
      />
      {value.caption && (
        <figcaption className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
}
