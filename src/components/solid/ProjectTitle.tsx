import { For } from 'solid-js';
import type { ClassProps } from '../../interfaces/ClassProps';
import { twJoin } from 'tailwind-merge';

interface ProjectTitleProps extends ClassProps {
  title: string;
  description: string;
  small?: boolean;
  h1?: boolean;
}

export default function ProjectTitle({
  title,
  description,
  small,
  h1,
  class: className,
}: ProjectTitleProps) {
  const computeClass = twJoin(
    className,
    'w-fit p-0 text-white-90 font-semibold leading-tighter',
    small ? 'text-5xl' : 'text-6xl md:text-display-xl',
  );

  return (
    <div class="mx-auto w-fit">
      {h1 ? (
        <h1 class={computeClass}>{title}</h1>
      ) : (
        <p class={computeClass}>{title}</p>
      )}
      <div
        class={`flex justify-between ${
          small ? 'text-lg' : 'mt-1 text-3xl'
        } text-white-70`}
      >
        <For each={description.split(' ')}>{(word) => <span>{word}</span>}</For>
      </div>
    </div>
  );
}
