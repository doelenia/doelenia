import Image from 'next/image'

export default function Home() {
  return (
    <div className="home">
      <Image
        src="/doe_logo_formal.png"
        alt="Doelenia Ommia Kazen"
        width={120}
        height={120}
        className="home-logo"
        priority
      />
      <h1 className="title name">Doelenia Ommia Kazen</h1>
      <p className="subtitle muted">The Ark for Humanity.</p>
    </div>
  )
}
