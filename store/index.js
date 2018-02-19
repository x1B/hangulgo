import Vuex from 'vuex';

export const phases = {
  ENTRY: { entry: true },
  RUNNING: { running: true },
  DONE: { done: true }
};

export const modes = {
  VOWELS: {},
  CONSONANTS: {},
  SYLLABLES: {}
};

// 'ㅏ ㅐ ㅑ ㅒ ㅓ ㅔ ㅕ ㅖ ㅗ ㅘ ㅙ ㅚ ㅛ ㅜ ㅝ ㅞ ㅟ ㅠ ㅡ ㅢ ㅣ'
export const VOWELS = {
  'ㅏ': {
    'ipa': '',
    'romanizations': []
  },
  'ㅐ': {
    'ipa': '',
    'romanizations': []
  },
  'ㅑ': {
    'ipa': '',
    'romanizations': []
  },
  'ㅒ': {
    'ipa': '',
    'romanizations': []
  },
  'ㅓ': {
    'ipa': '',
    'romanizations': []
  },
  'ㅔ': {
    'ipa': '',
    'romanizations': []
  },
  'ㅕ': {
    'ipa': '',
    'romanizations': []
  },
  'ㅖ': {
    'ipa': '',
    'romanizations': []
  },
  'ㅗ': {
    'ipa': '',
    'romanizations': []
  },
  'ㅘ': {
    'ipa': '',
    'romanizations': []
  },
  'ㅙ': {
    'ipa': '',
    'romanizations': []
  },
  'ㅚ': {
    'ipa': '',
    'romanizations': []
  },
  'ㅛ': {
    'ipa': '',
    'romanizations': []
  },
  'ㅜ': {
    'ipa': '',
    'romanizations': []
  },
  'ㅝ': {
    'ipa': '',
    'romanizations': []
  },
  'ㅞ': {
    'ipa': '',
    'romanizations': []
  },
  'ㅟ': {
    'ipa': '',
    'romanizations': []
  },
  'ㅠ': {
    'ipa': '',
    'romanizations': []
  },
  'ㅡ': {
    'ipa': '',
    'romanizations': []
  },
  'ㅢ': {
    'ipa': '',
    'romanizations': []
  },
  'ㅣ': {
    'ipa': '',
    'romanizations': []
  }
};

// 'ㄱ ㄲ ㄴ ㄷ ㄸ ㄹ ㅁ ㅂ ㅃ ㅅ ㅆ ㅇ ㅈ ㅉ ㅊ ㅋ ㅌ ㅍ ㅎ'
export const CONSONANTS =
  {
    'ㄱ': {
      'ipa': '',
      'romanizations': []
    },
    'ㄲ': {
      'ipa': '',
      'romanizations': []
    },
    'ㄴ': {
      'ipa': '',
      'romanizations': []
    },
    'ㄷ': {
      'ipa': '',
      'romanizations': []
    },
    'ㄸ': {
      'ipa': '',
      'romanizations': []
    },
    'ㄹ': {
      'ipa': '',
      'romanizations': []
    },
    'ㅁ': {
      'ipa': '',
      'romanizations': []
    },
    'ㅂ': {
      'ipa': '',
      'romanizations': []
    },
    'ㅃ': {
      'ipa': '',
      'romanizations': []
    },
    'ㅅ': {
      'ipa': '',
      'romanizations': []
    },
    'ㅆ': {
      'ipa': '',
      'romanizations': []
    },
    'ㅇ': {
      'ipa': '',
      'romanizations': []
    },
    'ㅈ': {
      'ipa': '',
      'romanizations': []
    },
    'ㅉ': {
      'ipa': '',
      'romanizations': []
    },
    'ㅊ': {
      'ipa': '',
      'romanizations': []
    },
    'ㅋ': {
      'ipa': '',
      'romanizations': []
    },
    'ㅌ': {
      'ipa': '',
      'romanizations': []
    },
    'ㅍ': {
      'ipa': '',
      'romanizations': []
    },
    'ㅎ': {
      'ipa': '',
      'romanizations': []
    }
  };

function createStore () {
  return new Vuex.Store({
    state: {
      phase: phases.ENTRY,
      mode: modes.VOWEL,
      // each challenge consists of
      // - a challenge string,
      // - options (array of strings),
      // - a response (initially null),
      // - and the solution (one of the options).
      steps: [],
      currentStep: 0
    },
    computed: {
      score (state) {
        return state.steps.map( (challenge, response) => {

        } );
      }
    },
    mutations: {
      enter (state) {
        state.steps = range(10).map(_ => createStep(state.mode));
        state.phase = phases.RUNNING;
      },
      guess (state, response) {
        state.steps[ state.currentStep ].response = response;
        state.currentStep += 1;
      }
    }
  });
}

function createStep (mode) {

}

function range (n) {
  const xs = new Array(n);
  for (let i = 0; i < n; ++i) {
    xs[i] = i;
  }
  return xs;
}

export default createStore;
