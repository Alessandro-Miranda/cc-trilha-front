import { motion } from "framer-motion";
import { SocialMedias } from "../ui/SocialMedias";
import { TechsUsedInCreation } from "../ui/TechsUsedInCreation";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="px-5 w-full bg-white text-black fixed bottom-0 h-screen overflow-x-hidden -z-20 flex flex-col justify-between sm:px-20 md:h-[40vh] lg:h-screen 2xl:h-[50vh] 2xl:px-40"
    >
      <div className="pt-24 md:pt-36 lg:pb-0 flex flex-col lg:flex-row lg:gap-40">
        <div className="2xl:w-1/2">
          <h2 className="text-4xl mb-10 lg:text-6xl">Contato</h2>
          <p className="font-bold lg:text-lg">
            Entre em contato comigo ou me acompanhe nas redes sociais!
          </p>

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
            className="block mb-10 text-xl"
            target="_blank"
            rel="noreferrer"
          >
            +55 (11) 95812-0461
          </a>

          <SocialMedias />
        </div>

        <div className="mt-10 lg:w-1/2">
          <h3 className="text-2xl lg:text-6xl">Criado com ❤️ e:</h3>

          <TechsUsedInCreation />
        </div>
      </div>
      <small className="text-center mb-10">
        Alessandro Miranda <br /> Copyright @ 2024
      </small>
    </motion.footer>
  );
}