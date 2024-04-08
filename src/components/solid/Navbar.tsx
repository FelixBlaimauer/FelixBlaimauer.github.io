import { For } from 'solid-js';
import type { ClassProps } from '../../interfaces/ClassProps';
import { twJoin } from 'tailwind-merge';
import NavLink from './NavLink';

interface NavbarProps extends ClassProps {
  compact?: boolean;
  locale?: 'en' | 'de';
}

export default function Navbar({
  compact,
  locale = 'en',
  class: className,
}: NavbarProps) {
  const routes = {
    en: [
      { name: 'About', path: `/${locale}#about` },
      { name: 'Projects', path: `/${locale}#projects` },
      { name: 'Contact', path: `/${locale}#contact` },
    ],
    de: [
      { name: 'Über', path: `/${locale}#über` },
      { name: 'Projekte', path: `/${locale}#projekte` },
      { name: 'Kontakt', path: `/${locale}#kontakt` },
    ],
  };

  return (
    <nav
      class={twJoin(
        'fixed left-0 top-0 z-30 flex h-20 w-full items-center justify-between border-b border-white-30 px-4 backdrop-blur-sm sm:px-8',
        className,
      )}
    >
      <a
        href={`/${locale}`}
        class="cursor-custom z-10 h-[38pt] cursor-none overflow-hidden"
      >
        <div class="flex flex-col text-body-sm font-extrabold leading-tighter text-white-70 transition hover:-translate-y-1/3 hover:text-white-90">
          <span>Felix</span>
          <span>Blaimauer</span>
          <span>Felix</span>
        </div>
      </a>

      {compact || (
        <div class="z-10 flex gap-6 ">
          <For each={routes[locale]}>
            {(route) => (
              <a
                href={route.path}
                class="hidden text-xl font-medium text-white-90-opaque sm:inline"
              >
                <NavLink text={route.name} />
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
