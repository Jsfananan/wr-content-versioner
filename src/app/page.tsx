"use client";

import { useState, useCallback } from "react";
import Header from "@/components/Header";
import PasswordGate from "@/components/PasswordGate";
import ContentInput from "@/components/ContentInput";
import OfficeSelector from "@/components/OfficeSelector";
import OutputSection from "@/components/OutputSection";
import type { ContentType, VersionResult } from "@/types";

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false);
  const [content, setContent] = useState("");
  const [contentType, setContentType] = useState<ContentType>("email");
  const [additionalInstructions, setAdditionalInstructions] = useState("");
  const [selectedOffices, setSelectedOffices] = useState<string[]>([]);
  const [versions, setVersions] = useState<VersionResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingOffices, setLoadingOffices] = useState<string[]>([]);
  const [error, setError] = useState("");

  const handleGenerate = useCallback(async () => {
    if (!content.trim()) {
      setError("Please enter content to version.");
      return;
    }
    if (selectedOffices.length === 0) {
      setError("Please select at least one office.");
      return;
    }

    setError("");
    setIsLoading(true);
    setLoadingOffices(selectedOffices);
    setVersions([]);

    try {
      const response = await fetch("/api/version", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content,
          contentType,
          officeIds: selectedOffices,
          additionalInstructions: additionalInstructions || undefined,
        }),
      });

      if (response.status === 401) {
        setAuthenticated(false);
        setError("Session expired. Please log in again.");
        return;
      }

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      const data = await response.json();
      setVersions(data.versions);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
      setLoadingOffices([]);
    }
  }, [content, contentType, selectedOffices, additionalInstructions]);

  if (!authenticated) {
    return <PasswordGate onAuthenticated={() => setAuthenticated(true)} />;
  }

  const canGenerate =
    content.trim().length > 0 && selectedOffices.length > 0 && !isLoading;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <ContentInput
          content={content}
          onContentChange={setContent}
          contentType={contentType}
          onContentTypeChange={setContentType}
          additionalInstructions={additionalInstructions}
          onAdditionalInstructionsChange={setAdditionalInstructions}
        />

        <OfficeSelector
          selectedOffices={selectedOffices}
          onSelectionChange={setSelectedOffices}
        />

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div className="flex justify-center">
          <button
            onClick={handleGenerate}
            disabled={!canGenerate}
            className="px-8 py-3 bg-[#009DDC] text-white font-medium rounded-lg hover:bg-[#0080b3] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-base"
          >
            {isLoading ? "Generating Versions..." : "Generate Versions"}
          </button>
        </div>

        <OutputSection
          versions={versions}
          isLoading={isLoading}
          loadingOffices={loadingOffices}
        />
      </main>

      <footer className="text-center text-xs text-gray-400 py-4">
        World Relief Content Versioner &middot; Internal Tool
      </footer>
    </div>
  );
}
