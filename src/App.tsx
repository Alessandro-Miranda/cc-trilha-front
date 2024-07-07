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
import PlayGuitar from './assets/play-guitar.jpg';
import WatchMovies from './assets/watch-movies.jpg';
import { AreasOfExpertiseCard } from './components/layout/AreasOfExpertiseCard';
import { DEFAULT_TRANSITION } from './constants/defaultTransitionEffect';

function App() {
  const sectionTargetToScrollDown = useRef<HTMLElement | null>(null);

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, ease: [0.22, 1, 0.36, 1] }}
        className="px-5 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl overflow-x-hidden relative bg-black mb-[100vh]"
      >
        <header className="relative py-36 z-10">
          <h1 className="text-4xl">Alessandro Miranda</h1>
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
          <h2 className="text-4xl mb-20">Sobre</h2>

          <div>
            <div className="mb-5">
              <p className="mb-5">
                Sou um desenvolvedor, atualmente com 26 anos, que ama escrever códigos e criar
                interfaces simples, mas funcionais; e, embora tenha conhecimentos tanto de front
                quanto back, traduzir arquivos de layouts em código é o que me fascina.
              </p>
              <p>
                Sou graduado em Informática para Negócios pela FATEC São Bernardo do Campo
                &quot;Adib Moisés Dib&quot; e atualmente faço parte do time de uma das Big Four,
                atuando como Analista Jr. em Deselvovimento de Soluções de TI, onde tenho a
                oportunidade de participar de projetos diversos, além de atuar com times
                multidisciplinares.
              </p>
            </div>

            <div className="my-10">
              <motion.p
                initial={DEFAULT_TRANSITION.initial}
                whileInView={DEFAULT_TRANSITION.whileInView}
                viewport={DEFAULT_TRANSITION.viewport}
                transition={DEFAULT_TRANSITION.transition}
                className="font-subHeading text-2xl text-center relative z-10"
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
                className="w-1/2 ml-auto -mt-10 -z-10 grayscale-[100%]"
              />
            </div>
          </div>
        </section>

        <Divider />

        <div className="py-36">
          <h2 className="text-4xl mb-20">Passatempos</h2>

          <div className="flex flex-col [&>:nth-child(2)]:ml-auto [&>:nth-child(2)]:my-36">
            <HobbiesCard
              title="Ouvir Música"
              image={{ src: ListenMusic, alt: 'Hobbie - Ouvir Música' }}
              credits={{
                description: 'Imagem de freepik',
                link: 'https://br.freepik.com/fotos-gratis/guitarra-eletrica-em-um-belo-cenario-de-natureza-morta_171772157.htm#fromView=search&page=1&position=40&uuid=134b4427-20f8-4183-9965-42f5be38c4e9',
              }}
            />

            <HobbiesCard
              title="Tocar Violão"
              image={{ src: PlayGuitar, alt: 'Hobbie - Tocar Violão' }}
              credits={{
                link: 'https://br.freepik.com/fotos-gratis/fundo-musical-volumetrico-com-uma-clave-de-sol-e-ia-geradora-de-notas_39872708.htm#fromView=search&page=1&position=0&uuid=54c69a28-00c0-4630-a096-4bedd0ca061c',
                description: 'Imagem de pvproductions no Freepik',
              }}
            />

            <HobbiesCard
              title="Assistir séries e filmes"
              image={{ src: WatchMovies, alt: 'Hobbie - Assistir séries e filmes' }}
              credits={{
                description: 'Imagem de freepik',
                link: 'https://br.freepik.com/fotos-gratis/retrato-preto-e-branco-de-mulher-com-claquete-no-antigo-estilo-glamouroso-de-hollywood_62974137.htm#fromView=search&page=1&position=29&uuid=e38bddd7-9791-40ce-a462-e2b27793564d',
              }}
            />
          </div>
        </div>

        <Divider />

        <section className="py-36">
          <h2 className="text-4xl">Atuação</h2>

          <div className="mt-20 flex flex-col gap-20">
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
        </section>

        <Divider />

        <section className="py-36">
          <h2 className="text-4xl mb-20">Código Certo</h2>

          <p>
            Com a Código Certo, tive a oportunidade de relembrar de parte do juramento feito durante
            minha graduação:
          </p>
          <blockquote className="text-xl text-center my-10 bg-gray-500/20 p-5 rounded-lg">
            &quot;Não me esquecer que trabalho para o bem do homem e não da máquina.&quot;
          </blockquote>

          <p>
            A experiência, aprendizado e networking, são consequências da aplicação do nosso
            conhecimento para o bem do homem. O ambiente inclusivo e de impulsionamento
            proporcionado pela comunidade Código Certo é o misto necessário para que possamos nos
            aprimorar enquanto realizamos atividades voluntárias para o bem do ser humano.
          </p>
        </section>
      </motion.main>

      <Footer />

      <AnimatedPageTransition />
    </>
  );
}

export default App;
