import 'solid-js';
import { twJoin } from 'tailwind-merge';
import type { ClassProps } from '../interfaces/ClassProps';

interface FooterProps extends ClassProps {
  name: string;
  email: string;
  phone: string;
}

export default function Footer({
  class: className,
  name,
  email,
  phone,
}: FooterProps) {
  return (
    <footer
      class={twJoin(
        'w-full px-12 py-8 border-t border-white-30 flex flex-wrap justify-center gap-x-80 gap-y-4',
        className
      )}
    >
      <div>
        <p class="font-semibold text-4xl text-primary">Contact</p>
        <ul>
          <li>{name}</li>
          <li>{email}</li>
          <li>{phone}</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold text-4xl text-primary">Pages</p>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Imprint</li>
        </ul>
      </div>
    </footer>
  );
}
