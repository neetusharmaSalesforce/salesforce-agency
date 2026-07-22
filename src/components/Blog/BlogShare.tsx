"use client";

import { useEffect, useState } from "react";
import {
  Share2,
  Link2,
  Globe,
  Send,
} from "lucide-react";

type Props = {
  title: string;
};

export default function BlogShare({ title }: Props) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copied!");
    } catch {
      alert("Unable to copy link.");
    }
  };

  if (!url) {
    return null;
  }

  return (
    <div className="mt-16 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

      <h3 className="text-2xl font-bold text-gray-900">
        Share this article
      </h3>

      <p className="mt-3 text-gray-600">
        Help others discover this article.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">

        {/* Facebook */}

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-blue-600 p-4 text-white transition hover:scale-105"
        >
          <Share2 size={22} />
        </a>

        {/* LinkedIn */}

        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            url
          )}&title=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-sky-700 p-4 text-white transition hover:scale-105"
        >
          <Globe size={22} />
        </a>

        {/* Twitter / X */}

        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            title
          )}&url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-black p-4 text-white transition hover:scale-105"
        >
          <Send size={22} />
        </a>

        {/* Copy Link */}

        <button
          onClick={copyLink}
          className="rounded-xl bg-gray-200 p-4 transition hover:bg-gray-300"
        >
          <Link2 size={22} />
        </button>

      </div>

    </div>
  );
}