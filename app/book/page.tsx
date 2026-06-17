import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Doelenia Book',
}

export default function Book() {
  return (
    <div className="page">
      <p className="caption">Minavax</p>
      <h1 className="title">The Doelenia Book</h1>

      <div className="page-body">
        <p>
          A living record of understanding — about existence, humanity, and
          the world. Built to be concise, precise, honest, and enduring.
        </p>
        <p>
          Not a monument to certainty, but a tool for thinking. The book
          records current understanding to make it possible to build upon,
          challenge, and advance our core philosophy over time.
        </p>
        <p>
          It belongs to everyone who carries the Doelenia commitment —
          and asks only to be used, not worshipped.
        </p>
      </div>

      <div className="page-section">
        <p className="caption">Core Assumptions</p>
        <ul className="qualities">
          <li>
            <strong>Whole Truth Cannot Be Known —</strong> No human has the
            real truth. Everyone could hold some part of it.
          </li>
          <li>
            <strong>Logic Is the Top Belief —</strong> We put our undoubted
            faith into the power of logic.
          </li>
          <li>
            <strong>True Knowledge Never Changes —</strong> The true knowledge
            of a particular world will never change.
          </li>
          <li>
            <strong>Right to Represent —</strong> A person must always
            preserve the right to represent themselves — and only themselves —
            at any given moment.
          </li>
        </ul>
      </div>
    </div>
  )
}
