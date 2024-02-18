import { twJoin } from 'tailwind-merge';
import type { ClassProps } from '../../interfaces/ClassProps';

interface TagProps extends ClassProps {
  tag: string;
}

export default function Tag({ class: className, tag }: TagProps) {
  return (
    <div
      class={twJoin(
        'inline-flex items-center gap-1 rounded-full bg-primary pl-1.5 pr-3 text-background',
        className,
      )}
    >
      <div class="h-3.5 w-3.5 rounded-full bg-background"></div>
      <span class="font-medium">{tag}</span>
    </div>
  );
}
