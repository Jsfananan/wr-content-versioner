'use client';

import type { VersionResult } from '@/types';
import OutputCard from './OutputCard';

interface OutputSectionProps {
  versions: VersionResult[];
  isLoading: boolean;
  loadingOffices: string[];
}

export default function OutputSection({
  versions,
  isLoading,
  loadingOffices,
}: OutputSectionProps) {
  const hasContent = versions.length > 0 || (isLoading && loadingOffices.length > 0);

  if (!hasContent) return null;

  const completedIds = new Set(versions.map((v) => v.officeId));
  const pendingOffices = isLoading
    ? loadingOffices.filter((id) => !completedIds.has(id))
    : [];

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-base font-semibold text-gray-900">Versioned Content</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {versions.map((version) => (
          <OutputCard
            key={version.officeId}
            officeName={version.officeName}
            directorName={version.directorName}
            directorEmail={version.directorEmail}
            content={version.content}
            adaptations={version.adaptations}
            keepInMind={version.keepInMind}
            isLoading={false}
          />
        ))}

        {pendingOffices.map((officeId) => (
          <OutputCard
            key={`loading-${officeId}`}
            officeName={officeId}
            directorName=""
            content=""
            adaptations={[]}
            keepInMind={[]}
            isLoading={true}
          />
        ))}
      </div>
    </section>
  );
}
