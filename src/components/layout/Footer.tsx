import Link from "next/link";

const socialLinks = [
  {
    name: "Twitter (X)",
    href: "https://twitter.com",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    name: "GitHub",
    href: "https://github.com",
  },
  {
    name: "CodePen",
    href: "https://codepen.io",
  },
];

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-charcoal/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold text-light">
              mbao-dev
            </Link>
            <div className="space-y-2 text-sm text-slate">
              <p>
                <span className="text-cyan">E</span> info@mbao-dev.com
              </p>
              <p>
                <span className="text-cyan">T</span> +84 123 456 789
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-light uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate hover:text-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-light uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex flex-wrap gap-4">
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
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-charcoal/30">
          <p className="text-center text-sm text-slate">
            © {new Date().getFullYear()} mbao-dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
