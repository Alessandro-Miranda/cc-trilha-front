import { motion } from "framer-motion";
import { SocialMedias } from "../ui/SocialMedias";

export function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="px-5 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl overflow-x-hidden bg-white text-black fixed w-full bottom-0 h-screen -z-20 flex flex-col justify-between"
    >
      <div className="py-36">
        <h2 className="text-4xl mb-10">Contato</h2>
        <p className="font-bold">Entre em contato comigo ou me acompanhe nas redes sociais!</p>

        <a
          href="mailto:ad.lmiranda2018@gmail.com"
          className="block mt-10 text-xl"
          target="_blank"
          rel="noreferrer"
        >
          ad.lmiranda2018@gmail.com
        </a>

        <a
          href="https://wa.me/5511958120461"
          className="block mt-5 mb-10 text-xl"
          target="_blank"
          rel="noreferrer"
        >
          +55 (11) 95812-0461
        </a>

        <SocialMedias />
      </div>
      <footer className="text-center mb-10">
        Alessandro Miranda <br /> Copyright @ 2024
      </footer>
    </motion.div>
  );
}