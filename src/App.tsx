import { motion } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedPageTransition } from './components/ui/AnimatedPageTransition';
import { DecorationImage } from './components/ui/DecorationImage';
import { Divider } from './components/ui/Divider';
import { ScrollDownButton } from './components/ui/ScrollDownButton';
import { SocialMedias } from './components/ui/SocialMedias';

function App() {

  const sectionTargetToScrollDown = useRef<HTMLElement|null>(null);

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, ease: [0.22, 1, 0.36, 1] }}
        className="px-5 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl overflow-x-hidden"
      >
        <header className="relative py-36">
          <h1 className="text-4xl font-semibold ">Alessandro Miranda</h1>
          <h2 className="font-subHeading text-lg mb-5">Desenvolvedor Front-end</h2>
          <p className="text-sm">
            Desenvolvedor em busca de criar sites leves, minimalistas, mas que atendam às
            necessidades dos usuários de forma eficaz.
          </p>

          <SocialMedias />

          <DecorationImage />
          <ScrollDownButton target={sectionTargetToScrollDown} />
        </header>

        <Divider />

        <section className="py-36" ref={sectionTargetToScrollDown}>
          
        </section>
      </motion.main>

      <AnimatedPageTransition />
    </>
  );
}

export default App;
