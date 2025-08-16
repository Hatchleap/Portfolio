"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Tag = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm font-medium py-2 px-4 flex items-center justify-center">
      <span className="truncate">
        SentinelOne to Acquire Prompt Security to Advance GenAI Security
      </span>
      <Link
        href="/blog/prompt-security-acquisition"
        className="ml-6 flex items-center font-semibold hover:underline"
      >
        Read Blog
        <ArrowRightIcon className="ml-1 w-4 h-4" />
      </Link>
    </div>
  );
};

export default Tag;
