'use client'

import {
  createContext,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { translate, type Lang, type StringKey } from '@/language/strings'
import { LANGUAGE_KEY, langFromStored } from '@/components/language-boot'

function readSaved(): Lang | null {
  try {
    return langFromStored(
      window.localStorage.getItem(LANGUAGE_KEY) ?? window.localStorage.getItem('dok-lang'),
    )
  } catch {
    return null
  }
}

function writeSaved(lang: Lang) {
  window.localStorage.setItem(LANGUAGE_KEY, lang)
  document.cookie = `${LANGUAGE_KEY}=${lang}; Path=/; Max-Age=31536000; SameSite=Lax`
}

type LanguageValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: StringKey) => string
}

const LanguageContext = createContext<LanguageValue | null>(null)

export function LanguageProvider({
  initialLang,
  children,
}: {
  initialLang: Lang
  children: ReactNode
}) {
  const [lang, setLangState] = useState<Lang>(initialLang)
  const adopted = useRef(false)

  useLayoutEffect(() => {
    if (!adopted.current) {
      adopted.current = true
      const saved = readSaved()
      if (saved && saved !== lang) {
        setLangState(saved)
        return
      }
    }
    document.getElementById('dln-boot')?.remove()
    document.documentElement.lang = lang === 'dln' ? 'x-dln' : 'en'
    document.documentElement.setAttribute('data-rendered-lang', lang)
    writeSaved(lang)
  }, [lang])

  const setLang = (next: Lang) => setLangState(next)
  const t = (key: StringKey) => translate(key, lang)

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useLanguage must be used within LanguageProvider')
  return value
}

export function T({ k }: { k: StringKey }) {
  const { t } = useLanguage()
  return <>{t(k)}</>
}
