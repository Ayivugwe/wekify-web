"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { cn } from "@/lib/utils";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function Editor({ value, onChange, className }: EditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          rel: "noopener noreferrer",
          class: "text-primary-600 hover:text-primary-800 underline",
        },
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <EditorContent
      editor={editor}
      className={cn(
        "prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto focus:outline-none",
        className
      )}
    />
  );
} 