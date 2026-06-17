import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
}

export default function About() {
  return (
    <div className="page">
      <p className="page-label">Doelenia</p>
      <h1 className="page-title">About</h1>
      <div className="page-divider" />

      <div className="page-body">
        <p>
          Doelenian Ommia Kazen exists to support and protect those determined
          to practice the full range of what it means to be human — against a
          world that too often asks us only to survive.
        </p>
        <p>
          We are an alliance. Not a platform, not a brand. A commitment to the
          belief that every human being carries within them the right and the
          capacity to explore, create, feel, and believe.
        </p>
      </div>

      <div className="page-section">
        <p className="page-section-label">Main Belief</p>
        <div className="page-body">
          <p>
            We believe that the nature of human is not just to survive and be
            safe — like other creatures on Earth. It is to explore, to create,
            to feel (love or hate), and to believe. This is the path that can
            be assured on humanity.
          </p>
        </div>
      </div>

      <div className="page-section">
        <p className="page-section-label">Strategy</p>
        <div className="page-body">
          <p>
            To create an unbreakable organization that supports and protects
            people and organizations determined and able to practice this belief.
          </p>
        </div>
      </div>

      <div className="page-section">
        <p className="page-section-label">The Four Core Qualities</p>
        <ul className="qualities">
          <li>
            <strong>Jahlah —</strong> Embrace the humility of personal
            ignorance and seek unyielding truth about the nature of humanity,
            society, and existence.
          </li>
          <li>
            <strong>Iksanah —</strong> Acknowledge the emotional essence of
            humanity while employing rationality to act with wisdom and
            strategy.
          </li>
          <li>
            <strong>Katah —</strong> Remain truthful to oneself and those
            worthy of trust, wielding deception only when it serves a higher
            purpose.
          </li>
          <li>
            <strong>Fesuanah —</strong> Cultivate empathy toward all beings
            and nurture an enduring love for humanity's various well-being.
          </li>
        </ul>
      </div>
    </div>
  )
}
