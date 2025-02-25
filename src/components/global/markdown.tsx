import ReactMarkdown, { Components } from "react-markdown";
import { CodeBlock } from "../ui/code-block";

const markdownText = `
# React Markdown Example

- Some text
- Some other text

## Subtitle

### Additional info

This is a [link](https://github.com/remarkjs/react-markdown)

~~~py
const aJsVariable = "Test";

console.log(aJsVariable);
~~~
`;

export default function Markdown() {
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
        {markdownText}
      </ReactMarkdown>
    </section>
  );
}
