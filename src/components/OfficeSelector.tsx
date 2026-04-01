'use client';

import { offices } from '@/config/offices';

interface OfficeSelectorProps {
  selectedOffices: string[];
  onSelectionChange: (offices: string[]) => void;
  disabled?: boolean;
}

const focusTagColor: Record<string, string> = {
  'refugee resettlement': 'bg-[#e6f4fb] text-[#0080b3]',
  'employment services': 'bg-[#e6f9f7] text-[#00877a]',
  'immigration legal services': 'bg-purple-50 text-purple-700',
  'church partnerships': 'bg-amber-50 text-amber-700',
  'disaster response': 'bg-red-50 text-red-600',
  'mental health services': 'bg-[#e6f9f7] text-[#00877a]',
};

function getFocusTagClass(focus: string): string {
  return focusTagColor[focus] ?? 'bg-gray-100 text-gray-500';
}

export default function OfficeSelector({
  selectedOffices,
  onSelectionChange,
  disabled = false,
}: OfficeSelectorProps) {
  const activeOffices = offices.filter((o) => o.active);
  const allSelected = activeOffices.every((o) => selectedOffices.includes(o.id));
  const selectedCount = selectedOffices.length;

  function toggleAll() {
    if (allSelected) {
      onSelectionChange([]);
    } else {
      onSelectionChange(activeOffices.map((o) => o.id));
    }
  }

  function toggleOffice(id: string) {
    if (selectedOffices.includes(id)) {
      onSelectionChange(selectedOffices.filter((o) => o !== id));
    } else {
      onSelectionChange([...selectedOffices, id]);
    }
  }

  return (
    <section className={`bg-white rounded-lg border border-gray-200 shadow-sm p-6 flex flex-col gap-4 transition-opacity duration-200 ${disabled ? 'opacity-50 pointer-events-none' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-semibold text-gray-900">Select Offices</h2>
          {selectedCount > 0 && (
            <span className="inline-flex items-center justify-center min-w-[22px] h-[22px] px-1.5 text-xs font-semibold bg-[#009DDC] text-white rounded-full tabular-nums">
              {selectedCount}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={toggleAll}
          className="text-sm text-[#009DDC] hover:text-[#0080b3] font-medium transition-colors duration-200 focus:outline-none focus:underline"
        >
          {allSelected ? 'Deselect All' : 'Select All'}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {activeOffices.map((office) => {
          const isSelected = selectedOffices.includes(office.id);

          return (
            <button
              key={office.id}
              type="button"
              onClick={() => toggleOffice(office.id)}
              className={`relative text-left rounded-lg border p-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#009DDC] focus:ring-offset-1 hover:-translate-y-0.5 ${
                isSelected
                  ? 'border-[#009DDC] bg-[#f0f9ff] shadow-md'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md shadow-sm'
              }`}
              aria-pressed={isSelected}
            >
              {isSelected && (
                <span className="absolute top-0 left-0 w-1 h-full bg-[#009DDC] rounded-l-lg" aria-hidden="true" />
              )}

              <div className="flex items-start gap-3">
                <div
                  className={`mt-0.5 w-4 h-4 shrink-0 rounded border flex items-center justify-center transition-all duration-200 ${
                    isSelected ? 'bg-[#009DDC] border-[#009DDC]' : 'border-gray-300 bg-white'
                  }`}
                  aria-hidden="true"
                >
                  {isSelected && (
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>

                <div className="flex flex-col gap-1.5 min-w-0">
                  <span className="text-sm font-semibold text-gray-900 leading-tight">
                    {office.name}
                  </span>
                  <span className="text-xs text-gray-500">{office.director.name}</span>
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {office.localFocus.slice(0, 3).map((focus) => (
                      <span
                        key={focus}
                        className={`inline-block px-1.5 py-0.5 text-[10px] font-medium rounded-sm ${getFocusTagClass(focus)}`}
                      >
                        {focus}
                      </span>
                    ))}
                    {office.localFocus.length > 3 && (
                      <span className="inline-block px-1.5 py-0.5 text-[10px] font-medium bg-gray-100 text-gray-400 rounded-sm">
                        +{office.localFocus.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {selectedCount > 0 && (
        <p className="text-xs text-gray-400">
          {selectedCount} of {activeOffices.length} offices selected
        </p>
      )}
    </section>
  );
}
