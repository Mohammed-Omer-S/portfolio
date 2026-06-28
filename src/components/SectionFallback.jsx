export default function SectionFallback() {
  return (
    <div className="container-grid py-section" aria-hidden="true">
      <div className="h-8 w-40 animate-pulse bg-white/5" />
      <div className="mt-6 h-40 w-full animate-pulse bg-white/5" />
    </div>
  );
}