import { For } from 'solid-js';

interface ProjectTitleProps {
  title: string;
  description: string;
}

export default function ProjectTitle({
  title,
  description,
}: ProjectTitleProps) {
  return (
    <div class="w-fit mx-auto">
      <h1 class="w-fit p-0 text-white-90 md:text-display-xl font-semibold text-6xl leading-tighter">
        {title}
      </h1>
      <div class="flex justify-between text-3xl text-white-70">
        <For each={description.split(' ')}>{(word) => <span>{word}</span>}</For>
      </div>
    </div>
  );
}
