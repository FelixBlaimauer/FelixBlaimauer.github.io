import { twJoin } from 'tailwind-merge';
import type { ClassProps } from '../../interfaces/ClassProps';

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
        'flex w-full flex-wrap gap-x-20 gap-y-4 border-t border-white-30 px-12 py-8 text-white-90 sm:justify-center md:gap-x-80',
        className,
      )}
    >
      <div>
        <h4 class="text-4xl font-semibold text-primary">Contact</h4>
        <ul>
          <li>{name}</li>
          <li>{email}</li>
          <li>{phone}</li>
        </ul>
      </div>

      <div>
        <h4 class="text-4xl font-semibold text-primary">Pages</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/legal">Legal</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
