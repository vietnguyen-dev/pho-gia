"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-bold text-brand tracking-tight">
              Pho Gia
            </span>
            <span className="text-xs text-stone-500 tracking-widest uppercase">
              Milwaukie
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-stone-700 hover:text-brand transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="text-stone-700 hover:text-brand transition-colors font-medium"
            >
              Menu
            </Link>
            <Link
              href="#about"
              className="text-stone-700 hover:text-brand transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-stone-700 hover:text-brand transition-colors font-medium"
            >
              Contact
            </Link>
            <a
              href="tel:+15035551234"
              className="bg-brand text-white px-5 py-2 rounded-full hover:bg-brand-light transition-colors font-medium"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-stone-800 transition-transform ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-stone-800 transition-opacity ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-stone-800 transition-transform ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-stone-700 hover:text-brand transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="text-stone-700 hover:text-brand transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="#about"
              className="text-stone-700 hover:text-brand transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-stone-700 hover:text-brand transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:+15035551234"
              className="bg-brand text-white px-5 py-2 rounded-full hover:bg-brand-light transition-colors font-medium text-center"
            >
              Order Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
