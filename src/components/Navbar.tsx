'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/about', label: 'これなに' },
  { href: '/activity', label: 'やりたいこと' },
  { href: '/vision', label: 'かんがえ' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen, closeMobileMenu])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'navbar-scrolled'
          : 'navbar-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/icon.png"
              alt="hiki co."
              width={32}
              height={32}
              className="w-8 h-8 rounded-lg"
            />
            <span className="font-light text-lg text-muted-foreground">hiki co.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hiki-link-animated text-sm font-light py-1 ${
                  pathname === link.href ? 'text-muted-foreground' : 'text-muted-foreground/60'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-primary/50 rounded-full" />
                )}
              </Link>
            ))}
            <Link
              href="/join"
              className="hiki-btn hover-lift text-sm py-2 px-4"
            >
              はいる
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden py-4 border-t border-border/50 glass animate-fade-in"
            role="menu"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  className={`text-sm font-light transition-colors hover:text-primary flex items-center gap-2 animate-slide-in-right stagger-${index + 1} ${
                    pathname === link.href ? 'text-muted-foreground' : 'text-muted-foreground/60'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {pathname === link.href && (
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full" />
                  )}
                  {link.label}
                </Link>
              ))}
              <Link
                href="/join"
                role="menuitem"
                className="hiki-btn hover-lift text-sm py-2 px-4 text-center mt-2 animate-fade-in-up stagger-4"
                onClick={closeMobileMenu}
              >
                はいる
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
