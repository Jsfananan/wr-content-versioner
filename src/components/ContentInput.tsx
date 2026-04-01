'use client';

import { useState } from 'react';
import type { ContentType } from '@/types';

interface ContentInputProps {
  content: string;
  onContentChange: (content: string) => void;
  contentType: ContentType;
  onContentTypeChange: (type: ContentType) => void;
  additionalInstructions: string;
  onAdditionalInstructionsChange: (instructions: string) => void;
  disabled?: boolean;
}

const CONTENT_TYPES: { value: ContentType; label: string }[] = [
  { value: 'email', label: 'Email' },
  { value: 'invitation', label: 'Invitation' },
];

export default function ContentInput({
  content,
  onContentChange,
  contentType,
  onContentTypeChange,
  additionalInstructions,
  onAdditionalInstructionsChange,
  disabled = false,
}: ContentInputProps) {
  const [instructionsOpen, setInstructionsOpen] = useState(false);
  const charCount = content.length;

  return (
    <section className={`bg-white rounded-lg border border-gray-200 shadow-sm p-6 flex flex-col gap-4 transition-opacity duration-200 ${disabled ? 'opacity-50 pointer-events-none' : ''}`}>
      <h2 className="text-base font-semibold text-gray-900">Source Content</h2>

      <div className="flex gap-2">
        {CONTENT_TYPES.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => onContentTypeChange(value)}
            className={`px-4 py-2 text-sm font-medium rounded-md border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#009DDC] focus:ring-offset-1 ${
              contentType === value
                ? 'bg-[#009DDC] border-[#009DDC] text-white shadow-sm'
                : 'bg-white border-gray-200 text-gray-600 hover:border-[#009DDC] hover:text-[#009DDC]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="relative">
        <textarea
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          placeholder="Paste your email or invitation content here. Include subject line, body, and any specific details you want preserved."
          rows={8}
          className="w-full min-h-[200px] px-3 py-2.5 pb-7 text-sm border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-[#009DDC] focus:border-[#009DDC] transition-all duration-200 leading-relaxed"
        />
        <span className="absolute bottom-2.5 right-3 text-[11px] text-gray-400 select-none pointer-events-none tabular-nums">
          {charCount > 0 ? `${charCount.toLocaleString()} chars` : ''}
        </span>
      </div>

      <div className="border-t border-gray-100 pt-3">
        <button
          type="button"
          onClick={() => setInstructionsOpen((prev) => !prev)}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 focus:outline-none"
          aria-expanded={instructionsOpen}
        >
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${instructionsOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Additional instructions
          <span className="text-gray-400 font-normal">(optional)</span>
        </button>

        {instructionsOpen && (
          <textarea
            value={additionalInstructions}
            onChange={(e) => onAdditionalInstructionsChange(e.target.value)}
            placeholder="Any special notes or adjustments for this batch of versions..."
            rows={3}
            className="mt-3 w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-[#009DDC] focus:border-[#009DDC] transition-all duration-200 leading-relaxed animate-slide-up"
          />
        )}
      </div>
    </section>
  );
}
