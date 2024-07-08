import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function ContentSection({
  children,
  className,
  title,
  ...props
}: Props & Omit<ComponentProps<'section'>, 'className'>) {
  return (
    <section className={twMerge('py-36 2xl:py-64', className)} {...props}>
      <h2 className="text-4xl mb-20 lg:text-6xl 2xl:mb-40">{title}</h2>
      {children}
    </section>
  );
}
