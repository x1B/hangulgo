<template>
  <div>
    <h1
      :class="{
        'result-best': score === maxScore,
        'result-ok': score/maxScore > 0.8,
        'result-soso': score/maxScore <= 0.8 && score/maxScore > 0.5,
        'result-bad': score/maxScore <= 0.5 && score/maxScore > 0.3,
        'result-terrible': score/maxScore <= 0.3
      }"
    >{{ score }}/{{ maxScore }}</h1>
    <br>
    <table>
      <thead>
        <tr>
          <th/>
          <th>Answer</th>
          <th>Correct</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(step, i) in steps"
          :key="step.challenge"
          :class="{
            'step--correct': stepResults[ i ],
            'step--mistake': !stepResults[ i ]
          }"
        >
          <td class="challenge">{{ step.solution.challenge }}</td>
          <td class="response">
            <transcript :transcript="step.response" />
          </td>
          <td class="answer">
            <span v-if="stepResults[ i ]">✔</span>
            <transcript
              v-else
              :transcript="step.solution" />
          </td>
          <td>{{ stepResults[ i ] ? 1 : '' }}</td>
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
        .map(({ response, challenge }) =>
          response.challenge === challenge ? SCORE_CORRECT : SCORE_MISTAKE
        )
        .reduce((a, b) => a + b, 0);
    },
    maxScore () {
      return this.$store.state.steps.length * SCORE_CORRECT;
    },
    stepResults () {
      return this.$store.state.steps
        .map(_ => _.solution.challenge === _.response.challenge);
    }
  }
}
</script>

<style lang="scss" scoped>
$color-correct: #393;
$color-mistake: #933;

$color-best: $color-correct;
$color-ok: #696;
$color-soso: #996;
$color-bad: #966;
$color-terrible: $color-mistake;

h1 {
  font-size: 3rem;
  &.result-best { color: $color-best; }
  &.result-ok { color: $color-ok; }
  &.result-soso { color: $color-soso; }
  &.result-bad { color: $color-bad; }
  &.result-terrible { color: $color-terrible; }
}

th { padding-left: 10px; }
.challenge {
  font-size: 2em;
}
.step--mistake {
  .response {
    color: $color-mistake
  }
}
.step--correct {
  .response, .answer {
    color: $color-correct;
  }
}
</style>
