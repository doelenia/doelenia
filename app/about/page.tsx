import type { Metadata } from 'next'
import { T } from '@/components/language'
import { pageTitle } from '@/components/site-lang'

export async function generateMetadata(): Promise<Metadata> {
  return { title: await pageTitle('about.title') }
}

export default function About() {
  return (
    <div className="page">
      <p className="caption">
        <T k="about.kicker" />
      </p>
      <h1 className="title">
        <T k="about.title" />
      </h1>

      <div className="page-body">
        <p>
          <span className="name">
            <T k="home.name" />
          </span>{' '}
          <T k="about.def" />
        </p>
        <p>
          <T k="about.alliance" />
        </p>
      </div>

      <div className="page-section">
        <p className="caption">
          <T k="about.belief.kicker" />
        </p>
        <div className="page-body">
          <p>
            <T k="about.belief" />
          </p>
        </div>
      </div>

      <div className="page-section">
        <p className="caption">
          <T k="about.strategy.kicker" />
        </p>
        <div className="page-body">
          <p>
            <T k="about.strategy" />
          </p>
        </div>
      </div>

      <div className="page-section">
        <p className="caption">
          <T k="about.qualities.kicker" />
        </p>
        <ul className="qualities">
          <li>
            <strong>Jahlah —</strong> <T k="about.jahlah" />
          </li>
          <li>
            <strong>Iksanah —</strong> <T k="about.iksanah" />
          </li>
          <li>
            <strong>Katah —</strong> <T k="about.katah" />
          </li>
          <li>
            <strong>Fesuanah —</strong> <T k="about.fesuanah" />
          </li>
        </ul>
      </div>
    </div>
  )
}
