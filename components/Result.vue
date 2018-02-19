<template>
  <div>
    <h1>Score: {{ score }}/{{ maxScore }}</h1>
    <br>
    <table>
      <thead>
        <tr>
          <th>Challenge</th>
          <th>Answer</th>
          <th>Correct</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="step in steps"
          :key="step.challenge"
          :class="{
            'step--correct': stepResults[ step.challenge ],
            'step--mistake': !stepResults[ step.challenge ]
          }"
        >
          <td class="challenge">{{ step.challenge }}</td>
          <td class="response">
            <transcript :transcript="step.response" />
          </td>
          <td class="answer">
            <span v-if="stepResults[ step.challenge ]">✔</span>
            <transcript
              v-else
              :transcript="step.answer" />
          </td>
          <td>{{ stepResults[ step.challenge ] ? 1 : -1 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Transcript from '~/components/Transcript.vue';

const SCORE_CORRECT = 1;
const SCORE_MISTAKE = 0;

export default {
  components: { Transcript },
  props: {
    steps: {
      type: Array,
      required: true
    }
  },
  computed: {
    score () {
      return this.$store.state.steps
        .map(({ response: { key }, challenge }) =>
          key === challenge ? SCORE_CORRECT : SCORE_MISTAKE)
        .reduce((a, b) => a + b, 0);
    },
    maxScore () {
      return this.$store.state.steps.length * SCORE_CORRECT;
    },
    stepResults () {
      return this.$store.state.steps
        .map(({ response: { key }, challenge }) =>
          ({ challenge, isCorrect: key === challenge }))
        .reduce( (res, next) =>
          Object.assign(res, { [next.challenge]: next.isCorrect }), {} );
    }
  }
}
</script>

<style lang="scss" scoped>
.challenge {
  font-size: 2em;
}
.step--incorrect {
  .response {
    color: #933;
  }
}
.step--correct {
  .response, .answer {
    color: #393;
  }
}
</style>
