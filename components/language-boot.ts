import type { Lang } from '@/language/strings'

export const LANGUAGE_KEY = 'dln-lang'

export function langFromStored(value: string | null | undefined): Lang | null {
  if (value === 'dln' || value === 'dok') return 'dln'
  if (value === 'en') return 'en'
  return null
}

export const languageBootScript = `(function(){try{var saved=localStorage.getItem('${LANGUAGE_KEY}')||localStorage.getItem('dok-lang');var lang=saved==='dln'||saved==='dok'?'dln':saved==='en'?'en':'';if(!lang)return;document.cookie='${LANGUAGE_KEY}='+lang+'; Path=/; Max-Age=31536000; SameSite=Lax';if(document.documentElement.getAttribute('data-rendered-lang')===lang)return;var style=document.createElement('style');style.id='dln-boot';style.textContent='body{visibility:hidden}';document.head.appendChild(style);}catch(e){}})();`
