<template>
  <section class="container">
    <div v-if="$store.state.phase.entry">
      <h1 class="title">
        <!-- hangul-go! -->
      </h1>
      <h2 class="subtitle">
        <!-- Train Hangul -->
      </h2>
      <div class="links">
        <button
          type="button"
          @click.prevent="$store.commit('start', modes.VOWELS)"
          class="button--primary button--option">Vowels</button>
        <button
          type="button"
          @click.prevent="$store.commit('start', modes.CONSONANTS)"
          class="button--primary button--option">Consonants</button>
      </div>
    </div>
    <div v-if="$store.state.phase.running">
      <challenge :step="step" />
    </div>
    <div v-if="$store.state.phase.finished">
      <p class="score">Score: {{ store.getters.score }}</p>
    </div>
  </section>
</template>

<script>
import Challenge from '~/components/Challenge.vue';
import { modes } from '~/store';

export default {
  components: { Challenge },
  computed: {
    modes: () => modes,
    step () {
      const { steps, currentStep } = this.$store.state;
      return steps[ currentStep ];
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
