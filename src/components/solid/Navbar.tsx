import { For, createSignal } from 'solid-js';
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
      { name: 'Über', path: `/${locale}#ueber` },
      { name: 'Projekte', path: `/${locale}#projekte` },
      { name: 'Kontakt', path: `/${locale}#kontakt` },
    ],
  };

  const [modalOpen, setModalOpen] = createSignal(false);

  return (
    <>
      <nav
        class={twJoin(
          'fixed left-0 top-0 z-30 flex h-20 w-[calc(100vw-(100vw-100%))] items-center justify-between border-b border-white-30 px-4 backdrop-blur-sm',
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
            <button
              type="button"
              aria-label="Opens more navigation links"
              class="inline text-xl font-medium text-white-90 sm:hidden"
              onClick={() => setModalOpen(true)}
            >
              MORE
            </button>
          </div>
        )}
      </nav>
      {modalOpen() && (
        <>
          <div class="fixed -top-10 left-0 right-0 z-50 h-fit border-b-2 border-white/20 bg-background/40 p-4 pt-14 text-white-90-opaque backdrop-blur-md">
            <p class="text-center text-4xl font-semibold text-primary">
              Navigation
            </p>
            <div class="mt-4 flex flex-col gap-4">
              <For each={routes[locale]}>
                {(route) => (
                  <a
                    href={route.path}
                    class="block text-4xl font-medium text-white-90-opaque"
                    onClick={() => setModalOpen(false)}
                  >
                    <NavLink text={route.name} />
                  </a>
                )}
              </For>
            </div>
          </div>
          <div class="fixed inset-0 z-40" onClick={() => setModalOpen(false)} />
        </>
      )}
    </>
  );
}
