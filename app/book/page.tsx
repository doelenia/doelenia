import type { Metadata } from 'next'
import { T } from '@/components/language'
import { pageTitle } from '@/components/site-lang'

export async function generateMetadata(): Promise<Metadata> {
  return { title: await pageTitle('book.title') }
}

export default function Book() {
  return (
    <div className="page">
      <p className="caption">
        <T k="book.kicker" />
      </p>
      <h1 className="title">
        <T k="book.title" />
      </h1>

      <div className="page-body">
        <p>
          <T k="book.p1" />
        </p>
        <p>
          <T k="book.p2" />
        </p>
        <p>
          <T k="book.p3" />
        </p>
      </div>

      <div className="page-section">
        <p className="caption">
          <T k="book.assumptions" />
        </p>
        <ul className="qualities">
          <li>
            <strong>
              <T k="book.a1.name" /> —
            </strong>{' '}
            <T k="book.a1" />
          </li>
          <li>
            <strong>
              <T k="book.a2.name" /> —
            </strong>{' '}
            <T k="book.a2" />
          </li>
          <li>
            <strong>
              <T k="book.a3.name" /> —
            </strong>{' '}
            <T k="book.a3" />
          </li>
          <li>
            <strong>
              <T k="book.a4.name" /> —
            </strong>{' '}
            <T k="book.a4" />
          </li>
        </ul>
      </div>
    </div>
  )
}
