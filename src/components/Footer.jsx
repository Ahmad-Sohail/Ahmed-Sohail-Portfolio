import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      const navOffset = 74;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer role="contentinfo" className="relative bg-[#06090F] border-t border-white/[0.08] py-12 sm:py-16 overflow-hidden w-full max-w-full">
      <div className="fluid-container">
        {/* Custom CSS Grid Footer Layout */}
        <div className="custom-grid-footer pb-12 border-b border-white/[0.06]">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="inline-flex items-center gap-1 text-2xl font-bold tracking-tight text-white hover:text-[#4F8CFF] transition-colors"
              aria-label="Ahmed Sohail Home"
            >
              <span>Ahmed Sohail</span>
              <span className="text-[#4F8CFF]">.</span>
            </a>
            <div className="text-sm font-medium text-[#4F8CFF]">
              Full Stack Developer
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Engineering scalable full-stack web applications, RESTful APIs, and accessible modern UI architectures. Full Stack Developer Intern at Progree.
            </p>
          </div>

          {/* Quick Navigation Links (Semantic HTML5 <nav>) */}
          <nav aria-label="Footer quick navigation" className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Quick Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Social Presence & Back to Top */}
          <div className="space-y-4 md:text-right">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 md:text-right">
              Social Links
            </div>
            <div className="flex items-center gap-3 md:justify-end">
              <a
                href="mailto:ahmedsohail99122@gmail.com"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06] transition-colors"
                title="Email Ahmed"
                aria-label="Email Ahmed Sohail"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Ahmad-Sohail"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06] transition-colors"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmad-sohail-281228347/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06] transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 md:flex md:justify-end">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-slate-400 hover:text-white border border-white/[0.06] transition-colors cursor-pointer"
                aria-label="Back to top of page"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Semantic Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <small className="text-xs text-slate-400">
            © 2026 Ahmed Sohail. All rights reserved.
          </small>
          <div className="flex items-center gap-2">
            <span>Built with React & Semantic HTML5</span>
            <span aria-hidden="true">·</span>
            <span>Progree Intern 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
