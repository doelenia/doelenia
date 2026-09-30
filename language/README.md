# Doelenian

The language of Doelenia. This folder is the system. The website reads it. Update it here, then the pages follow.

## How to change it

1. Read `grammar.md` before adding a word. New words obey the grammar already there.
2. Add the word to `lexicon.ts`. Mark it `given` (from the founder), `derived` (built by the grammar from given words), or `new` (made for a gap).
3. Use it in `strings.ts` if a page should say it.
4. Do not invent a second genitive, a second copula, or a second place-suffix. Extend the lists in the grammar instead, and say why.
5. A common noun is one root plus one light picture (`lehia` about, `navax` the ark, `lehsna` truth, `auna` one human). If the join jams, the root shortens and the picture stays whole (`nax` + `vax` = `navax`). A stack is not a common word. `zen` is only a true whole. A holy noun that stands bare is capitalized (`Jah`). A word does not end in r.
6. A translation keeps every claim of the English. A long claim stays one sentence. It does not drop a clause to stay short. Punctuation is the period, the comma, the dash, the semicolon, and the parentheses. `eh`, `bah`, `hem`, `nel`, and `yoh` are words, used where English uses and, but, while, so that, and because. The name is `Doelenia Ommia Kazen`, with no `no` between the words.
7. After a lexicon change, rebuild the glossary: `node language/build-glossary.mjs`. Open `language/glossary.html`. It is not a page of the website.

`strings.ts` is the only file the site imports. The language field there is `dln` (Doelenian). `lexicon.ts` and `grammar.md` are the record the strings must stay inside.

## On the site

DOK is the alliance, Doelenia Ommia Kazen. The language is Doelenian, abbreviated DLN. The open menu carries `EN / DLN`. English is the default. The choice is kept in `localStorage` and a cookie, both under `dln-lang`, so a saved Doelenian page is drawn in Doelenian on the first paint.
