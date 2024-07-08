import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Footer } from './components/layout/Footer';
import { HobbiesCard } from './components/layout/HobbiesCard';
import { AnimatedPageTransition } from './components/ui/AnimatedPageTransition';
import { DecorationImage } from './components/ui/DecorationImage';
import { Divider } from './components/ui/Divider';
import { ScrollDownButton } from './components/ui/ScrollDownButton';
import { SocialMedias } from './components/ui/SocialMedias';

import ListenMusic from './assets/listen-music.png';
import PlayGuitar from './assets/play-guitar.png';
import WatchMovies from './assets/watch-movies.png';
import { AreasOfExpertiseCard } from './components/layout/AreasOfExpertiseCard';
import { ContentSection } from './components/layout/ContentSection';
import { DEFAULT_TRANSITION } from './constants/defaultTransitionEffect';

function App() {
  const sectionTargetToScrollDown = useRef<HTMLElement | null>(null);

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, ease: [0.22, 1, 0.36, 1] }}
        className="px-5 w-full sm:px-20 md:max-w-full overflow-x-hidden relative bg-black mb-[100vh] md:mb-[50vh] lg:mb-[100vh] 2xl:mb-[50vh] 2xl:px-40"
      >
        <header className="relative py-36 z-10 lg:pt-36 lg:pb-48 2xl:py-64">
          <h1 className="text-4xl lg:text-7xl">Alessandro Miranda</h1>
          <h2 className="font-subHeading text-lg mb-5 lg:text-4xl lg:font-normal">
            Desenvolvedor Front-end
          </h2>
          <p className="text-sm sm:w-3/4 lg:text-lg lg:w-1/2 2xl:text-xl">
            Desenvolvedor em busca de criar sites leves, minimalistas, mas que atendam às
            necessidades dos usuários de forma eficaz.
          </p>

          <SocialMedias />
          <DecorationImage />
          <ScrollDownButton target={sectionTargetToScrollDown} />
        </header>

        <Divider />

        <ContentSection title="Sobre" className="lg:mt-40" ref={sectionTargetToScrollDown}>
          <div className="lg:flex lg:gap-40">
            <div className="mb-5 md:w-3/4 lg:text-lg lg:w-1/2">
              <p className="mb-5 2xl:text-xl">
                Sou um desenvolvedor, atualmente com 26 anos, que ama escrever códigos e criar
                interfaces simples, mas funcionais; e, embora tenha conhecimentos tanto de front
                quanto back, traduzir arquivos de layouts em código é o que mais me fascina.
              </p>
              <p className="2xl:text-xl">
                Sou graduado em Informática para Negócios pela FATEC São Bernardo do Campo
                &quot;Adib Moisés Dib&quot; e atualmente faço parte do time de uma das Big Four,
                atuando como Analista Jr. em Deselvovimento de Soluções de TI, onde tenho a
                oportunidade de participar de projetos diversos, além de atuar com times
                multidisciplinares.
              </p>
            </div>

            <div className="my-10 lg:w-1/2 lg:my-0 lg:-mt-64">
              <motion.p
                initial={DEFAULT_TRANSITION.initial}
                whileInView={DEFAULT_TRANSITION.whileInView}
                viewport={DEFAULT_TRANSITION.viewport}
                transition={DEFAULT_TRANSITION.transition}
                className="font-subHeading text-2xl text-center relative z-10 md:text-4xl md:w-3/4 md:mx-auto lg:w-full lg:text-5xl lg:text-left"
              >
                &quot;Dev, criador de bugs e soluções. Sempre buscando conhecimento e novos
                desafios&quot;
              </motion.p>

              <motion.img
                initial={DEFAULT_TRANSITION.initial}
                whileInView={DEFAULT_TRANSITION.whileInView}
                viewport={DEFAULT_TRANSITION.viewport}
                transition={DEFAULT_TRANSITION.transition}
                src="/profile-picture.jfif"
                alt="Foto de perfil mostrando o rosto de Alessandro Miranda, autor e criador deste site"
                className="w-1/2 ml-auto -mt-10 -z-10 grayscale-[100%] lg:w-3/4"
              />
            </div>
          </div>
        </ContentSection>

        <Divider />

        <ContentSection title="Passatempos">
          <div className="flex flex-col [&>:nth-child(2)]:ml-auto [&>:nth-child(2)]:my-36 lg:[&>:nth-child(3)]:ml-40">
            <HobbiesCard
              title="Ouvir Música"
              image={{ src: ListenMusic, alt: 'Hobbie - Ouvir Música' }}
            />

            <HobbiesCard
              title="Tocar e estudar música"
              image={{ src: PlayGuitar, alt: 'Hobbie - Tocar e estudar música' }}
            />

            <HobbiesCard
              title="Assistir séries e filmes"
              image={{ src: WatchMovies, alt: 'Hobbie - Assistir séries e filmes' }}
            />
          </div>
        </ContentSection>

        <Divider />

        <ContentSection title="Atuação">
          <div className="flex flex-col gap-20">
            <AreasOfExpertiseCard
              expertiseNumber={1}
              description="Transformar códigos em interfaces visuais de valor e que entregam a melhor experiência de navegação para o usuário."
              expertise="Front-end"
            />
            <AreasOfExpertiseCard
              expertiseNumber={2}
              expertise="Back-end"
              description="Traduzir para as linguagens de programação as regras de negócio e processar os dados enviados para o front-end da aplicação."
            />
            <AreasOfExpertiseCard
              expertiseNumber={3}
              expertise="SEO"
              description="Otimização, melhorias de textos, palavras-chave. Buscar o melhor posicionamento de um site nos mecanismos de busca."
            />
          </div>
        </ContentSection>

        <Divider />

        <ContentSection title="Código Certo">
          <motion.p
            initial={DEFAULT_TRANSITION.initial}
            whileInView={DEFAULT_TRANSITION.whileInView}
            viewport={DEFAULT_TRANSITION.viewport}
            transition={DEFAULT_TRANSITION.transition}
            className="lg:text-lg lg:w-1/2 2xl:text-xl"
          >
            Com base na visão da Código Certo, tive a oportunidade de relembrar de parte do
            juramento feito durante minha graduação:
          </motion.p>

          <motion.blockquote
            initial={DEFAULT_TRANSITION.initial}
            whileInView={DEFAULT_TRANSITION.whileInView}
            viewport={DEFAULT_TRANSITION.viewport}
            transition={DEFAULT_TRANSITION.transition}
            className="text-xl text-center my-10 bg-gray-500/20 p-5 rounded-lg md:w-3/4 md:mx-auto md:text-2xl md:p-10 lg:w-1/2 lg:bg-transparent lg:text-3xl lg:my-40 2xl:text-5xl"
          >
            &quot;Não me esquecer que trabalho para o bem do homem e não da máquina.&quot;
          </motion.blockquote>

          <motion.p
            initial={DEFAULT_TRANSITION.initial}
            whileInView={DEFAULT_TRANSITION.whileInView}
            viewport={DEFAULT_TRANSITION.viewport}
            transition={DEFAULT_TRANSITION.transition}
            className="lg:text-lg lg:w-1/2 lg:ml-auto 2xl:text-xl"
          >
            A experiência, aprendizado e networking, são consequências da aplicação do nosso
            conhecimento para o bem do homem. O ambiente inclusivo e de impulsionamento
            proporcionado pela comunidade Código Certo é o misto necessário para que possamos nos
            aprimorar enquanto realizamos atividades voluntárias para o bem do ser humano.
          </motion.p>
        </ContentSection>
      </motion.main>

      <Footer />
      <AnimatedPageTransition />
    </>
  );
}

export default App;
