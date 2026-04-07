const VintageOrnament = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary/50 flex-shrink-0" fill="currentColor">
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
    </svg>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
  </div>
);

export default VintageOrnament;
