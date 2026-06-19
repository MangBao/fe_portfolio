const socialLinks = [
  { name: "Twitter (X)", href: "https://twitter.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "GitHub", href: "https://github.com" },
  { name: "CodePen", href: "https://codepen.io" },
];

export default function HeroFooter() {
  return (
    <footer
      className="flex items-end justify-between gap-8"
      style={{ flex: "0 0 auto", paddingBottom: "2rem" }}
    >
      {/* Left — Contact Info */}
      <div className="space-y-1 text-sm text-slate">
        <p>
          <span className="text-light font-medium">E</span> info@mbao-dev.com
        </p>
        <p>
          <span className="text-light font-medium">T</span> +84 123 456 789
        </p>
      </div>

      {/* Right — Bio + Social Links */}
      <div className="flex flex-col items-end gap-6">
        {/* Bio Text */}
        <div className="max-w-xs text-right">
          <p className="text-sm text-slate leading-relaxed">
            I craft fast, scalable, and user-friendly web applications with
            modern JavaScript frameworks — combining React on the frontend with
            robust server-side solutions using Node.js.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate hover:text-cyan transition-colors"
            >
              / {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
