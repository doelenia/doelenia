import type { Metadata } from 'next'
import { T } from '@/components/language'
import { pageTitle } from '@/components/site-lang'

export async function generateMetadata(): Promise<Metadata> {
  return { title: await pageTitle('ausna.title') }
}

export default function Ausna() {
  return (
    <div className="page">
      <p className="caption">
        <T k="ausna.kicker" />
      </p>
      <h1 className="title">
        <T k="ausna.title" />
      </h1>

      <div className="page-body">
        <p>
          <T k="ausna.p1" />
        </p>
        <p>
          <T k="ausna.p2" />
        </p>
        <p>
          <T k="ausna.p3" />
        </p>
      </div>

      <div className="page-links">
        <a
          href="https://achieved-mind-fe1.notion.site/Ausna-Manifesto-3e694639385b805996f4e1da5d29540a?source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
          className="page-link"
        >
          <span className="caption">
            <T k="ausna.manifesto" />
          </span>
          <span className="subtitle">
            <T k="ausna.manifesto.sub" />
          </span>
        </a>
        <a
          href="https://ausna.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="page-link"
        >
          <span className="caption">
            <T k="ausna.writings" />
          </span>
          <span className="subtitle">
            <T k="ausna.writings.sub" />
          </span>
        </a>
        <a
          href="https://achieved-mind-fe1.notion.site/44a4cc8372364aec967801cfe6de012c"
          target="_blank"
          rel="noopener noreferrer"
          className="page-link"
        >
          <span className="caption">
            <T k="ausna.join" />
          </span>
          <span className="subtitle">
            <T k="ausna.join.sub" />
          </span>
        </a>
      </div>
    </div>
  )
}
