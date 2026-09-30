import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ausna',
}

export default function Ausna() {
  return (
    <div className="page">
      <p className="caption">Ommivax</p>
      <h1 className="title">Ausna</h1>

      <div className="page-body">
        <p>
          A society to explore &amp; foster what humanity can become. Au- means
          human; -sna, the traces we leave — Ausna is what a human leaves to
          the world.
        </p>
        <p>
          We believe humanity is the greatest work we leave to the world, and
          that its future emerges between people. Ausna gathers the people who
          carry it and grows it together, so it can take root and make the
          impossible possible.
        </p>
        <p>
          Within it, we cultivate each person&apos;s humanity, rebuild the
          topics the world has left unexplored, and carry forward the projects
          that reach toward what humanity can become.
        </p>
      </div>

      <div className="page-links">
        <a
          href="https://achieved-mind-fe1.notion.site/Ausna-Manifesto-3e694639385b805996f4e1da5d29540a?source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
          className="page-link"
        >
          <span className="caption">Manifesto</span>
          <span className="subtitle">What Ausna is, and why</span>
        </a>
        <a
          href="https://ausna.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="page-link"
        >
          <span className="caption">Writings</span>
          <span className="subtitle">Conversations from the society</span>
        </a>
        <a
          href="https://achieved-mind-fe1.notion.site/44a4cc8372364aec967801cfe6de012c"
          target="_blank"
          rel="noopener noreferrer"
          className="page-link"
        >
          <span className="caption">Join</span>
          <span className="subtitle">Interest form</span>
        </a>
      </div>
    </div>
  )
}
