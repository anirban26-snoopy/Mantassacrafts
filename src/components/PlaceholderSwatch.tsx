export default function PlaceholderSwatch({
  color,
  label,
  className = "",
}: {
  color: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, ${color}22, ${color}55)`,
      }}
    >
      <div
        className="absolute inset-0 bg-grain opacity-30"
        aria-hidden="true"
      />
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        className="relative opacity-70"
        aria-hidden="true"
      >
        <circle cx="21" cy="14" r="8" stroke={color} strokeWidth="2" />
        <path
          d="M21 22 L21 30 M15 34 Q21 40 27 34"
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      {label && (
        <span className="absolute bottom-2 left-2 rounded-full bg-white/70 px-2 py-0.5 text-[10px] font-medium text-foreground/70">
          {label}
        </span>
      )}
    </div>
  );
}
