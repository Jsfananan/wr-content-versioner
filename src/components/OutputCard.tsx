'use client';

import { useState } from 'react';

interface OutputCardProps {
  officeName: string;
  directorName: string;
  content: string;
  isLoading?: boolean;
}

export default function OutputCard({
  officeName,
  directorName,
  content,
  isLoading = false,
}: OutputCardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — no-op
    }
  }

  return (
    <article className="bg-white rounded-lg border border-gray-200 border-t-4 border-t-[#009DDC] flex flex-col overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100">
        <h3 className="text-sm font-semibold text-gray-900 leading-tight">{officeName}</h3>
        <p className="text-xs text-gray-500 mt-0.5">{directorName}</p>
      </div>

      <div className="flex-1 px-5 py-4">
        {isLoading ? (
          <div className="flex flex-col gap-2.5 animate-pulse" aria-label="Generating content">
            <div className="h-3 bg-gray-100 rounded w-full" />
            <div className="h-3 bg-gray-100 rounded w-5/6" />
            <div className="h-3 bg-gray-100 rounded w-full" />
            <div className="h-3 bg-gray-100 rounded w-4/6" />
            <div className="h-3 bg-gray-100 rounded w-full" />
            <div className="h-3 bg-gray-100 rounded w-3/4" />
            <p className="text-xs text-gray-400 mt-1">Generating...</p>
          </div>
        ) : (
          <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
            {content}
          </pre>
        )}
      </div>

      {!isLoading && (
        <div className="px-5 py-3 border-t border-gray-100 flex justify-end">
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-gray-200 text-gray-600 hover:border-[#009DDC] hover:text-[#009DDC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#009DDC] focus:ring-offset-1"
          >
            {copied ? (
              <>
                <svg
                  className="w-3.5 h-3.5 text-[#009DDC]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Copy to Clipboard
              </>
            )}
          </button>
        </div>
      )}
    </article>
  );
}
