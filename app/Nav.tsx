'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Resume', href: '/Resume' },
    { name: 'Work', href: '/Work' },
    { name: 'Contact', href: '/Contact' },
  ];

  return (
    <nav className="w-full z-[99999] sticky top-0 bg-transparent">
      <div className="flex justify-between items-center px-[6%] lg:px-[16%] py-4 lg:py-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl lg:text-5xl font-bold font-unbounded text-white"
        >
          Folio
          <span className="text-[var(--primary-color)]">Hub.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-semibold transition text-white hover:text-[var(--primary-color)]
                  ${pathname === link.href ? 'text-[var(--primary-color)]' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            href="/Contact"
            className="bg-[var(--primary-color)] px-6 py-2 text-lg text-white font-semibold rounded-full
            transition hover:bg-transparent border border-[var(--primary-color)]"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <i className="ri-menu-2-fill"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#1c1b21] text-white border-t border-[var(--primary-color)]
        transition-all duration-300 overflow-hidden
        ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <ul className="flex flex-col gap-6 px-[6%] py-6 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block transition hover:text-[var(--primary-color)]
                  ${pathname === link.href ? 'text-[var(--primary-color)]' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Mobile CTA */}
          <li className="pt-2">
            <Link
              href="/Contact"
              onClick={() => setIsMenuOpen(false)}
              className="inline-block bg-[var(--primary-color)] px-6 py-3 rounded-full text-white font-semibold"
            >
              Hire Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
