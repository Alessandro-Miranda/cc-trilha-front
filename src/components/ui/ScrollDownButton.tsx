import { motion } from "framer-motion";
import { MutableRefObject } from "react";

export function ScrollDownButton(
  { target }: { target: MutableRefObject<HTMLElement | null> }
) {
  function onScrollClick(target: MutableRefObject<HTMLElement | null>) {
    target.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest',
    });
  }

  return (
    <button
      className="uppercase absolute -right-3 bottom-28 rotate-90"
      onClick={() => onScrollClick(target)}
    >
      <span className="inline-block -rotate-180 text-[10px]" id="scroll-label">
        Scroll down
      </span>

      <motion.img
        src="/scroll-down.svg"
        className="max-w-96 w-20 absolute bottom-2 left-5"
        animate={{ x: [10, 8, 10] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </button>
  );
}