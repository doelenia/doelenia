/**
 * Every string on the site, in English and Doelenian.
 *
 * Doelenian lines must use only words from lexicon.ts.
 * The `dln` field is Doelenian. DOK is the alliance, not this language.
 * A capital is a holy bare noun, a finished name, or the first word of a sentence.
 * A common noun is one root plus one light picture. A jammed join shortens the root.
 * English is the default. See language/README.md.
 */

export const strings = {
  'home.name': {
    en: 'Doelenia Ommia Kazen',
    dln: 'Doelenia Ommia Kazen',
  },
  'home.tagline': {
    en: 'The Ark for Humanity.',
    dln: 'Auzen to navax.',
  },

  'nav.about': { en: 'About', dln: 'lehia' },
  'nav.book': { en: 'The Doelenia Book', dln: 'Doelenia to wevax' },
  'nav.ausna': { en: 'Ausna', dln: 'Ausna' },
  'nav.jah': { en: 'Jah', dln: 'Jah' },
  'nav.menu': { en: 'Menu', dln: 'luvax' },
  'nav.close': { en: 'Close', dln: 'suh' },
  'nav.language': { en: 'Language', dln: 'ian' },
  'nav.directory': { en: 'Site directory', dln: 'luvax' },

  'about.kicker': { en: 'Doelenia', dln: 'Doelenia' },
  'about.title': { en: 'About', dln: 'lehia' },
  'about.def': {
    en: 'is an ark for humanity that pursues a renaissance system running on the full potential of humanity.',
    dln: 'nes auzen to navax, sen rehsna to sivax, vel auzen to povax.',
  },
  'about.alliance': {
    en: 'We are an alliance. Not a platform, not a brand. A commitment to the belief that every human being carries within them the right and the capacity to explore, create, feel, and believe.',
    dln: 'Jan nes kazen. Nun nes meia, nun nes iknasna. Jan to kazen nes belsna, doe auna vel mihsna ia to doe eh vel povax to sen, mei, sha, eh bel.',
  },
  'about.belief.kicker': { en: 'Main Belief', dln: 'toh to belsna' },
  'about.belief': {
    en: 'We believe that the nature of human is not just to survive and be safe — like other creatures on Earth. It is to explore, to create, to feel (love or hate), and to believe. This is the path that can be assured on humanity.',
    dln: 'Jan bel, auzen to lehsna nun soh nes sol eh nun soh nes dal — lih renzen to mahia. Nes sen, nes mei, nes sha (emsna, hahsna), eh nes bel. Nes pahia, koh to auzen.',
  },
  'about.strategy.kicker': { en: 'Strategy', dln: 'kohax' },
  'about.strategy': {
    en: 'To create an unbreakable organization that supports and protects people and organizations determined and able to practice this belief.',
    dln: 'Mei oun nunlen, vel eh koh auna eh oun, vel nel, vel povax, eh hax belsna.',
  },
  'about.qualities.kicker': { en: 'The Four Core Qualities', dln: 'kan to lahsna' },
  'about.jahlah': {
    en: 'Embrace the humility of personal ignorance and seek unyielding truth about the nature of humanity, society, and existence.',
    dln: 'Vem doe to nun kensna, nes doe nun ken, eh sen lehsna nunlen, nes auzen to lehsna, oun to lehsna, eh oravax to lehsna.',
  },
  'about.iksanah': {
    en: 'Acknowledge the emotional essence of humanity while employing rationality to act with wisdom and strategy.',
    dln: 'Vem auzen to shasna, hem yut reihax, nel hax vel sna eh vel kohax.',
  },
  'about.katah': {
    en: 'Remain truthful to oneself and those worthy of trust, wielding deception only when it serves a higher purpose.',
    dln: 'Nes lehsna to jai eh to koh auna, soh yut nun lehsna, nel sen toh to nelsna.',
  },
  'about.fesuanah': {
    en: "Cultivate empathy toward all beings and nurture an enduring love for humanity's various well-being.",
    dln: 'Reh fesuasna, sen renzen, eh reh emsna nunlen, nes hunzen to auzen.',
  },

  'book.kicker': { en: 'Minavax', dln: 'Minavax' },
  'book.title': { en: 'The Doelenia Book', dln: 'Doelenia to wevax' },
  'book.p1': {
    en: 'A living record of understanding — about existence, humanity, and the world. Built to be concise, precise, honest, and enduring.',
    dln: 'Wevax nes hunzen to kensna — nes oravax, auzen, eh mahia. Nes soh, kata, lehsna, eh nunlen.',
  },
  'book.p2': {
    en: 'Not a monument to certainty, but a tool for thinking. The book records current understanding to make it possible to build upon, challenge, and advance our core philosophy over time.',
    dln: 'Wevax nun nes meisna to ketsna, bah nes meihax to reihax. Koh neh to kensna, nel mei lovax, ruh toh to belsna, eh reh toh to belsna, hem tevax.',
  },
  'book.p3': {
    en: 'It belongs to everyone who carries the Doelenia commitment — and asks only to be used, not worshipped.',
    dln: 'Wevax nes auzen, vel Doelenia to kazen — eh san soh yut, nun seht.',
  },
  'book.assumptions': { en: 'Core Assumptions', dln: 'velsna' },
  'book.a1.name': { en: 'Whole Truth Cannot Be Known', dln: 'zen to lehsna nun ken' },
  'book.a1': {
    en: 'No human has the real truth. Everyone could hold some part of it.',
    dln: 'Auna nun vel zen to lehsna. Auzen vel lovax to lehsna.',
  },
  'book.a2.name': { en: 'Logic Is the Top Belief', dln: 'reihax nes toh to belsna' },
  'book.a2': {
    en: 'We put our undoubted faith into the power of logic.',
    dln: 'Jan vel belsna nunlen, vel povax to reihax.',
  },
  'book.a3.name': { en: 'True Knowledge Never Changes', dln: 'lehsna to kensna nun len' },
  'book.a3': {
    en: 'The true knowledge of a particular world will never change.',
    dln: 'Doe to mahia to lehsna to kensna nun len.',
  },
  'book.a4.name': { en: 'Right to Represent', dln: 'mihsna to lehsna to jai' },
  'book.a4': {
    en: 'A person must always preserve the right to represent themselves — and only themselves — at any given moment.',
    dln: 'Auna koh mihsna — soh jai — neh to neh, nes lehsna to jai, nun nes lehsna to jen.',
  },

  'ausna.kicker': { en: 'Ommivax', dln: 'Ommivax' },
  'ausna.title': { en: 'Ausna', dln: 'Ausna' },
  'ausna.p1': {
    en: 'A society to explore & foster what humanity can become. Au- means human; -sna, the traces we leave — Ausna is what a human leaves to the world.',
    dln: 'Ausna nes oun, sen eh reh auzen to rehsna. Au nes au; sna nes sna, jan len — Ausna nes sna, auna len to mahia.',
  },
  'ausna.p2': {
    en: 'We believe humanity is the greatest work we leave to the world, and that its future emerges between people. Ausna gathers the people who carry it and grows it together, so it can take root and make the impossible possible.',
    dln: 'Jan bel, auzen nes toh to hax, jan len to mahia, eh auzen to rehsna nes auna to auna. Ausna gam auna, vel Ausna eh reh Ausna, nes zen, nel vot ia, eh nun meisna nes mei.',
  },
  'ausna.p3': {
    en: "Within it, we cultivate each person's humanity, rebuild the topics the world has left unexplored, and carry forward the projects that reach toward what humanity can become.",
    dln: 'Ia to Ausna, jan reh doe to auzen, mei nun sensna, nes mahia nun sen, eh vel hax, len auzen to rehsna.',
  },
  'ausna.manifesto': { en: 'Manifesto', dln: 'Ausna to lehsna' },
  'ausna.manifesto.sub': { en: 'What Ausna is, and why', dln: 'Ausna to lehsna, eh Ausna to yohsna' },
  'ausna.writings': { en: 'Writings', dln: 'tahsna' },
  'ausna.writings.sub': { en: 'Conversations from the society', dln: 'oun to tahax' },
  'ausna.join': { en: 'Join', dln: 'vin' },
  'ausna.join.sub': { en: 'Interest form', dln: 'vinsna' },

  'jah.kicker': { en: 'Ommivax', dln: 'Ommivax' },
  'jah.title': { en: 'Jah', dln: 'Jah' },
  'jah.p1': {
    en: 'A local-first personal operating system built around the belief that a human life deserves structure, memory, and intention.',
    dln: 'Jah nes doe ia to sivax, nes belsna, auna to hunzen vel mihsna to sivax, mensna, eh nelsna.',
  },
  'jah.p2': {
    en: "Jah holds the context of a person's work, relationships, and commitments — not as productivity software, but as a living record of the human-centered life.",
    dln: 'Jah koh auna to hax, rahsna, eh kazen — nun nes dalhax, bah nes hunzen to sna, nes auzen to hunzen.',
  },
  'jah.repo': { en: 'Repository', dln: 'snavax' },
  'jah.repo.sub': { en: 'github.com/doelenia/jah', dln: 'github.com/doelenia/jah' },
} as const

export type StringKey = keyof typeof strings
export type Lang = 'en' | 'dln'

export function translate(key: StringKey, lang: Lang): string {
  return strings[key][lang]
}
