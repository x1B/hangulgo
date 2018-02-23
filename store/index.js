import Vuex from 'vuex';
import { CONSONANTS, VOWELS, WORDS } from '~/lib/hangul';

export const modes = {
  VOWELS,
  CONSONANTS,
  WORDS
};

export const phases = {
  ENTRY: { entry: true },
  RUNNING: { running: true },
  DONE: { done: true }
};

const NUM_STEPS = 10;
const NUM_OPTIONS = 4;

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
    mutations: {
      start (state, mode) {
        state.mode = mode;
        state.steps = createSteps(NUM_STEPS, NUM_OPTIONS, mode);
        state.currentStep = 0;
        state.phase = phases.RUNNING;
      },
      guess (state, response) {
        state.steps[ state.currentStep ].response = response;
        if (state.currentStep + 1 < state.steps.length) {
          state.currentStep += 1;
        } else {
          state.phase = phases.DONE;
        }
      },
      reset (state) {
        state.phase = phases.ENTRY;
        state.steps = [];
      }
    }
  });
}

function createSteps (numSteps, numOptions, mode) {
  const { pool, fields: [ CHALLENGE_FIELD, ...ANSWER_FIELDS ] } = mode;
  const toOption = it => Object.assign(
    { challenge: it[ CHALLENGE_FIELD ] },
    ...ANSWER_FIELDS.map(f => ({ [f]: it[f] }))
  );
  return randomInts(numSteps, pool.length).map(i => {
    const solution = toOption(pool[ i ]);
    const { challenge } = solution;
    const wrongOptions = randomItems(numOptions, pool)
      .filter(_ => _[ CHALLENGE_FIELD ] !== challenge)
      .map(toOption)
      .slice(0, numOptions - 1);
    const [ solutionPosition ] = randomInts(1, numOptions);

    return {
      solution,
      options: [
        ...wrongOptions.slice(0, solutionPosition),
        solution,
        ...wrongOptions.slice(solutionPosition, numOptions)
      ],
      response: null
    };
  });
}

function randomItems (n, list) {
  return randomInts(n, list.length).map(i => list[i]);
}

function randomInts (n, max) {
  const unique = n < max;
  const used = {};
  const xs = new Array(n);
  for (let i = 0; i < n; ++i) {
    const next = Math.floor(Math.random() * max);
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
