export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center gap-8">
          <span className="font-display italic text-accent text-lg">
            AQUATIC
          </span>

          <span className="font-body text-xs text-text-muted">
            Intelligence &middot; Capabilities &middot; Jurisdictions &middot; The Engine
          </span>

          <span className="font-body text-xs text-text-muted">
            A Magic Water LLC product
          </span>
        </div>

        <div className="border-t border-border mt-8 pt-6">
          <p className="font-mono text-[11px] text-text-muted text-center">
            &copy; 2026 Magic Water LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
