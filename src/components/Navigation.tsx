'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon, ChevronDownIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'
import { COMPANY_INFO, NAVIGATION_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setOpenDropdown(null)
  }

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-white/90 backdrop-blur-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 flex-shrink-0"
            onClick={closeMobileMenu}
          >
            <div className="text-2xl">🌡️</div>
            <div className="font-bold text-xl text-secondary-900">
              Heat Pumps Now
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <div key={item.name} className="relative group">
                {'children' in item ? (
                  <>
                    <button
                      className={cn(
                        'flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                        pathname === item.href || ('children' in item && item.children.some(child => pathname === child.href))
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-secondary-700 hover:text-primary-600 hover:bg-secondary-50'
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDownIcon className="w-4 h-4" />
                    </button>
                    {/* Desktop Dropdown */}
                    <div className="absolute left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-secondary-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {'children' in item && item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={cn(
                              'block px-4 py-2 text-sm transition-colors',
                              pathname === child.href
                                ? 'text-primary-600 bg-primary-50'
                                : 'text-secondary-700 hover:text-primary-600 hover:bg-secondary-50'
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                      pathname === item.href
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-secondary-700 hover:text-primary-600 hover:bg-secondary-50'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center space-x-2 text-secondary-700 hover:text-primary-600 transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              <span className="text-sm font-medium">{COMPANY_INFO.phone}</span>
            </a>
            <Button size="sm">
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden transition-all duration-300 ease-in-out overflow-hidden',
            isMobileMenuOpen
              ? 'max-h-screen opacity-100 pb-4'
              : 'max-h-0 opacity-0'
          )}
        >
          <div className="space-y-1 pt-2">
            {NAVIGATION_ITEMS.map((item) => (
              <div key={item.name}>
                {'children' in item ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={cn(
                        'w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors text-left',
                        pathname === item.href || ('children' in item && item.children.some(child => pathname === child.href))
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-secondary-700 hover:text-primary-600 hover:bg-secondary-50'
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDownIcon
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          openDropdown === item.name ? 'rotate-180' : ''
                        )}
                      />
                    </button>
                    {/* Mobile Dropdown */}
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-200 ease-in-out',
                        openDropdown === item.name
                          ? 'max-h-96 opacity-100'
                          : 'max-h-0 opacity-0'
                      )}
                    >
                      <div className="pl-4 space-y-1">
                        {'children' in item && item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={closeMobileMenu}
                            className={cn(
                              'block px-3 py-2 rounded-md text-sm transition-colors',
                              pathname === child.href
                                ? 'text-primary-600 bg-primary-50'
                                : 'text-secondary-600 hover:text-primary-600 hover:bg-secondary-50'
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                      pathname === item.href
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-secondary-700 hover:text-primary-600 hover:bg-secondary-50'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-secondary-200 space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center justify-center space-x-2 w-full px-3 py-2 rounded-md bg-secondary-50 text-secondary-700 hover:bg-secondary-100 transition-colors"
                onClick={closeMobileMenu}
              >
                <PhoneIcon className="w-4 h-4" />
                <span className="font-medium">{COMPANY_INFO.phone}</span>
              </a>
              <Button className="w-full" onClick={closeMobileMenu}>
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}