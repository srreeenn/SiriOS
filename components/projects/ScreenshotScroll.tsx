import Image from "next/image";

export function ScreenshotScroll({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="group relative aspect-video w-full overflow-hidden border-b border-border-subtle bg-bg">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 768px"
        className="
          object-cover object-top
          transition-[object-position]
          duration-[6000ms] ease-linear
          group-hover:object-bottom
          motion-reduce:transition-none
          motion-reduce:group-hover:object-top
        "
      />
    </div>
  );
}