import { For } from 'solid-js';

interface ProjectTitleProps {
  title: string;
  description: string;
  small?: boolean;
}

export default function ProjectTitle({
  title,
  description,
  small,
}: ProjectTitleProps) {
  return (
    <div className="w-fit mx-auto">
      <h1
        className={`w-fit p-0 text-white-90 font-semibold ${
          small ? 'text-5xl' : 'text-6xl md:text-display-xl'
        }  leading-tighter`}
      >
        {title}
      </h1>
      <div
        className={`flex justify-between ${
          small ? 'text-lg' : 'text-3xl'
        } text-white-70`}
      >
        <For each={description.split(' ')}>{(word) => <span>{word}</span>}</For>
      </div>
    </div>
  );
}
