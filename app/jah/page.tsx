import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jah',
}

export default function Jah() {
  return (
    <div className="page">
      <p className="caption">Ommivax</p>
      <h1 className="title">Jah</h1>

      <div className="page-body">
        <p>
          A local-first personal operating system built around the belief that
          a human life deserves structure, memory, and intention.
        </p>
        <p>
          Jah holds the context of a person's work, relationships, and
          commitments — not as productivity software, but as a living record
          of the human-centered life.
        </p>
      </div>

      <div className="page-links">
        <a
          href="https://github.com/doelenia/jah"
          target="_blank"
          rel="noopener noreferrer"
          className="page-link"
        >
          <span className="caption">Repository</span>
          <span className="subtitle">github.com/doelenia/jah</span>
        </a>
      </div>
    </div>
  )
}
