import type { ReactNode } from "react";
import styles from "./ui.module.css";

function blocks(markdown: string) {
  const lines = markdown.split("\n");
  const nodes: ReactNode[] = [];
  let index = 0;
  let key = 0;

  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
      continue;
    }

    const heading = /^(#{2,4})\s+(.*)$/.exec(line.trim());
    if (heading) {
      const level = heading[1].length;
      const text = heading[2];
      if (level === 2) nodes.push(<h2 key={key}>{text}</h2>);
      else if (level === 3) nodes.push(<h3 key={key}>{text}</h3>);
      else nodes.push(<h4 key={key}>{text}</h4>);
      key += 1;
      index += 1;
      continue;
    }

    if (line.trim().startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }
      nodes.push(
        <ul key={key}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>,
      );
      key += 1;
      continue;
    }

    const paragraph = [line.trim()];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].trim().startsWith("#") &&
      !lines[index].trim().startsWith("- ")
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    const text = paragraph.join(" ");
    if (/^(introduction|conclusion)$/i.test(text)) {
      nodes.push(<h2 key={key}>{text}</h2>);
    } else {
      nodes.push(<p key={key}>{text}</p>);
    }
    key += 1;
  }

  return nodes;
}

export function ArticleBody({ markdown }: { markdown: string }) {
  return <article className={styles.article}>{blocks(markdown)}</article>;
}
