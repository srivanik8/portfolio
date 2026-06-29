export default function SectionLabel({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-xs tracking-[0.2em] text-signal/80">
        {index}
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-paper-dim">
        {label}
      </span>
      <span className="h-px flex-1 bg-hairline" />
    </div>
  );
}
