'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/about', label: 'About' },
  { href: '/book', label: 'The Doelenian Book' },
  { href: '/ausna', label: 'Ausna' },
  { href: '/jah', label: 'Jah' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <header>
      <Link href="/" className="header-logo">
        <Image
          src="/doe_logo.png"
          alt="DOK"
          width={26}
          height={26}
          priority
        />
        <span className="header-logo-name">Doelenian Ommia Kazen</span>
      </Link>
      <nav>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={pathname === href ? 'active' : ''}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
