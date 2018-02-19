<template>
  <div class="challenge">
    <h1>{{ step.challenge }}</h1>
    <button
      v-for="option in step.options"
      class="button--secondary button--option"
      @click="$emit('select', option)"
      :key="option.key">
      <transcript :transcript="option" />
    </button>
  </div>
</template>

<script>
import Transcript from '~/components/Transcript.vue';
export default {
  components: { Transcript },
  props: {
    step: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
h1 {
  font-size: 8rem;
}

button {
  font-size: 2rem;
  &:hover * {
    color: white;
  }
}
</style>
