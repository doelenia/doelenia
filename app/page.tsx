import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="home">
      <Image
        src="/doe_logo.png"
        alt="Doelenian Ommia Kazen"
        width={88}
        height={88}
        className="home-logo"
        priority
      />
      <p className="home-title">Doelenian Ommia Kazen</p>
      <h1 className="home-tagline">The Resort for Humanity.</h1>
      <p className="home-belief">
        We believe that the nature of human is not just to survive and be safe.
        It is to explore, to create, to feel, and to believe.
        This is the path assured for humanity.
      </p>
      <nav className="home-nav">
        <Link href="/about">About</Link>
        <Link href="/book">The Doelenian Book</Link>
        <Link href="/ausna">Ausna</Link>
        <Link href="/jah">Jah</Link>
      </nav>
    </div>
  )
}
