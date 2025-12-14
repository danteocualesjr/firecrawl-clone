"use client";

import { useEffect, useState } from "react";

interface CodeBlockProps {
  code: string;
  language: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const [SyntaxHighlighter, setSyntaxHighlighter] = useState<any>(null);
  const [style, setStyle] = useState<any>(null);

  useEffect(() => {
    import("react-syntax-highlighter").then((mod) => {
      setSyntaxHighlighter(() => mod.Prism);
    });
    import("react-syntax-highlighter/dist/esm/styles/prism").then((mod) => {
      setStyle(mod.oneDark);
    });
  }, []);

  if (!SyntaxHighlighter || !style) {
    return (
      <div className="rounded-lg overflow-hidden bg-[#1a1a1a] p-6">
        <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">
          <code>{code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden">
      <SyntaxHighlighter
        language={language}
        style={style}
        customStyle={{
          margin: 0,
          padding: "1.5rem",
          backgroundColor: "#1a1a1a",
          fontSize: "0.875rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

