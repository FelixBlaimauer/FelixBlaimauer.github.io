import { twJoin } from 'tailwind-merge';
import type { ClassProps } from '../../interfaces/ClassProps';
import { For } from 'solid-js';

interface NavLinkProps extends ClassProps {
  text: string;
  opaque?: boolean;
}

export default function NavLink({
  text,
  class: className,
  opaque = true,
}: NavLinkProps) {
  return (
    <div
      class={twJoin(
        className,
        'cursor-custom group relative flex w-fit cursor-none items-center overflow-x-clip text-current [&>span:nth-child(odd)]:z-20',
      )}
    >
      <For each={text.split('')}>
        {(letter) =>
          letter == ' ' ? <span>&nbsp;</span> : <span>{letter}</span>
        }
      </For>
      <div class={twJoin(!opaque && 'opacity-75')}>
        <div class="absolute -left-[101%] top-1/2 z-10 h-1/6 w-full -translate-y-1/2 bg-primary transition-all group-hover:left-0"></div>
        <div class="absolute -left-[101%] top-1/2 z-10 h-1/6 w-full -translate-y-1/2 bg-secondary transition-all duration-300 group-hover:left-0"></div>
        <div class="absolute -left-[101%] top-1/2 z-10 h-1/6 w-full -translate-y-1/2 bg-accent transition-all duration-500 group-hover:left-0"></div>
      </div>{' '}
    </div>
  );
}
