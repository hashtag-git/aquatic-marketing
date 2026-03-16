const navLinks = [
  { label: "Intelligence", href: "#intelligence" },
  { label: "Jurisdictions", href: "#jurisdictions" },
  { label: "The Engine", href: "#engine" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#06080B]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="font-display italic text-[#0EA5E9] text-xl">
          AQUATIC
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="font-body text-sm text-[#8FA3B8] hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
