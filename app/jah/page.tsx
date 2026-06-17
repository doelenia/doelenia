import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jah',
}

export default function Jah() {
  return (
    <div className="page">
      <p className="page-label">Ommivax</p>
      <h1 className="page-title">Jah</h1>
      <div className="page-divider" />

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
    </div>
  )
}
