<template>
  <section class="container">
    <div v-if="$store.state.phase.entry">
      <app-logo />
      <div class="actions">
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
      {{ $store.state.currentStep + 1 }} / {{ $store.state.steps.length }}
      <challenge
        :step="step"
        @select="$store.commit('guess', $event)" />
    </div>
    <div v-if="$store.state.phase.done">
      <result :steps="$store.state.steps" />
      <div class="actions">
        <button
          type="button"
          @click.prevent="$store.commit('reset')"
          class="button--primary button--option">⤾ Restart</button>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import Challenge from '~/components/Challenge.vue';
import Result from '~/components/Result.vue';
import { modes } from '~/store';

export default {
  components: { AppLogo, Challenge, Result },
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
.actions {
  padding-top: 15px;
}

.button--option {
  font-size: 1.4rem;
}
</style>
