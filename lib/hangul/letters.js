// 'ㅏ ㅐ ㅑ ㅒ ㅓ ㅔ ㅕ ㅖ ㅗ ㅘ ㅙ ㅚ ㅛ ㅜ ㅝ ㅞ ㅟ ㅠ ㅡ ㅢ ㅣ'
export const VOWELS = {
  fields: [ 'hangul', 'ipa', 'romanization' ],
  pool: [
    {
      'hangul': 'ㅏ',
      'ipa': 'a',
      'romanization': 'a'
    },
    {
      'hangul': 'ㅐ',
      'ipa': 'ɛ',
      'romanization': 'ae'
    },
    {
      'hangul': 'ㅑ',
      'ipa': 'ja',
      'romanization': 'ya'
    },
    {
      'hangul': 'ㅒ',
      'ipa': 'jɛ',
      'romanization': 'yae'
    },
    {
      'hangul': 'ㅓ',
      'ipa': 'ʌ',
      'romanization': 'eo'
    },
    {
      'hangul': 'ㅔ',
      'ipa': 'e',
      'romanization': 'e'
    },
    {
      'hangul': 'ㅕ',
      'ipa': 'jʌ',
      'romanization': 'yeo'
    },
    {
      'hangul': 'ㅖ',
      'ipa': 'je',
      'romanization': 'ye'
    },
    {
      'hangul': 'ㅗ',
      'ipa': 'o',
      'romanization': 'o'
    },
    {
      'hangul': 'ㅘ',
      'ipa': 'wa',
      'romanization': 'wa'
    },
    {
      'hangul': 'ㅙ',
      'ipa': 'wɛ',
      'romanization': 'wae'
    },
    {
      'hangul': 'ㅚ',
      'ipa': 'ø',
      'romanization': 'oe'
    },
    {
      'hangul': 'ㅛ',
      'ipa': 'jo',
      'romanization': 'yo'
    },
    {
      'hangul': 'ㅜ',
      'ipa': 'u',
      'romanization': 'u'
    },
    {
      'hangul': 'ㅝ',
      'ipa': 'wʌ',
      'romanization': 'wo'
    },
    {
      'hangul': 'ㅞ',
      'ipa': 'we',
      'romanization': 'we'
    },
    {
      'hangul': 'ㅟ',
      'ipa': 'wi',
      'romanization': 'wi'
    },
    {
      'hangul': 'ㅠ',
      'ipa': 'ju',
      'romanization': 'yu'
    },
    {
      'hangul': 'ㅡ',
      'ipa': 'ɯ',
      'romanization': 'eu'
    },
    {
      'hangul': 'ㅢ',
      'ipa': 'ɰi',
      'romanization': 'ui'
    },
    {
      'hangul': 'ㅣ',
      'ipa': 'i',
      'romanization': 'i'
    }
  ]
};

// Consonant signs:
// ㄱ ㄲ ㄴ ㄷ ㄸ ㄹ ㅁ ㅂ ㅃ ㅅ ㅆ ㅇ ㅈ ㅉ ㅊ ㅋ ㅌ ㅍ ㅎ
// Consonant IPA: spaces separate initial, medial and final position in syllable
export const CONSONANTS = {
  fields: [ 'hangul', 'ipa', 'romanization' ],
  note: 'IPA notation for initial/medial/final positions',
  pool: [
    {
      'hangul': 'ㄱ',
      'ipa': 'k ɡ k̚',
      'romanization': 'g'
    },
    {
      'hangul': 'ㄲ',
      'ipa': 'k͈ k͈ k̚',
      'romanization': 'kk'
    },
    {
      'hangul': 'ㄴ',
      'ipa': 'n n n',
      'romanization': 'n'
    },
    {
      'hangul': 'ㄷ',
      'ipa': 't d t̚',
      'romanization': 'd'
    },
    {
      'hangul': 'ㄸ',
      'ipa': 't͈ t͈ -',
      'romanization': 'tt'
    },
    {
      'hangul': 'ㄹ',
      'ipa': 'ɾ/n ɾ l',
      'romanization': 'r'
    },
    {
      'hangul': 'ㅁ',
      'ipa': 'm m m',
      'romanization': 'm'
    },
    {
      'hangul': 'ㅂ',
      'ipa': 'p b p̚',
      'romanization': 'b'
    },
    {
      'hangul': 'ㅃ',
      'ipa': 'p͈ p͈ -',
      'romanization': 'pp'
    },
    {
      'hangul': 'ㅅ',
      'ipa': 's z t̚',
      'romanization': 's'
    },
    {
      'hangul': 'ㅆ',
      'ipa': 's͈ s͈ t̚',
      'romanization': 'ss'
    },
    {
      'hangul': 'ㅇ',
      'ipa': '∅ ŋ ŋ',
      'romanization': 'ng'
    },
    {
      'hangul': 'ㅈ',
      'ipa': 'tɕ dʑ t̚',
      'romanization': 'j'
    },
    {
      'hangul': 'ㅉ',
      'ipa': 't͈ɕ t͈ɕ -',
      'romanization': 'jj'
    },
    {
      'hangul': 'ㅊ',
      'ipa': 'tɕʰ tɕʰ -',
      'romanization': 'ch'
    },
    {
      'hangul': 'ㅋ',
      'ipa': 'kʰ kʰ k̚',
      'romanization': 'k'
    },
    {
      'hangul': 'ㅌ',
      'ipa': 'tʰ tʰ t̚',
      'romanization': 't'
    },
    {
      'hangul': 'ㅍ',
      'ipa': 'pʰ pʰ p̚',
      'romanization': 'p'
    },
    {
      'hangul': 'ㅎ',
      'ipa': 'h ɦ/∅ -',
      'romanization': 'h'
    }
  ]
};
