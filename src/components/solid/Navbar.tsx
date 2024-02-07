import { For } from 'solid-js';
import type { ClassProps } from '../../interfaces/ClassProps';
import { twJoin } from 'tailwind-merge';

interface NavbarProps extends ClassProps {
  compact?: boolean;
}

export default function Navbar({ compact, class: className }: NavbarProps) {
  const routes = [
    { name: 'About', path: '/#about' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav
      class={twJoin(
        'fixed left-0 top-0 z-10 flex w-full items-center justify-between border-b border-white-30 px-4 py-3 backdrop-blur-sm sm:px-8',
        className,
      )}
    >
      <a href="/" class="z-10 h-[38pt] overflow-hidden">
        <div class="flex flex-col text-body-sm font-extrabold leading-tighter text-white-70 transition hover:-translate-y-1/3 hover:text-white-90">
          <span>Felix</span>
          <span>Blaimauer</span>
          <span>Felix</span>
        </div>
      </a>

      {compact || (
        <div class="z-10 flex gap-6 ">
          <For each={routes}>
            {(route) => (
              <a
                href={route.path}
                class="hidden text-xl font-medium text-white-90 sm:inline"
              >
                {route.name}
              </a>
            )}
          </For>
          <a
            href="MORE"
            class="inline text-xl font-medium text-white-90 sm:hidden"
          >
            MORE
          </a>
        </div>
      )}
    </nav>
  );
}
