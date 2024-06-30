"use client";

import { useState } from "react";
import { LinkIcon } from "@heroicons/react/24/solid";

export default function ShareLinkButton() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => {
      setCopied(true);
    }, 500);
  };
  return (
    <>
      <button
        onClick={handleCopyLink}
        className="flex items-center gap-2 px-2 py-1 rounded-md bg-teal-500 text-white hover:bg-teal-600"
      >
        {copied ? "Copied Link" : "Share Link"}
        <LinkIcon className="h-4 w-4" />
      </button>
    </>
  );
}
