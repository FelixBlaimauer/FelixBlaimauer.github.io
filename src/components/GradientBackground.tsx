import { twMerge } from 'tailwind-merge';
import type { ClassProps } from '../interfaces/ClassProps';

export default function ({ class: className }: ClassProps) {
  return (
    <div
      id="gradient-background"
      class={twMerge('absolute -top-2 w-full h-[52rem] -z-10', className)}
      style={{
        background:
          'radial-gradient(50% 50% at 50% 50%, rgba(206, 255, 183, 0.26) 0%, rgba(78, 255, 138, 0.26) 25.94%, rgba(69, 255, 132, 0.00) 100%)',
      }}
    ></div>
  );
}
