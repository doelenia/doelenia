'use client'

import Image from 'next/image'
import { T, useLanguage } from '@/components/language'

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="home">
      <Image
        src="/doe_logo_formal.png"
        alt={t('home.name')}
        width={120}
        height={120}
        className="home-logo"
        priority
      />
      <h1 className="title name">
        <T k="home.name" />
      </h1>
      <p className="subtitle muted">
        <T k="home.tagline" />
      </p>
    </div>
  )
}
