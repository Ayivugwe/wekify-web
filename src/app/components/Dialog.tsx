"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import React from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Dialog({
  isOpen,
  onClose,
  title,
  children,
}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      if (isOpen) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }
  }, [isOpen]);

  const handleSearch = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(e.target.value);
  };

  const filteredChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    const element = child as React.ReactElement<{ children: string }>;
    const content = element.props.children;

    if (
      typeof content === "string" &&
      !content.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return null;
    }
    return child;
  });

  return (
    <dialog
      ref={dialogRef}
      className="backdrop:bg-black/50 p-0 bg-transparent"
      onClose={onClose}
    >
      <div className="min-w-[300px] max-w-[90%] rounded-lg bg-white shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-2 border rounded-lg mb-4"
          />
          {filteredChildren}
        </div>
      </div>
    </dialog>
  );
}
