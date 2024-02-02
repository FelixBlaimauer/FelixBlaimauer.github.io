import { For } from "solid-js";

interface ProjectTitleProps {
  title: string;
  description: string;
  small?: boolean;
  h1?: boolean;
}

export default function ProjectTitle({
  title,
  description,
  small,
  h1,
}: ProjectTitleProps) {
  const className = `w-fit p-0 text-white-90 font-semibold ${
    small ? "text-5xl" : "text-6xl md:text-display-xl"
  }  leading-tighter`;

  return (
    <div class="mx-auto w-fit">
      {h1 ? (
        <h1 class={className}>{title}</h1>
      ) : (
        <h4 class={className}>{title}</h4>
      )}
      <div
        class={`flex justify-between ${
          small ? "text-lg" : "mt-1 text-3xl"
        } text-white-70`}
      >
        <For each={description.split(" ")}>{(word) => <span>{word}</span>}</For>
      </div>
    </div>
  );
}
