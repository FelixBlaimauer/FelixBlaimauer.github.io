import { twJoin } from 'tailwind-merge';
import type { ClassProps } from '../../interfaces/ClassProps';

export default function ScrollIndicator({ class: className }: ClassProps) {
  return (
    <div class={twJoin(className, 'flex flex-col gap-2 rounded-full p-2')}>
      <div class="aspect-square h-3 rounded-full border border-white-30 bg-primary"></div>
      <div class="aspect-square h-3 rounded-full border border-white-30"></div>
      <div class="aspect-square h-3 rounded-full border border-white-30"></div>
      <div class="aspect-square h-3 rounded-full border border-white-30"></div>
    </div>
  );
}
