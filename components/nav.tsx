'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/components/language'
import type { StringKey } from '@/language/strings'

const links: { href: string; key: StringKey }[] = [
  { href: '/about', key: 'nav.about' },
  { href: '/book', key: 'nav.book' },
  { href: '/ausna', key: 'nav.ausna' },
  { href: '/jah', key: 'nav.jah' },
]

export default function Nav() {
  const pathname = usePathname()
  const { lang, setLang, t } = useLanguage()
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
        <div className="header-tools">
          <button
            type="button"
            className="caption header-menu-btn"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="directory"
          >
            {open ? t('nav.close') : t('nav.menu')}
          </button>
        </div>
      </header>

      <div
        id="directory"
        className={`directory${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={t('nav.directory')}
        aria-hidden={!open}
      >
        <nav className="directory-nav">
          {links.map(({ href, key }) => (
            <Link
              key={href}
              href={href}
              className={`title directory-link${pathname === href ? ' active' : ''}`}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              {t(key)}
            </Link>
          ))}
          <div className="directory-lang">
            <span className="caption">{t('nav.language')}</span>
            <div className="lang-toggle caption" role="group" aria-label={t('nav.language')}>
              <button
                type="button"
                aria-pressed={lang === 'en'}
                tabIndex={open ? 0 : -1}
                onClick={() => setLang('en')}
              >
                EN
              </button>
              <span aria-hidden="true">/</span>
              <button
                type="button"
                aria-pressed={lang === 'dln'}
                tabIndex={open ? 0 : -1}
                onClick={() => setLang('dln')}
              >
                DLN
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
