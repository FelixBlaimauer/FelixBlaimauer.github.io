import type { ClassProps } from '../interfaces/ClassProps';

interface TagProps extends ClassProps {
  tag: string;
}

export default function Tag({ class: className, tag }: TagProps) {
  return (
    <div className="rounded-full inline-flex items-center gap-1 pl-1.5 pr-3 bg-primary text-black">
      <div className="w-3.5 h-3.5 bg-black rounded-full"></div>
      <span className="font-medium">{tag}</span>
    </div>
  );
}
