import Vuex from 'vuex';
import { CONSONANTS, VOWELS } from '~/lib/hangul';

export const phases = {
  ENTRY: { entry: true },
  RUNNING: { running: true },
  DONE: { done: true }
};

export const modes = {
  VOWELS: { pool: VOWELS },
  CONSONANTS: { pool: CONSONANTS },
  SYLLABLES: { pool: {} }
};

const NUM_STEPS = 10;
const NUM_OPTIONS = 3;

function createStore () {
  return new Vuex.Store({
    state: {
      phase: phases.ENTRY,
      mode: modes.VOWELS,
      // each challenge consists of
      // - a challenge string,
      // - options (array of strings),
      // - a response (string, initially null),
      // - and the solution (one of the options).
      steps: [],
      currentStep: 0
    },
    computed: {
      score (state) {
        return state.steps
          .map(({ response, solution }) => response === solution ? 1 : -1)
          .reduce((a, b) => a + b, 0);
      }
    },
    mutations: {
      start (state) {
        state.steps = createSteps(NUM_STEPS, NUM_OPTIONS, state.mode);
        state.phase = phases.RUNNING;
        console.log('TODO: DELETE ME', state);
      },
      guess (state, response) {
        state.steps[ state.currentStep ].response = response;
        state.currentStep += 1;
      }
    }
  });
}

function createSteps (numSteps, numOptions, mode) {
  const { pool } = mode;
  const challenges = Object.keys(pool);
  return randomInts(numSteps, challenges.length).map(i => {
    const challenge = challenges[ i ];
    const correctOption = pool[ challenge ];
    const [ answerPosition ] = randomInts(1, numOptions);
    console.log('TODO: DELETE ME', randomItems(numOptions, pool));
    const wrongOptions = randomItems(numOptions, challenges)
      .filter(_ => _.key !== challenge)
      .slice(0, numOptions - 1);
    return {
      challenge,
      key: challenge,
      options: [
        ...wrongOptions.slice(0, answerPosition),
        correctOption,
        ...wrongOptions.slice(answerPosition, numOptions)
      ]
    };
  });
}

function randomItems (n, pool) {
  const keys = Object.keys(pool);
  return randomInts(n, keys.length)
    .map(i => Object.assign({ key: keys[i] }, pool[ keys[i] ]));
}

function randomInts (n, max) {
  const unique = n < max;
  const used = {};
  const xs = new Array(n);
  for (let i = 0; i < n; ++i) {
    const next = Math.round(Math.random() * max);
    if (unique && used[ next ]) {
      --i;
      continue;
    }
    used[ next ] = true;
    xs[i] = next;
  }
  return xs;
}

export default createStore;
