import { For } from 'solid-js';

interface NavbarProps {
  compact?: boolean;
}

export default function Navbar({ compact }: NavbarProps) {
  const routes = [
    { name: 'About', path: '/#about' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav className="fixed backdrop-blur-sm top-0 left-0 w-full px-8 py-3 border-b border-white-30 flex justify-between items-center z-10">
      <div className="h-[38pt] overflow-hidden">
        <div className="flex flex-col text-body-sm font-extrabold text-white-70 hover:text-white-90 leading-tighter transition hover:-translate-y-1/3">
          <span>Felix</span>
          <span>Blaimauer</span>
          <span>Felix</span>
        </div>
      </div>

      {compact || (
        <div className="flex gap-4">
          <For each={routes}>
            {(route) => (
              <a
                href={route.path}
                className="text-white-90 text-xl font-medium"
              >
                {route.name}
              </a>
            )}
          </For>
        </div>
      )}
    </nav>
  );
}
