'use client'

import { usePathname } from 'next/navigation'
import { useLayoutEffect } from 'react'
import { useLanguage } from '@/components/language'
import { translate, type StringKey } from '@/language/strings'

const titles: Record<string, StringKey> = {
  '/': 'home.name',
  '/about': 'about.title',
  '/book': 'book.title',
  '/ausna': 'ausna.title',
  '/jah': 'jah.title',
}

export function DocumentTitle() {
  const pathname = usePathname()
  const { lang } = useLanguage()

  useLayoutEffect(() => {
    const key = titles[pathname] ?? 'home.name'
    const name = translate(key, lang)
    document.title = pathname === '/' ? name : `${name} — DOK`
  }, [pathname, lang])

  return null
}
