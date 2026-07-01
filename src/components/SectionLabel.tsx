export default function SectionLabel({ label }: { label: string }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
      {label}
    </p>
  );
}