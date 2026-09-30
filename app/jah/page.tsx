import type { Metadata } from 'next'
import { T } from '@/components/language'
import { pageTitle } from '@/components/site-lang'

export async function generateMetadata(): Promise<Metadata> {
  return { title: await pageTitle('jah.title') }
}

export default function Jah() {
  return (
    <div className="page">
      <p className="caption">
        <T k="jah.kicker" />
      </p>
      <h1 className="title">
        <T k="jah.title" />
      </h1>

      <div className="page-body">
        <p>
          <T k="jah.p1" />
        </p>
        <p>
          <T k="jah.p2" />
        </p>
      </div>

      <div className="page-links">
        <a
          href="https://github.com/doelenia/jah"
          target="_blank"
          rel="noopener noreferrer"
          className="page-link"
        >
          <span className="caption">
            <T k="jah.repo" />
          </span>
          <span className="subtitle">
            <T k="jah.repo.sub" />
          </span>
        </a>
      </div>
    </div>
  )
}
