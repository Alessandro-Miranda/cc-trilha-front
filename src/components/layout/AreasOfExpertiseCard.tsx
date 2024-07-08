import { motion } from 'framer-motion';

type CardProps = {
  expertiseNumber: number;
  expertise: string;
  description: string;
};

export function AreasOfExpertiseCard({ description, expertise, expertiseNumber }: CardProps) {
  return (
    <article className="overflow-hidden">
      <div className="flex justify-between items-center mb-5 md:w-3/4 md:ml-auto">
        <motion.span
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-4xl lg:text-5xl"
        >
          {String(expertiseNumber).padStart(2, '0')}
        </motion.span>
        <motion.h3
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-right w-10/12 text-4xl font-medium border-b-2 border-red pb-1 lg:text-7xl"
        >
          {expertise}
        </motion.h3>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-10/12 ml-auto md:text-lg md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:text-xl"
      >
        {description}
      </motion.p>
    </article>
  );
}
