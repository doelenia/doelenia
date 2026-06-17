import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ausna',
}

export default function Ausna() {
  return (
    <div className="page">
      <p className="page-label">Ommivax</p>
      <h1 className="page-title">Ausna</h1>
      <div className="page-divider" />

      <div className="page-body">
        <p>
          A space for human trajectories. Ausna asks a single universal
          question — one that belongs to everyone, answered by each person in
          their own way.
        </p>
        <p>
          It is a platform for the questions that define a life: not answers,
          not prescriptions, but the honest trajectories of those willing to
          look.
        </p>
      </div>

      <div className="page-links">
        <a
          href="https://ausna.co"
          target="_blank"
          rel="noopener noreferrer"
          className="page-link"
        >
          <span className="page-link-label">Platform</span>
          <span className="page-link-text">ausna.co</span>
        </a>
        <a
          href="https://ausna-issue.notion.site"
          target="_blank"
          rel="noopener noreferrer"
          className="page-link"
        >
          <span className="page-link-label">Open Call</span>
          <span className="page-link-text">Issue 0 — Submit your trajectory</span>
        </a>
      </div>
    </div>
  )
}
