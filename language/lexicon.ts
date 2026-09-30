/**
 * Doelenian lexicon. The glossary in this folder reads this file.
 * A Doelenian word does not end in r.
 *
 * A fundamental or holy thing is a root: its own word.
 * A root is not a noun. The pictures are sna, na, ia, ian, vax, hax, oun, and zen only for a true whole.
 * Anything else is a compound, built from roots, and stays lowercase.
 * A capital is a holy bare noun (Jah), a finished name, or the first word of a sentence.
 *
 * status
 *   given    — the founder's note
 *   derived  — built by the grammar from words already here
 *   new      — a root opened because the thing is fundamental and had no word
 *
 * parts — a compound or a name, in order. Each part is another word.
 * root  — the word this form is built on, when it is not itself the root.
 *
 * Add a word here before it appears in strings.ts.
 */

export type LexStatus = 'given' | 'derived' | 'new'

export type LexKind =
  | 'root'
  | 'compound'
  | 'name'
  | 'particle'
  | 'pronoun'
  | 'grammar'

export type LexEntry = {
  word: string
  kind: LexKind
  gloss: string
  status: LexStatus
  parts?: string[]
  root?: string
  note?: string
}

export const lexicon: LexEntry[] = [
  // —— founder ——
  { word: 'doe', kind: 'root', gloss: 'alone; by one\'s own self', status: 'given', note: '独自. Not the act of closing, and not the word for only.' },
  { word: 'len', kind: 'root', gloss: 'to go forth; to depart; to send forth', status: 'given', note: '离去. Not the act of joining.' },
  { word: 'ia', kind: 'root', gloss: 'a ground; a region; the noun picture for a place', status: 'given', note: '地区. Spoken alone, ia is a ground.' },
  { word: 'ian', kind: 'root', gloss: 'a person of a ground, or the language of it', status: 'given', root: 'ia', note: '地的人或语言. -ian is a founder picture on a ground, so the word may stand as a noun.' },
  { word: 'hax', kind: 'root', gloss: 'an activity; a work; the noun picture for a practice', status: 'given', root: 'ha', note: '活动. reihax is reason as a work. tahax is a conversation. ha is only the stem. To use a tool is yut, not hax.' },
  { word: 'ha', kind: 'root', gloss: 'of an activity', status: 'given', note: '活动的. Stem of hax. The stem is what enters a compound.' },
  { word: 'sees', kind: 'root', gloss: 'the stars', status: 'given', root: 'se', note: '星星. The long form is the founder\'s noun picture. se is only the stem.' },
  { word: 'se', kind: 'root', gloss: 'of the stars', status: 'given', note: '星星的. Stem of sees.' },
  { word: 'ne', kind: 'particle', gloss: 'is, clipped', status: 'given', note: '是. Same word as nes, when a line has no room for the full body.' },
  { word: 'nes', kind: 'particle', gloss: 'is', status: 'given', root: 'ne', note: '是. Subject, then nes, then what it is.' },
  { word: 'to', kind: 'particle', gloss: 'of', status: 'given', note: '的. Possessor first. Use to except after a name.' },
  { word: 'no', kind: 'particle', gloss: 'of, the old mark after a name', status: 'given', root: 'to', note: '的. Not used inside a name. The name is Doelenia Ommia Kazen. Ordinary of is to.' },
  { word: 'oun', kind: 'root', gloss: 'a company; people bound by one work; the noun picture for a group', status: 'given', note: '团. Spoken alone, oun is a company. Fused at the end, it makes a group-noun.' },
  { word: 'zen', kind: 'root', gloss: 'an integrated whole', status: 'given', note: '集成体. Heavier than oun. Not the ordinary noun picture. auzen is humanity. hunzen is the whole of a life. Spoken alone, zen is the whole. The chief or the greatest is toh, not zen.' },
  { word: 'na', kind: 'root', gloss: 'one being; the noun picture for a single person or creature', status: 'new', note: 'auna is one human. renna is one living being. Not the adjective -a.' },
  { word: 'weyat', kind: 'root', gloss: 'joy', status: 'given', note: '开心' },
  { word: 'weyata', kind: 'root', gloss: 'joyful', status: 'given', root: 'weyat', note: '开心的. -a makes the adjective. It follows the noun.' },
  { word: 'jai', kind: 'pronoun', gloss: 'I', status: 'given', note: '自己. Long form. Not Jah, which is god.' },
  { word: 'ai', kind: 'pronoun', gloss: 'I, flowing', status: 'given', root: 'jai' },
  { word: 'joo', kind: 'pronoun', gloss: 'you', status: 'given', note: '你' },
  { word: 'o', kind: 'pronoun', gloss: 'you, flowing', status: 'given', root: 'joo' },
  { word: 'jeh', kind: 'pronoun', gloss: 'he, she', status: 'given', note: '他' },
  { word: 'yeh', kind: 'pronoun', gloss: 'he, she, flowing', status: 'given', root: 'jeh' },
  { word: 'jan', kind: 'pronoun', gloss: 'we', status: 'given', note: '我们' },
  { word: 'yan', kind: 'pronoun', gloss: 'we, flowing', status: 'given', root: 'jan' },
  { word: 'jen', kind: 'pronoun', gloss: 'they', status: 'given', note: '他们' },
  { word: 'yen', kind: 'pronoun', gloss: 'they, flowing', status: 'given', root: 'jen' },

  { word: 'au', kind: 'root', gloss: 'human', status: 'given', note: 'The root, not the noun. Humanity is auzen. One human is auna.' },
  { word: 'sna', kind: 'root', gloss: 'a trace; what is left; the ordinary picture for a record of a thing', status: 'given', note: '-sna, the traces we leave. Ausna is au + sna. Truth is lehsna. A writing is tahsna. wen is not this ending.' },
  { word: 'va', kind: 'root', gloss: 'of a field of work', status: 'derived', note: 'Stem of vax.' },
  { word: 'vax', kind: 'root', gloss: 'a space; a container; a field that holds', status: 'derived', root: 'va', note: 'The noun picture for a space. The root shortens when the join jams: navax, sivax, wevax. va is only the stem.' },
  { word: 'nun', kind: 'particle', gloss: 'not', status: 'new', note: 'Stands before the word it denies.' },
  { word: 'eh', kind: 'particle', gloss: 'and', status: 'new', note: 'The word, where English says and. A comma is not said as eh.' },
  { word: 'bah', kind: 'particle', gloss: 'but; the turn', status: 'new', note: 'Joins a claim that turns from the one before it.' },
  { word: 'ke', kind: 'particle', gloss: 'the old mark before a specifying clause', status: 'new', note: 'Not spoken. A comma does this, as in English.' },
  { word: 'hem', kind: 'particle', gloss: 'while; in the same act', status: 'new' },

  // —— special names. Capital only here, and at the start of a sentence. ——
  { word: 'Doelenia', kind: 'name', gloss: 'the ground of those who go forth alone', status: 'derived', parts: ['doe', 'len', 'ia'] },
  { word: 'Doelenian', kind: 'name', gloss: 'a person of Doelenia; this language', status: 'derived', parts: ['doe', 'len', 'ian'] },
  { word: 'Ommia', kind: 'name', gloss: 'the gathered whole', status: 'derived' },
  { word: 'Kazen', kind: 'name', gloss: 'the keeping; a covenant; an alliance; a commitment', status: 'derived', note: 'The zen picture is already inside the word. Lowercase kazen is the common noun. Capital Kazen is the name in Doelenia Ommia Kazen.' },
  { word: 'Ausna', kind: 'name', gloss: 'humanity, and the wisdom it leaves', status: 'given', parts: ['au', 'sna'], note: '人性与智慧' },
  { word: 'Auzen', kind: 'name', gloss: 'humanity, when the word is the founder\'s name', status: 'derived', parts: ['au', 'zen'], root: 'auzen', note: 'The common noun is auzen. The capital is only the name.' },
  { word: 'Seesoun', kind: 'name', gloss: 'the company of the stars', status: 'derived', parts: ['sees', 'oun'] },
  { word: 'Seeoun', kind: 'name', gloss: 'the company of the stars, on the stem', status: 'derived', parts: ['se', 'oun'] },
  { word: 'Haseoun', kind: 'name', gloss: 'the company of stellar work', status: 'derived', parts: ['ha', 'se', 'oun'] },
  { word: 'Haseon', kind: 'name', gloss: 'Haseoun, spoken short', status: 'derived', root: 'Haseoun' },
  { word: 'Haseva', kind: 'name', gloss: 'the stellar field', status: 'derived', parts: ['ha', 'se', 'va'], note: 'Model sentence: Haseva nes sees to vax.' },
  { word: 'mina', kind: 'root', gloss: 'the inner knowing', status: 'derived' },
  { word: 'Minavax', kind: 'name', gloss: 'the field of inner knowing; the Book', status: 'derived', parts: ['mina', 'vax'] },
  { word: 'ommi', kind: 'root', gloss: 'the work set forth', status: 'derived', root: 'Ommia', note: 'Stem of Ommia.' },
  { word: 'Ommivax', kind: 'name', gloss: 'the field of work set forth', status: 'derived', parts: ['ommi', 'vax'], note: 'Ausna and Jah sit in this field.' },
  { word: 'ikna', kind: 'root', gloss: 'clear seeing', status: 'derived' },
  { word: 'Iknavax', kind: 'name', gloss: 'the field of clear seeing', status: 'derived', parts: ['ikna', 'vax'] },
  { word: 'Jah', kind: 'name', gloss: 'god', status: 'given', note: 'A holy noun. It stands as its root and keeps the capital. Not the pronoun jai.' },
  { word: 'lah', kind: 'root', gloss: 'a vow', status: 'derived', note: 'The root. The noun is lahsna. Inside the name Jahlah it is already finished.' },
  { word: 'Jahlah', kind: 'name', gloss: 'the vow of god', status: 'derived', parts: ['Jah', 'lah'] },
  { word: 'iksa', kind: 'root', gloss: 'feeling that stays true', status: 'derived' },
  { word: 'nah', kind: 'root', gloss: 'a holding; a discipline', status: 'derived' },
  { word: 'Iksanah', kind: 'name', gloss: 'feeling held by reason', status: 'derived', parts: ['iksa', 'nah'] },
  { word: 'kata', kind: 'root', gloss: 'the straight word; precise', status: 'derived' },
  { word: 'Katah', kind: 'name', gloss: 'the vow of the straight word', status: 'derived', root: 'kata' },
  { word: 'fesua', kind: 'root', gloss: 'care that reaches another; empathy', status: 'derived', note: 'The root. The noun is fesuasna.' },
  { word: 'Fesuanah', kind: 'name', gloss: 'empathy, held as a vow', status: 'derived', parts: ['fesua', 'nah'] },

  // —— roots. Fundamental or holy, so each one is its own word. ——
  { word: 'nax', kind: 'root', gloss: 'ark; the vessel that carries the living', status: 'new', note: 'The root. Before vax it shortens to na: navax. The ark for humanity is auzen to navax.' },
  { word: 'reh', kind: 'root', gloss: 'renewal; to grow; what can become', status: 'new', note: 'The verb stays reh. The noun, what can become, is rehsna.' },
  { word: 'sih', kind: 'root', gloss: 'a standing order; a system', status: 'new', note: 'The root. Before vax it shortens to si: sivax. One\'s own system is doe ia to sivax, not one stacked word.' },
  { word: 'leh', kind: 'root', gloss: 'truth; a true saying', status: 'new', note: 'The root. Truth is lehsna. The About page is lehia, the same root with the light end ia. Not a stack on Doelenia.' },
  { word: 'bel', kind: 'root', gloss: 'to believe', status: 'new', note: 'The noun, belief, is belsna.' },
  { word: 'ora', kind: 'root', gloss: 'existence; that which is', status: 'new', note: 'The root. The noun is oravax, the space of what is.' },
  { word: 'hun', kind: 'root', gloss: 'life, as it is lived', status: 'new', note: 'The root. The whole of a life is hunzen.' },
  { word: 'mah', kind: 'root', gloss: 'world', status: 'new', note: 'The root. The noun is mahia, a ground.' },
  { word: 'ken', kind: 'root', gloss: 'to know; knowledge; understanding', status: 'new', note: 'The noun is kensna. Certainty, knowledge held as finished, is ketsna.' },
  { word: 'sha', kind: 'root', gloss: 'to feel; feeling', status: 'new', note: 'The verb stays sha. The noun is shasna.' },
  { word: 'em', kind: 'root', gloss: 'love', status: 'new', note: 'The root. The noun is emsna.' },
  { word: 'hah', kind: 'root', gloss: 'hate', status: 'new', note: 'The root. The noun is hahsna.' },
  { word: 'rei', kind: 'root', gloss: 'logic; reason', status: 'new', note: 'The root. The noun is reihax, reason as a work.' },
  { word: 'mih', kind: 'root', gloss: 'a right a person holds', status: 'new', note: 'The root. The noun is mihsna.' },
  { word: 'sen', kind: 'root', gloss: 'to seek; to explore', status: 'new', note: 'The cause, the why, is yoh.' },
  { word: 'mei', kind: 'root', gloss: 'to make; to create; to rebuild', status: 'new', note: 'To gather persons is gam.' },
  { word: 'vel', kind: 'root', gloss: 'to carry; to hold within; to bear or support', status: 'new', note: 'To take a thing in, to embrace or acknowledge it, is vem.' },
  { word: 'koh', kind: 'root', gloss: 'to keep; to guard; to protect', status: 'new' },
  { word: 'pah', kind: 'root', gloss: 'path', status: 'new', note: 'The root. The noun is pahia, a ground one walks.' },
  { word: 'wen', kind: 'root', gloss: 'a book', status: 'new', note: 'The root of a book, not a noun picture. Before vax it shortens to we: wevax. A trace of something else ends in sna.' },
  { word: 'men', kind: 'root', gloss: 'memory', status: 'new', note: 'The root. The noun is mensna.' },
  { word: 'nel', kind: 'root', gloss: 'intention; the aim that is held; so that, when it stands between claims', status: 'new', note: 'Between claims, nel means so that. The noun is nelsna.' },
  { word: 'rah', kind: 'root', gloss: 'a bond between persons', status: 'new', note: 'The root. The noun is rahsna.' },
  { word: 'dal', kind: 'root', gloss: 'safety; to be unharmed and no more', status: 'new' },
  { word: 'sol', kind: 'root', gloss: 'to survive; to merely remain', status: 'new' },
  { word: 'ren', kind: 'root', gloss: 'a living being', status: 'new', note: 'The root. The kind, as one whole, is renzen. One being is renna.' },
  { word: 'neh', kind: 'root', gloss: 'this moment; now', status: 'new' },
  { word: 'loh', kind: 'root', gloss: 'a part of a whole', status: 'new', note: 'The root. Before vax it shortens to lo: lovax.' },
  { word: 'kan', kind: 'root', gloss: 'four', status: 'new' },
  { word: 'ruh', kind: 'root', gloss: 'to challenge; to press a claim', status: 'new' },
  { word: 'lun', kind: 'root', gloss: 'a menu; the list opened so a choice can be made', status: 'new', note: 'The root. Before vax it shortens to lu: luvax. Not a directory of a ground, and not a company.' },
  { word: 'suh', kind: 'root', gloss: 'to close; to shut what stands open', status: 'new' },
  { word: 'vin', kind: 'root', gloss: 'to join; to come into a company', status: 'new' },
  { word: 'yoh', kind: 'root', gloss: 'the cause; the why; because, when it stands between claims', status: 'new', note: 'Between claims, yoh means because. The noun is yohsna.' },
  { word: 'soh', kind: 'root', gloss: 'only; solely; spare, with nothing extra', status: 'new' },
  { word: 'gam', kind: 'root', gloss: 'to gather; to bring persons together', status: 'new' },
  { word: 'vem', kind: 'root', gloss: 'to embrace; to acknowledge; to take a thing in', status: 'new' },
  { word: 'yut', kind: 'root', gloss: 'to use; to put a thing to work', status: 'new' },
  { word: 'seht', kind: 'root', gloss: 'to worship; to bow to a thing as holy', status: 'new' },
  { word: 'san', kind: 'root', gloss: 'to ask; to request', status: 'new' },
  { word: 'toh', kind: 'root', gloss: 'the chief; the foremost; the greatest', status: 'new' },
  { word: 'teh', kind: 'root', gloss: 'the passing of time; across moments', status: 'new', note: 'The root. Before vax it shortens to te: tevax.' },
  { word: 'ket', kind: 'root', gloss: 'certainty; knowledge held as finished', status: 'new', note: 'The root. The noun is ketsna.' },
  { word: 'tah', kind: 'root', gloss: 'a conversation; speech between persons', status: 'new', note: 'The root. Before hax the h is not doubled: tahax. The writings are tahsna.' },
  { word: 'vot', kind: 'root', gloss: 'to take root; to set into the ground', status: 'new' },
  { word: 'pot', kind: 'root', gloss: 'power; the strength a thing can put forth', status: 'new', note: 'The root. Before vax it shortens to po: povax.' },
  { word: 'lih', kind: 'root', gloss: 'as; in the manner of', status: 'new' },

  // —— compounds. Not fundamental, so built from roots. Lowercase. ——
  { word: 'meia', kind: 'compound', gloss: 'a platform; a ground that was made', status: 'derived', parts: ['mei', 'ia'] },
  { word: 'meikna', kind: 'compound', gloss: 'a brand, before it is spoken as one root plus a picture', status: 'derived', parts: ['mei', 'ikna'], note: 'The common noun is iknasna, the trace put up to be seen.' },
  { word: 'meiket', kind: 'compound', gloss: 'a monument to certainty', status: 'derived', parts: ['mei', 'ket'] },
  { word: 'meihax', kind: 'compound', gloss: 'a tool; a thing made for a work', status: 'derived', parts: ['mei', 'hax'] },
  { word: 'meidal', kind: 'compound', gloss: 'making for mere output, before it is spoken as one root plus a picture', status: 'derived', parts: ['mei', 'dal'], note: 'The common noun is dalhax.' },
  { word: 'nunken', kind: 'compound', gloss: 'ignorance; not-knowing', status: 'derived', parts: ['nun', 'ken'] },
  { word: 'nun-leh', kind: 'compound', gloss: 'a deception; the un-truth', status: 'derived', parts: ['nun', 'leh'], note: 'Negation compounds take a hyphen.' },
  { word: 'nunmei', kind: 'compound', gloss: 'the impossible; what cannot be made', status: 'derived', parts: ['nun', 'mei'] },
  { word: 'nunsen', kind: 'compound', gloss: 'what has not been sought', status: 'derived', parts: ['nun', 'sen'] },
  { word: 'nunlen', kind: 'compound', gloss: 'unbreaking; unyielding; enduring', status: 'derived', parts: ['nun', 'len'] },
  { word: 'iaoun', kind: 'compound', gloss: 'the named places of a ground', status: 'derived', parts: ['ia', 'oun'], note: 'Not a menu. A menu is luvax.' },
  { word: 'hunzen', kind: 'compound', gloss: 'well-being; the whole of a life', status: 'derived', parts: ['hun', 'zen'], note: 'zen here is the real whole, not a default ending.' },

  // —— nouns. A root plus the picture that fits. Lowercase. Ausna's ending is the model for a trace. ——
  { word: 'auzen', kind: 'compound', gloss: 'humanity; the human as one body', status: 'derived', parts: ['au', 'zen'] },
  { word: 'auna', kind: 'compound', gloss: 'one human', status: 'derived', parts: ['au', 'na'] },
  { word: 'renzen', kind: 'compound', gloss: 'living beings, as one whole', status: 'derived', parts: ['ren', 'zen'] },
  { word: 'renna', kind: 'compound', gloss: 'one living being', status: 'derived', parts: ['ren', 'na'] },
  { word: 'navax', kind: 'compound', gloss: 'an ark; the vessel as a container', status: 'derived', parts: ['nax', 'vax'], note: 'nax shortens to na before vax, so the ending can be read.' },
  { word: 'sivax', kind: 'compound', gloss: 'a system; an order as a space that holds', status: 'derived', parts: ['sih', 'vax'], note: 'sih shortens to si before vax.' },
  { word: 'oravax', kind: 'compound', gloss: 'existence; the space of what is', status: 'derived', parts: ['ora', 'vax'], note: 'ora already ends in a vowel, so it does not shorten.' },
  { word: 'wevax', kind: 'compound', gloss: 'a book; a container of traces', status: 'derived', parts: ['wen', 'vax'], note: 'wen shortens to we before vax.' },
  { word: 'povax', kind: 'compound', gloss: 'power; potential held as a space', status: 'derived', parts: ['pot', 'vax'], note: 'pot shortens to po before vax.' },
  { word: 'tevax', kind: 'compound', gloss: 'time, as a space one crosses', status: 'derived', parts: ['teh', 'vax'], note: 'teh shortens to te before vax.' },
  { word: 'lovax', kind: 'compound', gloss: 'a part, held in a space', status: 'derived', parts: ['loh', 'vax'], note: 'loh shortens to lo before vax.' },
  { word: 'luvax', kind: 'compound', gloss: 'a menu; a container of choices', status: 'derived', parts: ['lun', 'vax'], note: 'lun shortens to lu before vax.' },
  { word: 'lehia', kind: 'compound', gloss: 'an account; the About page', status: 'derived', parts: ['leh', 'ia'], note: 'One root and a light end. Not a stack on the name Doelenia. Truth is lehsna.' },
  { word: 'mahia', kind: 'compound', gloss: 'the world, as a ground', status: 'derived', parts: ['mah', 'ia'] },
  { word: 'pahia', kind: 'compound', gloss: 'a path, as a ground one walks', status: 'derived', parts: ['pah', 'ia'] },
  { word: 'reihax', kind: 'compound', gloss: 'reason, as a work', status: 'derived', parts: ['rei', 'hax'] },
  { word: 'tahax', kind: 'compound', gloss: 'a conversation, as an activity', status: 'derived', parts: ['tah', 'hax'], note: 'The h of tah is not doubled before hax.' },
  { word: 'kohax', kind: 'compound', gloss: 'strategy; the work of keeping', status: 'derived', parts: ['koh', 'hax'], note: 'The h of koh is not doubled before hax.' },
  { word: 'dalhax', kind: 'compound', gloss: 'productivity; the work of mere output', status: 'derived', parts: ['dal', 'hax'] },
  { word: 'velsna', kind: 'compound', gloss: 'an assumption; a trace carried as a start', status: 'derived', parts: ['vel', 'sna'] },
  { word: 'iknasna', kind: 'compound', gloss: 'a brand; a trace put up to be seen', status: 'derived', parts: ['ikna', 'sna'] },
  { word: 'meisna', kind: 'compound', gloss: 'a made trace', status: 'derived', parts: ['mei', 'sna'] },
  { word: 'sensna', kind: 'compound', gloss: 'what is sought; the trace of a seeking', status: 'derived', parts: ['sen', 'sna'] },
  { word: 'lehsna', kind: 'compound', gloss: 'truth, the trace of what is said', status: 'derived', parts: ['leh', 'sna'] },
  { word: 'belsna', kind: 'compound', gloss: 'belief, the trace of what is held', status: 'derived', parts: ['bel', 'sna'] },
  { word: 'kensna', kind: 'compound', gloss: 'knowledge, the trace of what is known', status: 'derived', parts: ['ken', 'sna'] },
  { word: 'shasna', kind: 'compound', gloss: 'feeling, the trace of what is felt', status: 'derived', parts: ['sha', 'sna'] },
  { word: 'emsna', kind: 'compound', gloss: 'love, the trace that is left', status: 'derived', parts: ['em', 'sna'] },
  { word: 'hahsna', kind: 'compound', gloss: 'hate, the trace that is left', status: 'derived', parts: ['hah', 'sna'] },
  { word: 'mihsna', kind: 'compound', gloss: 'a right, the trace a person carries', status: 'derived', parts: ['mih', 'sna'] },
  { word: 'mensna', kind: 'compound', gloss: 'memory, the trace that is kept', status: 'derived', parts: ['men', 'sna'] },
  { word: 'nelsna', kind: 'compound', gloss: 'an intention; an aim left ahead', status: 'derived', parts: ['nel', 'sna'] },
  { word: 'rahsna', kind: 'compound', gloss: 'a bond, the trace between persons', status: 'derived', parts: ['rah', 'sna'] },
  { word: 'rehsna', kind: 'compound', gloss: 'what can become; the trace of a renewal', status: 'derived', parts: ['reh', 'sna'] },
  { word: 'yohsna', kind: 'compound', gloss: 'a cause; a why, the trace behind an act', status: 'derived', parts: ['yoh', 'sna'] },
  { word: 'lahsna', kind: 'compound', gloss: 'a vow, the trace of a word that stays', status: 'derived', parts: ['lah', 'sna'] },
  { word: 'ketsna', kind: 'compound', gloss: 'certainty, knowledge left as finished', status: 'derived', parts: ['ket', 'sna'] },
  { word: 'fesuasna', kind: 'compound', gloss: 'empathy, the trace of care', status: 'derived', parts: ['fesua', 'sna'] },
  { word: 'tahsna', kind: 'compound', gloss: 'writings; the trace of conversations', status: 'derived', parts: ['tah', 'sna'] },
  { word: 'vinsna', kind: 'compound', gloss: 'an interest form; the trace by which one joins', status: 'derived', parts: ['vin', 'sna'] },
  { word: 'snavax', kind: 'compound', gloss: 'a repository; a space that holds traces', status: 'derived', parts: ['sna', 'vax'] },
  { word: 'levax', kind: 'compound', gloss: 'a glossary; a container of sayings', status: 'derived', parts: ['leh', 'vax'], note: 'leh shortens to le before vax.' },

  // —— grammar, searchable with the words ——
  {
    word: 'capitals',
    kind: 'grammar',
    gloss: 'A capital marks a holy noun that stands bare, a finished name, or the first word of a sentence. A common noun takes a picture and stays lower.',
    status: 'new',
    note: 'Jah. Doelenia, Ausna. auzen to navax. lehia.',
  },
  {
    word: 'roots and compounds',
    kind: 'grammar',
    gloss: 'A fundamental or holy thing is a new root, its own word. The root is not a noun until a picture finishes it. Anything else is a compound of those roots. A phrase of holy nouns stays a phrase.',
    status: 'new',
    note: 'auzen to navax — the ark for humanity. doe ia to sivax — one\'s own system, said as words, not one stack.',
  },
  {
    word: 'genitive',
    kind: 'grammar',
    gloss: 'Possessor first, then to or no, then the thing. no after a name. to everywhere else.',
    status: 'given',
    note: 'sees to vax. auzen to navax. Doelenia Ommia Kazen.',
  },
  {
    word: 'copula',
    kind: 'grammar',
    gloss: 'A defining sentence is subject, then nes, then what it is. ne is the same word clipped.',
    status: 'given',
    note: 'Haseva nes sees to vax.',
  },
  {
    word: 'negation',
    kind: 'grammar',
    gloss: 'nun stands before the word it denies. A negation that has become its own word takes a hyphen.',
    status: 'new',
    note: 'auna nun ken. nun lehsna.',
  },
  {
    word: 'verb',
    kind: 'grammar',
    gloss: 'A verb does not change for person or time. Subject, then verb, then object.',
    status: 'given',
    note: 'jan sen lehsna. jan len sna to mahia.',
  },
  {
    word: 'adjective',
    kind: 'grammar',
    gloss: '-a on the root makes the adjective. The adjective follows the noun. -a is not the person picture na.',
    status: 'given',
    note: 'hax weyata. auna is one human, au plus na, not au plus -a.',
  },
  {
    word: 'noun picture',
    kind: 'grammar',
    gloss: 'A common noun is one root plus one light picture. sna is a trace, na one being, ia a ground, vax a space, hax a work. If the join jams, the root drops its last consonant and the picture stays whole. zen is only an integrated whole. A stack is not a common word.',
    status: 'new',
    note: 'lehia, the About page. navax, the ark, from nax + vax. lehsna, truth. Ausna is au + sna. Jah stands bare.',
  },
  {
    word: 'ground',
    kind: 'grammar',
    gloss: '-ia is a ground. -ian is a person of that ground, or the language spoken there.',
    status: 'given',
    note: 'doe + len + ia = Doelenia. Doelenian is a person of it, and this language.',
  },
  {
    word: 'stem',
    kind: 'grammar',
    gloss: 'The long form stands alone. The short form is the root that enters a compound.',
    status: 'given',
    note: 'sees / se, hax / ha, vax / va, nes / ne. oun may be spoken on.',
  },
  {
    word: 'joining claims',
    kind: 'grammar',
    gloss: 'Punctuation is the period, the comma, the dash, the semicolon, and the parentheses, as in English. eh is and, bah is but, yoh is because, nel is so that, hem is while. A comma marks the specifying clause. The subject is spoken again only when it changes.',
    status: 'new',
    note: 'nes auzen to navax, sen rehsna to sivax, vel auzen to povax. Jan nes kazen, bah nun nes meia.',
  },
  {
    word: 'model sentence',
    kind: 'grammar',
    gloss: 'The line that tests the grammar. If a new rule cannot read it, the rule is wrong.',
    status: 'given',
    note: 'Haseva nes sees to vax.',
  },
]
