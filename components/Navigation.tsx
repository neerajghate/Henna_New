// components/Navigation.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Logo from "./Logo";

const menuItems = [
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Mehendi (Henna)", href: "/services/mehendi" },
      { name: "Make Up", href: "/services/makeup" },
      { name: "Hair Style", href: "/services/hairstyle" }
    ]
  },
  { name: "Gallery", href: "/gallery" },
  { name: "About Me", href: "/about" },
  { name: "Contact Us", href: "/contact" }
];

const mehendiTypes = [
  { name: "Arabic Mehendi", href: "/services/mehendi/arabic" },
  { name: "Bridal Mehendi", href: "/services/mehendi/bridal" },
  { name: "Roses Mehendi", href: "/services/mehendi/roses" },
  { name: "Color Mehendi", href: "/services/mehendi/color" },
  { name: "Designer Mehendi", href: "/services/mehendi/designer" },
  { name: "Theme Mehendi", href: "/services/mehendi/theme" },
  { name: "Tattoo Mehendi", href: "/services/mehendi/tattoo" },
  { name: "Tribal Mehendi", href: "/services/mehendi/tribal" }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // NOTE: Navigation is NORMAL FLOW (no fixed/sticky/absolute here)
    <nav className="relative w-full">
      <div className="flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="Home">
          <Logo size="sm" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-henna-800 hover:text-henna-600 font-medium transition-colors">
            Home
          </Link>

          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="flex items-center text-henna-800 hover:text-henna-600 font-medium transition-colors"
              >
                {item.name}
                {item.submenu && <FiChevronDown className="ml-1 text-sm" />}
              </Link>

              {/* Dropdown */}
              {item.submenu && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-3 text-henna-700 hover:bg-henna-50 hover:text-henna-800 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}

                    {/* Mehendi Types */}
                    {item.name === "Services" && (
                      <div className="border-t border-gray-100">
                        <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          Mehendi Types
                        </div>
                        {mehendiTypes.map((type) => (
                          <Link
                            key={type.name}
                            href={type.href}
                            className="block px-6 py-2 text-sm text-henna-600 hover:bg-henna-50 hover:text-henna-800 transition-colors"
                          >
                            {type.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary">
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="lg:hidden p-2 text-henna-800 hover:text-henna-600 transition-colors"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (drops below header, not overlapping) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            className="lg:hidden bg-white border-t border-gray-200"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="py-4">
              <div className="space-y-2">
                <Link
                  href="/"
                  className="block py-3 text-henna-800 hover:text-henna-600 font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                {menuItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block py-3 text-henna-800 hover:text-henna-600 font-medium transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>

                    {item.submenu && (
                      <div className="ml-4 space-y-1">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block py-2 text-sm text-henna-600 hover:text-henna-800 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center block"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
