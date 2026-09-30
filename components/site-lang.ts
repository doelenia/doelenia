import { cookies } from 'next/headers'
import { LANGUAGE_KEY, langFromStored } from '@/components/language-boot'
import { translate, type StringKey } from '@/language/strings'

export async function pageTitle(key: StringKey): Promise<string> {
  const jar = await cookies()
  const lang = langFromStored(jar.get(LANGUAGE_KEY)?.value) ?? 'en'
  return translate(key, lang)
}
