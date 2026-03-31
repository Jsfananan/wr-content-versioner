export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 h-16 flex items-center px-6 shrink-0">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-7 bg-[#009DDC] rounded-sm block" />
            <span className="text-gray-900 font-bold text-lg tracking-tight leading-none">
              world relief
            </span>
          </div>
        </div>
        <span className="text-sm text-gray-500 font-medium tracking-wide uppercase">
          Content Versioner
        </span>
      </div>
    </header>
  );
}
