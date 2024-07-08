import { motion } from "framer-motion";
import { DEFAULT_TRANSITION } from "../../constants/defaultTransitionEffect";

type Props = {
  image: {
    src: React.ImgHTMLAttributes<HTMLImageElement>['src'];
    alt: React.ImgHTMLAttributes<HTMLImageElement>['alt']
  };
  title: string;
}

export function HobbiesCard({ image, title }: Props) {
  return (
    <article className="w-1/2 lg:w-2/5">
      <motion.img
        initial={DEFAULT_TRANSITION.initial}
        whileInView={DEFAULT_TRANSITION.whileInView}
        viewport={DEFAULT_TRANSITION.viewport}
        transition={DEFAULT_TRANSITION.transition}
        src={image.src}
        alt={image.alt}
        className="h-auto w-full max-w-44 md:max-w-full lg:max-w-96 2xl:max-w-lg"
        loading="lazy"
      />

      <motion.p
        initial={DEFAULT_TRANSITION.initial}
        whileInView={DEFAULT_TRANSITION.whileInView}
        viewport={DEFAULT_TRANSITION.viewport}
        transition={DEFAULT_TRANSITION.transition}
        className="text-red font-semibold mt-5 lg:text-lg 2xl:text-xl"
      >
        {title}
      </motion.p>
    </article>
  );
}