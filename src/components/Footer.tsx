import { twMerge } from 'tailwind-merge';
import type { ClassProps } from '../interfaces/ClassProps';

export default function Footer({ class: className }: ClassProps) {
  return (
    <footer
      class={twMerge(
        'w-full px-12 py-4 border-t border-white-30 flex justify-center gap-6',
        className
      )}
    >
      <ul>
        <li>Hello</li>
      </ul>
    </footer>
  );
}
