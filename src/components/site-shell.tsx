import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { authorName, mainNavigation, secondaryNavigation } from "@/data/site-content";

function IVMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 48 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23 48V18M23 28L10 14L5 8M23 25L37 10L42 4M23 33L11 25M23 37L36 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 48H32M23 19L19 14L25 10L21 5M36 47C32 42 30 37 31 31C32 25 39 23 41 18" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 31C41 28 44 30 44 33C40 34 37 34 36 31ZM34 39C29 36 26 38 26 41C30 42 33 42 34 39Z" fill="currentColor" opacity=".78" />
    </svg>
  );
}

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link to="/" aria-label={`${authorName}, home`} className={`brand ${footer ? "brand-footer" : ""}`}>
      <IVMark className="brand-mark" />
      <span className="brand-copy">
        <span className="brand-name">{authorName}</span>
        {!footer && <span className="brand-role">Author · INNOCENT VICTIMS</span>}
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav aria-label="Main navigation" className="desktop-navigation">
          {mainNavigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`navigation-link ${pathname === item.to ? "navigation-link-active" : ""}`}
              aria-current={pathname === item.to ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((wasOpen) => !wasOpen)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile navigation" className="mobile-navigation">
          {mainNavigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              aria-current={pathname === item.to ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <div className="mobile-secondary-links">
            {secondaryNavigation.map((item) => (
              <Link key={item.to} to={item.to} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-identity">
          <Brand footer />
          <p>Stories about identity, conviction, and the lives caught between.</p>
        </div>
        <div className="footer-link-group">
          <span className="footer-heading">Explore</span>
          {mainNavigation.slice(1, 5).map((item) => (
            <Link key={item.to} to={item.to}>{item.label}</Link>
          ))}
        </div>
        <div className="footer-link-group">
          <span className="footer-heading">More</span>
          {secondaryNavigation.map((item) => (
            <Link key={item.to} to={item.to}>{item.label}</Link>
          ))}
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-contact">
          <span className="footer-heading">A note to the author</span>
          <a href="mailto:aassaassi@gmail.com">aassaassi@gmail.com <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {authorName}</span>
        <span>INNOCENT VICTIMS <i aria-hidden="true">·</i> A psychological thriller</span>
        <Link to="/faq">Questions & answers</Link>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </>
  );
}