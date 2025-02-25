import ReactMarkdown, { Components } from "react-markdown";
import { CodeBlock } from "@/components/ui/code-block";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function MarkdownPage() {
  const { filename } = useParams();

  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch(`/posts/${filename}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, [filename]);

  const markdownComponents: Components = {
    code({ className, children, ...rest }) {
      const match = /language-(\w+)/.exec(className || "");
      if (!match) {
        return (
          <code {...rest} className={className}>
            {children}
          </code>
        );
      }

      return (
        <CodeBlock
          language={match[1]}
          filename={`main.${match[1]}`}
          code={children as string}
        />
      );
    },
  };

  return (
    <section className="prose prose-sm prose-pre:bg-transparent prose-pre:p-0">
      <ReactMarkdown components={markdownComponents}>
        {markdownContent}
      </ReactMarkdown>
    </section>
  );
}
