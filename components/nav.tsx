'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { href: '/about', label: 'About' },
  { href: '/book', label: 'The Doelenia Book' },
  { href: '/ausna', label: 'Ausna' },
  { href: '/jah', label: 'Jah' },
] as const

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header className="header">
        <Link href="/" className="header-logo" aria-label="Home">
          <Image
            src="/doe_logo.png"
            alt=""
            width={24}
            height={24}
            priority
          />
        </Link>
        <button
          type="button"
          className="caption header-menu-btn"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="directory"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </header>

      <div
        id="directory"
        className={`directory${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site directory"
        aria-hidden={!open}
      >
        <nav className="directory-nav">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`title directory-link${pathname === href ? ' active' : ''}`}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
